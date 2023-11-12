"use client";

import React, { useState } from "react";
import { Form } from "./Form";
import { useFormik } from "formik";
import { AuthInput } from "../Inputs/AuthInput";
import Link from "next/link";
import RestClient from "@/app/RestClient/RequestTypes";
import BaseUrl from "@/app/RestClient/ApiUrls";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { MainButton } from "../buttons/MainButton";

enum STEPS {
  registration = 0,
  confirmation = 1,
}

export const AuthForm = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState<STEPS>(STEPS.registration);
  const [isSubmitting,setIsSubmiting] = useState<boolean>(false)
  const formik = useFormik({
    validateOnBlur: false,
    validateOnChange: false,
    initialValues: {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      confirmPassword: "",
      confirmationCode:"",
    },
    validate: (values) => {
      const errors:any = {};

      const riskyCharactersPattern = /['"\\/]/; 
    
      if (!values.firstname) {
        errors.firstname = "Firstname is required";
      } else if (riskyCharactersPattern.test(values.firstname)) {
        errors.firstname = "Invalid characters in Firstname";
      }
    
      if (!values.lastname) {
        errors.lastname = "Lastname is required";
      } else if (riskyCharactersPattern.test(values.lastname)) {
        errors.lastname = "Invalid characters in Lastname";
      }
    
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      } else if (riskyCharactersPattern.test(values.email)) {
        errors.email = "Invalid characters in Email";
      }
    
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 5) {
        errors.password = "Password length must be over 5 characters";
      } else if (!/\d/.test(values.password)) {
        errors.password = "Password must contain at least 1 number";
      } else if (riskyCharactersPattern.test(values.password)) {
        errors.password = "Invalid characters in Password";
      }
    
      if (!values.confirmPassword) {
        errors.confirmPassword = "Confirm password is required";
      } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Passwords don't match";
      } else if (riskyCharactersPattern.test(values.confirmPassword)) {
        errors.confirmPassword = "Invalid characters in Confirm Password";
      }
      console.log(errors);
      
      return errors;
    },
    onSubmit: async (values) => {
      try {
        if (activeStep === STEPS.registration) {
            // setIsSubmiting(true)
            // await RestClient.postRequest(BaseUrl.confirmEmail,{email:values.email}).finally(()=>setIsSubmiting(false));
            // setActiveStep(STEPS.confirmation);
        } else {
          if(!isSubmitting){
            setIsSubmiting(true)
            await RestClient.postRequest(BaseUrl.register, values).finally(()=>{
              setIsSubmiting(false)
            });
            toast.success("Sucesfully registered", {
              position: "top-center",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            router.push("/login");
          window.scrollTo(0, 0);
        }
        }
      } catch (err: any) {
        setIsSubmiting(false)
        toast.error(err.response.data.message, {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    },
  });

  return (
    <Form
      onSubmit={formik.handleSubmit}
      className="w-full flex flex-col xs:gap-[15px] gap-[25px] justify-start items-start"
    >
      { activeStep === STEPS.registration ?
        <React.Fragment>
               <h2 className="text-[24px] leading-[68px]">
                Personal Information
              </h2>
          <AuthInput
            id={"firstname"}
            name={"firstname"}
            placeholder={"Firstname"}
            label="Firstname"
            type={"text"}
            required
            feedback={formik.errors.firstname}
            onChange={formik.handleChange}
            disabled={isSubmitting}
            value={formik.values.firstname}
          />
          <AuthInput
            id={"lastname"}
            name={"lastname"}
            placeholder={"Lastname"}
            label="Lastname"
            type={"text"}
            required
            feedback={formik.errors.lastname}
            onChange={formik.handleChange}
            disabled={isSubmitting}
            value={formik.values.lastname}
          />
          <AuthInput
            id={"email"}
            name={"email"}
            placeholder={"Email"}
            label="Email"
            type={"text"}
            required
            feedback={formik.errors.email}
            onChange={formik.handleChange}
            disabled={isSubmitting}
            value={formik.values.email}
          />
          <AuthInput
            id={"password"}
            name={"password"}
            placeholder={"password"}
            label="password"
            type={"password"}
            required
            feedback={formik.errors.password}
            onChange={formik.handleChange}
            disabled={isSubmitting}
            value={formik.values.password}
          />
          <AuthInput
            id={"confirmPassword"}
            name={"confirmPassword"}
            placeholder={"Confirm password"}
            label="Confirm password"
            type={"password"}
            required
            feedback={formik.errors.confirmPassword}
            onChange={formik.handleChange}
            disabled={isSubmitting}
            value={formik.values.confirmPassword}
          />
          <div className="flex justify-between items-center w-full xs:flex-nowrap flex-wrap">
            <button
              className={`w-fit  font-medium select-none
              tracking-[0.5px] uppercase bg-black
              lg:hover:bg-secondary text-white transition-colors duration-200
              px-[3rem] py-2
              `}
              type="submit"
            >
              Submit
            </button>
            <Link
              className=" text-gray font-medium text-[14px] tracking-[0.5px] uppercase"
              href={"/"}
              aria-disabled={isSubmitting}
            >
              Back
            </Link>
          </div>
        </React.Fragment>
        :
        <React.Fragment>
            <h2 className="md:text-[20px] text-[14px]">
              Verification code has been sent to:  <span className=" text-secondary">{formik.values.email}</span>
            </h2>
            <div className="flex w-full flex-col  gap-[15px]">
              <p className="md:text-[18px] text-[12px] text-secondaryGray">Please enter verification code</p>
            <AuthInput
              id={"confirmationCode"}
              name={"confirmationCode"}
              placeholder={"Confirmation code"}
              // label="Confirmation code"
              type={"text"}
              required
              feedback={formik.errors.confirmationCode}
              onChange={formik.handleChange}
              disabled={isSubmitting}
              value={formik.values.confirmationCode}
              />
              <MainButton type="submit" label="Submit"/>
            </div>
        </React.Fragment>
      }
    </Form>
  );
};
