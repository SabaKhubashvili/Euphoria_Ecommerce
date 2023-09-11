"use client";

import React, { useCallback, useState } from "react";
import { Cart } from "./Cart";
import { motion } from "framer-motion";
import { Icon } from "../Icon";
import { WebsiteIcons } from "@/public/Svg/IconsObject";
import { SearchInput } from "../Inputs/SearchInput";
import { SecondaryInput } from "../Inputs/SecondaryInput";
import { AuthInput } from "../Inputs/AuthInput";
import { MainDropdown } from "../Dropdown/MainDropdown";
import { Roboto } from "../assets/Fonts";
import { MainButton } from "../buttons/MainButton";
import { useFormik } from "formik";
import Image from "next/image";
import { Dropdown_Down } from "@/public/Svg/Icons";
import { CartAdressInfo } from "./CartAdressInfo";
import { CartPay } from "./CartPay";
import { CartDone } from "./CartDone";


export enum Steps {
  Cart = 0,
  Shipping = 1,
  Payment = 2,
  Done = 3,
}

export interface InfoType {
  country: string;
  state: string;
  zip: string;
}

export const CartPage = () => {
  const [step, setStep] = useState<Steps>(Steps.Cart);

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      streetAdress: "",
      city: "",
      zip: "",
    },
    validate: (values) => {
      // const errors: any = {};

      // if (values.email.length === 0) {
      //   errors.email = "Email is required";
      // } else if (
      //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      // ) {
      //   errors.email = "Invalid email address";
      // }

      // if (values.firstName.length === 0) {
      //   errors.firstName = "First name is required";
      // }

      // if (values.streetAdress.length === 0) {
      //   errors.streetAdress = "Street address is required";
      // }

      // if (values.city.length === 0) {
      //   errors.city = "City is required";
      // }

      // if (values.zip.length === 0) {
      //   errors.zip = "Zip code is required";
      // }

      // return errors;
    },
    onSubmit: (values) => {
      setStep(Steps.Payment);
    },
  });
  const handleNextButton = useCallback(() => {
    window.scrollTo({
      top:0
    })
    if (step === Steps.Shipping) {
      formik.handleSubmit();
    } else if(step !== Steps.Done) {

        setStep((prev) => prev + 1);

    }
  }, [step, Steps]);

  return (
    <div className="max-w-[1400px] mx-auto mb-[150px]">
      {step === Steps.Cart ? (
        <div>
          <p className="text-gray text-[14px]  text-center">
            Home / Shopping Cart
          </p>
          <h1 className=" sm:text-[48px] xs:text-[35px] text-[30px] xs:leading-[68px] pt-[13px]  text-center ">
            Shopping Cart
          </h1>
          <div className="mt-[55px] max-w-[1600px] mx-auto">
            <Cart
              setStep={(value) => {
                setStep(value);
              }}
              zipOnchange={formik.handleChange}
            />
          </div>
        </div>
      ) : step === Steps.Shipping ||
        step === Steps.Payment ||
        step === Steps.Done ? (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-gray text-[14px]  text-center">
            Home / Create Order
          </p>
          <div className="pt-[26px] mx-auto flex justify-center items-center relative lg:w-[388px] sm:w-[300px] w-[80%]">
            <div
              className={`h-[9px] w-full absolute 
                bg-divider`}
            >
              {step === Steps.Payment || step === Steps.Done ? (
                <motion.div
                  initial={{ opacity: 0, width: "0%" }}
                  animate={{
                    opacity: 1,
                    width:
                      step === Steps.Payment
                        ? "50%"
                        : step === Steps.Done
                        ? "100%"
                        : "0%",
                  }}
                  exit={{ opacity: 0, width: "0%" }}
                  transition={{ duration: 0.3 }}
                  className="h-[9px] bg-advanced"
                />
              ) : (
                ""
              )}
            </div>
            <div className="relative w-1/2">
              <div
                className={`absolute left-0 right-0 m-auto w-fit sm:top-[-20px] top-[-14px] bottom-0`}
              >
                {step === Steps.Payment || step === Steps.Done ? (
                  <div className="sm:w-[40px] sm:h-[40px] h-[30px] w-[30px]">
                    <Icon svg={WebsiteIcons["DoneCircle"]} />
                  </div>
                ) : (
                  <React.Fragment>
                    <h2 className="absolute text-center left-0 right-0 m-auto sm:top-[8px] top-[3px]">
                      1
                    </h2>
                    <div className="sm:w-[40px] sm:h-[40px] h-[30px] w-[30px]">
                      <Icon svg={WebsiteIcons["Circle"]} />
                    </div>
                  </React.Fragment>
                )}
              </div>
            </div>
            <div className="relative w-1/2">
              <div className="absolute left-0 right-0 m-auto w-fit sm:top-[-20px] top-[-14px] bottom-0">
                {step === Steps.Done ? (
                  <div className="sm:w-[40px] sm:h-[40px] h-[30px] w-[30px]">
                    <Icon svg={WebsiteIcons["DoneCircle"]} />
                  </div>
                ) : (
                  <React.Fragment>
                    <h2 className="absolute text-center left-0 right-0 m-auto sm:top-[8px] top-[3px]">
                      2
                    </h2>
                    <div className="sm:w-[40px] sm:h-[40px] h-[30px] w-[30px]">
                      <Icon svg={WebsiteIcons["Circle"]} />
                    </div>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
          { step  === Steps.Shipping ?

            <CartAdressInfo
            errors={formik.errors}
            handleChange={formik.handleChange}
            values={formik.values}
            setFieldValue={(field: string, value: string) =>
              formik.setFieldValue(field, value)
            }
            />
            :
            step === Steps.Payment ? 
            <CartPay
              setStep={()=>{setStep(Steps.Done)}}
            />
            :
            step === Steps.Done ?
              <CartDone/>
            :
            ''
          }
          { step !== Steps.Payment && step !== Steps.Done ?

            <div className={`flex justify-between w-full items-center lg:w-3/5  pt-[20px]`}>
            <MainButton label="Next" onClick={handleNextButton} type="Submit" />
            <h3
              className="text-gray text-[14px] tracking-[0.5px] uppercase font-medium cursor-pointer"
              onClick={() => {
                setStep((prev) => prev - 1);
              }}
            >
              Back
            </h3>
          </div>
          :
          ''
            }
        </motion.div>
      ) : (
        ""
      )}
    </div>
  );
};
