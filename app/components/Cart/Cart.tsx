"use client";

import Image from "next/image";
import React, { useState } from "react";
import Counter from "../buttons/Counter";
import { SearchInput } from "../Inputs/SearchInput";
import { GrayButton } from "../buttons/GrayButton";
import { MainDropdown } from "../Dropdown/MainDropdown";
import { MainButton } from "../buttons/MainButton";

export const Cart = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [locationInfo, setLocationInfo] = useState({
    country: "",
    state: "",
    zip: "",
  });
  const [totalPrice,setTotalPrice] = useState(120.00)

  return (
    <div className="grid grid-cols-3 gap-[20px] mb-[40px]">
      <div className="col-span-2">
        <table className="w-full  p-6 " cellPadding={10}>
          <thead className="w-full pb-[10px] ">
            <tr className="w-full border-b-[1px] border-b-divider border-solid pb-[10px]  justify-between  ">
              <th className="uppercase text-gray font-medium tracking-[0.5px] text-[18px] text-center w-[30%] ">
                PRODUCT
              </th>
              <th className="uppercase text-gray font-medium tracking-[0.5px] text-[18px] text-center">
                Price
              </th>
              <th className="uppercase text-gray font-medium tracking-[0.5px] text-[18px] text-center">
                Size
              </th>
              <th className="uppercase text-gray font-medium tracking-[0.5px] text-[18px] text-center">
                Quantity
              </th>
              <th className="uppercase text-gray font-medium tracking-[0.5px] text-[18px] text-center">
                Total
              </th>
            </tr>
          </thead>
          <tbody className="border-b-[1px] gap-[15px] border-b-divider border-solid">
            <tr className="w-full !py-[24px]">
              <td className="inline-flex w-fit mr-[20px] gap-[10px] ">
                <Image
                  src={"/Images/Product/Product.webp"}
                  alt="Product"
                  width={90}
                  height={110}
                  className="object-cover w-[83px] h-[103px]"
                />
                <div className=" -col gap-[13px]">
                  {" "}
                  {/* Adjusted gap value */}
                  <h2 className="text-[18px] font-medium tracking-[0.5px] uppercase">
                    Angels malu zip jeans slim black used
                  </h2>
                  <div className="p-[2px] border-[1px] border-divider w-[20px] h-[20px]">
                    <div className="h-full w-full bg-blue-400 m-auto p-auto" />
                  </div>
                </div>
              </td>
              <td className="uppercase text-black text-[14px]   items-center ml-[15px]  text-center">
                120,00 EUR
              </td>
              <td className="uppercase text-black text-[14px]   items-center  text-center">
                W32
              </td>
              <td className="uppercase text-black text-[14px]  items-center ml-[15px] mx-auto flex justify-center">
                <Counter
                  value={quantity}
                  setValue={(value: number) => {
                    setQuantity(value);
                    setTotalPrice(value * 120)
                  }}
                  max={20}
                />
              </td>
              <td className="uppercase text-black text-[14px] items-center select-none  text-center">
                {120 * quantity},00 EURO
                <div></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-span-1 flex flex-col gap-[24px]">
        <div className="w-full border-[2px] border-solid border-divider bg-lightBlue pt-[36px] pb-[21px] px-[32px]">
          <div>
            <h1 className="text-[24px] leading-[68px]">Apply Discount Code</h1>
            <div className="flex">
              <SearchInput placeholder="Enter discount code" />
              <div className="w-[170px]">
                <GrayButton
                  onClick={() => {}}
                  label="Apply Discount"
                  small
                  full
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[15px] pt-[20px]">
            <div className="flex flex-col gap-[8px]">
              <h1 className="text-[24px] leading-[28px]">
                Estimate Shipping and Tax
              </h1>
              <p className=" text-gray">
                Enter your destination to get a shipping estimate.
              </p>
            </div>
            <div className="flex flex-col gap-[26px] pt-[10px]">
              <div className="flex items-center full gap-[10px]">
                <h2 className="flex basis-1/3">
                  Country <span className="text-rose-700">*</span>
                </h2>
                <MainDropdown
                  full
                  label={
                    locationInfo.country.length > 0
                      ? locationInfo.country
                      : "Choose country"
                  }
                  content={[
                    {
                      onClick: (value) => {
                        value &&
                          setLocationInfo((prev) => ({
                            ...prev,
                            country: value,
                          }));
                      },
                      label: "Georgia",
                    },
                    {
                      onClick: (value) => {
                        value &&
                          setLocationInfo((prev) => ({
                            ...prev,
                            country: value,
                          }));
                      },
                      label: "Usa",
                    },
                  ]}
                />
              </div>
              <div className="flex full gap-[10px] items-center">
                <h2 className="flex basis-1/3">
                  State/Province <span className="text-rose-700">*</span>
                </h2>
                <MainDropdown
                  full
                  label={
                    locationInfo.state.length > 0
                      ? locationInfo.state
                      : "Choose country"
                  }
                  content={[
                    {
                      onClick: (value) => {
                        value &&
                          setLocationInfo((prev) => ({
                            ...prev,
                            state: value,
                          }));
                      },
                      label: "Tbilisi",
                    },
                    {
                      onClick: (value) => {
                        value &&
                          setLocationInfo((prev) => ({
                            ...prev,
                            state: value,
                          }));
                      },
                      label: "Batumi",
                    },
                  ]}
                />
              </div>
              <div className="flex full gap-[10px] items-center">
                <h2 className="flex basis-1/3">
                  Zip/Postal Code <span className="text-rose-700">*</span>
                </h2>
                <SearchInput
                  placeholder=""
                  onChange={(e) =>
                    setLocationInfo((prev) => ({
                      ...prev,
                      zip: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-[2px] border-solid border-divider bg-lightBlue 
        ">
          <div className=" flex flex-col gap-[10px] pt-[36px] pb-[21px] px-[32px]">

            <div className="flex justify-between ">
                  <p>Subtotal</p>
                  <p>120.00 EUR</p>
            </div>
            <div className="flex justify-between font-medium text-gray">
                  <p>Delivering</p>
                  <p>0.00 EUR</p>
            </div>
            <div className="flex justify-between text-[24px] pt-[10px]">
                  <p>Order total</p>
                  <p>{totalPrice} EUR</p>
            </div>
          </div>
          <div className="border-t-[1px]   mt-[18px] h-[60px]">
                  <MainButton
                    label="proceed to checkout"
                    full
                    onClick={(e)=>{}}
                  />
          </div>
        </div>
      </div>
    </div>
  );
};
