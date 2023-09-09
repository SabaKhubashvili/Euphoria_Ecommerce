"use client";

import React, { useState } from "react";
import { Cart } from "./Cart";
import { motion } from "framer-motion";
import { Icon } from "../Icon";
import { WebsiteIcons } from "@/public/Svg/IconsObject";

export enum Steps {
  Cart = "Cart",
  Shipping = "Shipping",
  Payment = "payment",
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
      ) : step === Steps.Shipping ? (
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
                    <div className="h-[9px] w-full bg-advanced" />
                    <div className="absolute left-0 right-0 m-auto w-fit top-[-14px] bottom-0">

                    <Icon
                        svg={WebsiteIcons['DoneCircle']}
                        />
                        </div>
                </div>
                <div className="relative w-[194px]">
                    <div className="h-[9px] w-full bg-divider" />
                    <div className="absolute left-0 right-0 m-auto w-fit top-[-14px] bottom-0">
                    <h2 className="absolute text-center left-0 right-0 m-auto top-[8px]">2</h2>
                    <Icon
                        svg={WebsiteIcons['Circle']}
                        />
                    </div>
                </div>
          </div>
        </motion.div>
      ) : (
        ""
      )}
    </div>
  );
};
