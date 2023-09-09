"use client";

import React, { useState } from "react";
import { Cart } from "./Cart";
import { motion } from "framer-motion";
import { Icon } from "../Icon";
import { WebsiteIcons } from "@/public/Svg/IconsObject";

export enum Steps {
  Cart = 0,
  Shipping = 1,
  Payment = 2,
  Done = 3
}

export const CartPage = () => {
  const [step, setStep] = useState<Steps>(Steps.Cart);
  return (
    <div>
      {step === Steps.Cart ? (
        <div
        //   initial={{ opacity: 0, x: '-100%' }}
        //   animate={{ opacity: 1, x: 0 }}
        //   exit={{ opacity: 0, x: '-100%' }}
        //   transition={{ duration: 0.1 }}
        >
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
            />
          </div>
        </div>
      ) : step === Steps.Shipping || step === Steps.Payment || step === Steps.Done ? (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.1 }}
        >
          <p className="text-gray text-[14px]  text-center">
            Home / Create Order
          </p>
          <div className="pt-[26px] flex justify-center items-center">
            <div className="relative w-[194px]">
              <div
                className={`h-[9px] w-full
                bg-divider`}
              >{ step === Steps.Payment || step ===  Steps.Done ?
                <motion.div
                  initial={{ opacity: 0, width: "0%" }}
                  animate={{ opacity: 1, width: '100%' }}
                  exit={{ opacity: 0, width:0 }}
                  transition={{ duration: 0.1 }}
                  className="h-[9px] bg-advanced"
            />
          :
          ''}

              </div>
              <div
                className={`absolute left-0 right-0 m-auto w-fit top-[-14px] bottom-0`}
              >
                {step === Steps.Payment || step === Steps.Done ? (
                  <React.Fragment>
                    <Icon svg={WebsiteIcons["DoneCircle"]} />
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <h2 className="absolute text-center left-0 right-0 m-auto top-[8px]">
                      1
                    </h2>
                    <Icon svg={WebsiteIcons["Circle"]} />
                  </React.Fragment>
                )}
              </div>
            </div>
            <div className="relative w-[194px]">
            <div
                className={`h-[9px] w-full
                bg-divider`}
              >{ step === Steps.Done &&
                <motion.div
                  initial={{ opacity: 0, width: "0%" }}
                  animate={{ opacity: 1, width: '100%' }}
                  exit={{ opacity: 0, width:0 }}
                  transition={{ duration: 0.1 }}
                  className="h-[9px] bg-advanced"
            />}

              </div>
              <div className="absolute left-0 right-0 m-auto w-fit top-[-14px] bottom-0">
              {step === Steps.Done ? (
                  <React.Fragment>
                    <Icon svg={WebsiteIcons["DoneCircle"]} />
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <h2 className="absolute text-center left-0 right-0 m-auto top-[8px]">
                      2
                    </h2>
                    <Icon svg={WebsiteIcons["Circle"]} />
                  </React.Fragment>
                )}
              </div>
            </div>
            <div onClick={()=>{setStep(Steps.Payment)}}>
              Click here payment
            </div>
            <div onClick={()=>{setStep(Steps.Done)}}>
              Click here
            </div>
          </div>
        </motion.div>
      ) : (
        ""
      )}
    </div>
  );
};
