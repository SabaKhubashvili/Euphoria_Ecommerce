'use client'

import Image from "next/image";
import React, { useState } from "react";
import Counter from "../buttons/Counter";

export const Cart = () => {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="grid grid-cols-3 gap-[20px]">
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
                  src={'/Images/Product/Product.webp'}
                  alt="Product"
                  width={90}
                  height={110}
                  className="object-cover w-[83px] h-[103px]"
                />
                <div className=" -col gap-[13px]"> {/* Adjusted gap value */}
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
                  }}
                  max={20}
                />
              </td>
              <td className="uppercase text-black text-[14px] items-center select-none  text-center">
                {120 * quantity},00 EURO
                <div>
              
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-span-1 bg-black">Info</div>
    </div>
  );
};
