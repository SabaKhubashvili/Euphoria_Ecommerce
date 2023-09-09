"use client";

import React, { useState } from "react";
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
  const [info, setInfo] = useState({
    country: "",
    state: "",
    zip: "",
  });
  console.log(info);

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
              setInfo={(info: InfoType) => {
                setInfo((prev) => ({ ...prev, ...info }));
              }}
              info={info}
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
              >
                {step === Steps.Payment || step === Steps.Done ? (
                  <motion.div
                    initial={{ opacity: 0, width: "0%" }}
                    animate={{ opacity: 1, width: "100%" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.1 }}
                    className="h-[9px] bg-advanced"
                  />
                ) : (
                  ""
                )}
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
              >
                {step === Steps.Done && (
                  <motion.div
                    initial={{ opacity: 0, width: "0%" }}
                    animate={{ opacity: 1, width: "100%" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.1 }}
                    className="h-[9px] bg-advanced"
                  />
                )}
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
          </div>
          <div className="flex justify-between lg:flex-row flex-col pt-[57px]">
            <div className="flex flex-col gap-[40px] w-full lg:basis-3/5">
              <div className="flex flex-col gap-[36px] ">
                <div className="pb-[36px] border-b-divider border-b-[1px]">
                  <h1 className="text-[24px]">Shipping Address</h1>
                  <div className="pt-[34px] w-full flex flex-col gap-[27px]">
                    <AuthInput
                      label="Email Address"
                      required
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      onChange={() => {}}
                    />
                    <AuthInput
                      label="Zip/Postal Code"
                      required
                      id="zip"
                      name="email"
                      type="email"
                      placeholder=""
                      defaultValue={info.zip}
                      onChange={() => {}}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[13px]">
                  <AuthInput
                    label="First Name"
                    required
                    id="firstname"
                    name="firstname"
                    type="text"
                    placeholder=""
                    onChange={() => {}}
                  />
                  <AuthInput
                    label="Last Name"
                    required
                    id="lastname"
                    name="lastname"
                    type="text"
                    placeholder=""
                    onChange={() => {}}
                  />
                  <AuthInput
                    label="Street Adress"
                    required
                    id="streetadress"
                    name="streetadress"
                    type="text"
                    placeholder=""
                    onChange={() => {}}
                  />

                  <div className="flex full gap-[10px] justify-between xl:flex-row flex-col xl:items-center">
                    <h2 className={`${Roboto.className} flex `}>
                      State/Province <span className="text-rose-700">*</span>
                    </h2>
                    <div className="basis-2/3">
                      <MainDropdown
                        full
                        label={
                          info.state.length > 0 ? info.state : "Choose City"
                        }
                        content={[
                          {
                            onClick: (value) => {
                              value &&
                                setInfo((prev) => ({
                                  ...prev,
                                  state: value,
                                }));
                            },
                            label: "Tbilisi",
                          },
                          {
                            onClick: (value) => {
                              value &&
                                setInfo((prev) => ({
                                  ...prev,
                                  state: value,
                                }));
                            },
                            label: "Batumi",
                          },
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-full items-center">
                <MainButton
                  label="Next"
                  onClick={() => setStep((prev) => prev + 1)}
                />
                <h3
                  className="text-gray text-[14px] tracking-[0.5px] uppercase font-medium"
                  onClick={() => {
                    setStep((prev) => prev - 1);
                  }}
                >
                  Back
                </h3>
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
