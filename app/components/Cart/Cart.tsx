'use client'

import Image from "next/image";
import React, { useState } from "react";
import Counter from "../buttons/Counter";

export const Cart = () => {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="grid grid-cols-3 gap-[20px]">
      <div className="col-span-2">
        <table className="w-full">
          <thead className="w-full pb-[10px]">
            <tr className="w-full border-b-[1px] border-b-divider border-solid pb-[10px] flex justify-between  ">
              <th className="uppercase text-gray font-medium tracking-[0.5px] text-[18px] text-start w-[30%] ">
                PRODUCT
              </th>
              <th className="uppercase text-gray font-medium tracking-[0.5px] text-[18px] text-start">
                Price
              </th>
              <th className="uppercase text-gray font-medium tracking-[0.5px] text-[18px] text-start">
                Size
              </th>
              <th className="uppercase text-gray font-medium tracking-[0.5px] text-[18px] text-start">
                Quantity
              </th>
              <th className="uppercase text-gray font-medium tracking-[0.5px] text-[18px] text-start">
                Total
              </th>
            </tr>
          </thead>
          <tbody className="!py-[24px] flex flex-col border-b-[1px] border-b-divider border-solid">
            <tr className="flex justify-between w-full">
              <td className="w-[30%] inline-flex gap-[10px] "> 
                <Image
                  src={'/Images/Product/Product.webp'}
                  alt="Product"
                  width={90}
                  height={110}
                  className="object-cover w-[83px] h-[103px]"
                />
                <div className="flex flex-col gap-[13px]"> {/* Adjusted gap value */}
                  <h2 className="text-[18px] font-medium tracking-[0.5px] uppercase">
                    Angels malu zip jeans slim black used
                  </h2>
                  <div className="p-[2px] border-[1px] border-divider w-[20px] h-[20px]">
                    <div className="h-full w-full bg-blue-400 m-auto p-auto" />
                  </div>
                </div>
              </td>
              <td className="uppercase text-black text-[14px] text-start item-center">
                120,00 EUR
              </td>
              <td className="uppercase text-black text-[14px] text-start item-center">
                W32
              </td>
              <td className="uppercase text-black text-[14px] text-start item-center">
                <Counter
                  value={quantity}
                  setValue={(value: number) => {
                    setQuantity(value);
                  }}
                  max={20}
                />
              </td>
              <td className="uppercase text-black text-[14px] text-start item-center">
                {120 * quantity},00 EURO
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-span-1">Info</div>
    </div>
  );
};
