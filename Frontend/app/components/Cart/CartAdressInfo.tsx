import React from "react";
import { AuthInput } from "../Inputs/AuthInput";
import { MainDropdown } from "../Dropdown/MainDropdown";
import { Roboto } from "../assets/Fonts";
import Image from "next/image";
import { Dropdown_Down } from "@/public/Svg/Icons";
import { SmallCartInfo } from "./SmallCartInfo";

interface Props {
  errors: any;
  handleChange: (e: any) => void;
  values: any;
  setFieldValue: (field: string, value: string) => void;
}

export const CartAdressInfo = ({
  errors,
  handleChange,
  values,
  setFieldValue,
}: Props) => {
  return (
    <div className="flex justify-between lg:flex-row flex-col pt-[57px] gap-[20px]">
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
                onChange={handleChange}
                feedback={errors.email}
              />
              <AuthInput
                label="Zip/Postal Code"
                required
                id="zip"
                name="zip"
                type="zip"
                placeholder=""
                defaultValue={values.zip}
                onChange={handleChange}
                feedback={errors.zip}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[13px]">
            <AuthInput
              label="First Name"
              required
              id="firstName"
              name="firstName"
              type="text"
              placeholder=""
              onChange={handleChange}
              feedback={errors.firstName}
            />
            <AuthInput
              label="Last Name"
              required
              id="lastName"
              name="lastName"
              type="text"
              placeholder=""
              onChange={handleChange}
            />
            <AuthInput
              label="Street Adress"
              required
              id="streetAdress"
              name="streetAdress"
              type="text"
              placeholder=""
              onChange={handleChange}
              feedback={errors.streetAdress}
            />

            <div className="flex full gap-[10px] justify-between xl:flex-row flex-col xl:items-center">
              <h2 className={`${Roboto.className} flex `}>
                State/Province <span className="text-rose-700">*</span>
              </h2>
              <div className="basis-2/3 ">
                <MainDropdown
                  full
                  label={values.city.length > 0 ? values.city : "Choose City"}
                  content={[
                    {
                      onClick: (value) => {
                        value && setFieldValue("city", value);
                      },
                      label: "Tbilisi",
                    },
                    {
                      onClick: (value) => {
                        value && setFieldValue("city", value);
                      },
                      label: "Batumi",
                    },
                  ]}
                />
                {errors.city && (
                  <div className="text-rose-700 pt-[4px]">{errors.city}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
                <SmallCartInfo/>
    </div>
  );
};
