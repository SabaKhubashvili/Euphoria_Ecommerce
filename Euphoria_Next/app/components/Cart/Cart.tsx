"use client";

import Image from "next/image";
import React, { useState } from "react";
import Counter from "../buttons/Counter";
import { SearchInput } from "../Inputs/SearchInput";
import { GrayButton } from "../buttons/GrayButton";
import { MainButton } from "../buttons/MainButton";
import { Steps } from "./CartPage";
import { CartInterface } from "@/app/types";
import { CartTableRow } from "./CartTableRow";
import { MainTable } from "../tables/MainTable";

export const Cart = ({
  setStep,
  zipOnchange,
  data,
}: {
  setStep: (value: Steps) => void;
  zipOnchange: (e: any) => void;
  data: CartInterface;
}) => {
  const [totalPrice, setTotalPrice] = useState(() => {
    return data.products.reduce((sum, product) => {
      return sum + product.quantity * product.product.price;
    }, 0);
  });

  
  return (
    <div className="grid grid-cols-3 gap-[20px] mb-[40px]">
      <div className="xl:col-span-2 col-span-3   max-h-[750px] overflow-y-auto overflow-x-auto">
        <table className="w-full  p-6 select-none " cellPadding={10}>
          <thead className="w-full pb-[10px] ">
            <tr className="w-full border-b-[1px] border-b-divider border-solid pb-[10px]">
              <th className="uppercase text-gray font-medium tracking-[0.5px] text-[18px] text-start w-[30%] ">
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
          <tbody className="border-b-[1px]  border-b-divider border-solid">
            {data.products.map((product) => (
                <CartTableRow totalPriceOnChange={(num:number)=>setTotalPrice(num)} key={product._id} {...product}/>
            ))}
          </tbody>
        </table>
      </div>
      <div className="xl:col-span-1 col-span-3 flex flex-col gap-[24px]">
        <div className="w-full border-[2px] border-solid border-divider bg-lightBlue pt-[36px] pb-[21px] lg:px-[32px] sm:px-[25px] px-[10px] ">
          <div>
            <h1 className="lg:text-[24px] text-[18px]  leading-[68px]">
              Apply Discount Code
            </h1>
            <div className="flex sm:flex-row flex-col">
              <SearchInput placeholder="Enter discount code" />
              <div className="sm:w-1/3 w-full">
                <GrayButton
                  onClick={() => {}}
                  label="Apply Discount"
                  small
                  full
                />
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col gap-[15px] pt-[20px]">
            <div className="flex flex-col gap-[8px]">
              <h1 className=" xl:text-[24px] lg:text-[19px] leading-[28px]">
                Estimate Shipping and Tax
              </h1>
              <p className=" text-gray xl:text-[18px] lg:text-[16px] md:text-[15px] text-[14px] ">
                Enter your destination to get a shipping estimate.
              </p>
            </div>
            <div className="flex flex-col gap-[26px] pt-[10px]">
              {/* <div className="flex xl:flex-row flex-col xl:items-center full gap-[10px]">
                <h2 className="flex basis-1/3">
                  Country <span className="text-rose-700">*</span>
                </h2>
                <MainDropdown
                  full
                  label={
                    info.country.length > 0 ? info.country : "Choose country"
                  }
                  content={[
                    {
                      onClick: (value) => {
                        value &&
                          setInfo({
                            country: value,
                          });
                      },
                      label: "Georgia",
                    },
                    {
                      onClick: (value) => {
                        value &&
                          setInfo({
                            country: value,
                          });
                      },
                      label: "Usa",
                    },
                  ]}
                />
              </div>
              <div className="flex full gap-[10px] xl:flex-row flex-col xl:items-center">
                <h2 className="flex basis-1/3">
                  State/Province <span className="text-rose-700">*</span>
                </h2>
                <MainDropdown
                  full
                  label={info.state.length > 0 ? info.state : "Choose City"}
                  content={[
                    {
                      onClick: (value) => {
                        value &&
                          setInfo({
                            state: value,
                          });
                      },
                      label: "Tbilisi",
                    },
                    {
                      onClick: (value) => {
                        value &&
                          setInfo({
                            state: value,
                          });
                      },
                      label: "Batumi",
                    },
                  ]}
                />
              </div> 
              <div className="flex full gap-[10px] xl:flex-row flex-col xl:items-center">
                <h2 className="flex basis-2/5">
                  Zip/Postal Code <span className="text-rose-700">*</span>
                </h2>
                <SearchInput
                  id="zip"
                  name="zip"
                  placeholder=""
                  onChange={zipOnchange}
                />
              </div>
            </div>
          </div> */}
        </div>
        <div
          className="border-[2px] border-solid border-divider bg-lightBlue 
        "
        >
          <div className=" flex flex-col gap-[10px] pt-[36px] pb-[21px] lg:px-[32px] sm:px-[25px] px-[10px] ">
            <div className="flex justify-between xl:text-[24px] lg:text-[19px] md:text-[17px] text-[15px] ">
              <p>Subtotal</p>
              <p>{totalPrice} GEL</p>
            </div>
            <div className="flex justify-between font-medium xl:text-[24px] lg:text-[19px] md:text-[17px] text-[15px] text-gray">
              <p>Delivering</p>
              <p>0.00 EUR</p>
            </div>
            <div className="flex justify-between xl:text-[24px] lg:text-[19px] md:text-[17px] text-[15px] pt-[10px]">
              <p>Order total</p>
              <p>{totalPrice} GEL</p>
            </div>
          </div>
          <div className="border-t-[1px]   mt-[18px] h-[60px]">
            <MainButton
              label="proceed to checkout"
              full
              onClick={(e) => setStep(Steps.Shipping)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
