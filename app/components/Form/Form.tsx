"use client";

import React, { useState } from "react";
import { Formik, Form as FormikForm } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import { CloseIcon } from "@/public/Svg/Icons";
import { CloseIconWhite } from "@/public/Svg/Icons/CloseIconWhite";

export interface FormProps {
  children?: React.ReactNode;
  submitText?: string;
  onSubmit: () => void;
  initialValues?: any;
  hideError?: boolean;
  className?: string;
}

export function Form({
  children,
  onSubmit,
  initialValues,
  hideError,
  className,
}: FormProps) {
  const [errorType, setErrorType] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [requestNumber, setRequestNumber] = useState<number>(0);
  const recaptchaRef = React.useRef(null);
  const [recaptchaSuccesed, setRecaptchaSuccesed] = useState<boolean>(false);

  const handleRecaptchaChange = (value: any) => {
    if (value === null) {
      setRecaptchaSuccesed(false);
    } else {
      setRecaptchaSuccesed(true);
    }
  };

  return (
    <Formik
      initialValues={initialValues || {}}
      onSubmit={async (values, actions) => {
        setRequestNumber((prev) => prev + 1);

        if (recaptchaSuccesed === false && requestNumber >= 5) {
          setErrorType("fail");
          setErrorMessage(
            "reCaptcha failed \n Please check your reCAPTCHA responses and try again."
          );
          return;
        }
        try {
          await onSubmit();
        } catch (error) {
          setErrorType("fail");
          setErrorMessage(
            "Process Failed! \n Something went wrong, try again."
          );
        } finally {
          if (requestNumber >= 5) {
            setRecaptchaSuccesed(false);
          }
          actions.setSubmitting(false);
        }
      }}
    >
      {(formikProps) => (
        <FormikForm
          method="post"
          className={`auth-options ${className}`}
          onSubmit={formikProps.handleSubmit}
        >
          {!hideError && errorType.length > 0 ? (
            <div
              className={`bg-red-500 flex w-full text-white justify-between items-center py-2 px-5`}
            >
              <div>
                <div>
                  {errorMessage.split("\n").map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </div>
              <p className="w-6 cursor-pointer" onClick={() => setErrorType("")}>
                <CloseIconWhite/>
              </p>
            </div>
          ) : (
            ""
          )}
          {children}
          {requestNumber >= 5 && !recaptchaSuccesed && (
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6Lc0lXEnAAAAADBXkqpNFVK4U3WDBMy3cbVdgJZ3"
              onChange={handleRecaptchaChange}
            />
          )}
        </FormikForm>
      )}
    </Formik>
  );
}
