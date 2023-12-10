"use client";
import { Dropdown_Down } from "@/public/Svg/Icons";
import Image from "next/image";
import React, { useState } from "react";
import { CartRowInterface } from "@/app/types";
import Link from "next/link";

export const SmallCartInfo = ({ data,totalPrice }: { data: CartRowInterface[],totalPrice:number }) => {
  const [isOpen,setIsOpen] = useState(true)


  return (
    <div className="py-[40px]  px-[30px] border-divider border-[2px] bg-lightBlue h-fit lg:basis-2/5">
      <h1 className="text-[24px] border-b-[1px] border-divider pb-[19px]">
        Order Summary
      </h1>
      <div className="pt-[19px] flex flex-col gap-[13px] border-b-[1px] border-divider pb-[25px]">
        <div className="flex w-full justify-between text-[18px] font-medium text-gray">
          <h1>Cart Subtotal</h1>
          <h1>{totalPrice - 10}₾</h1>
        </div>

        <div className="flex w-full justify-between text-[18px] font-medium text-gray">
          <h1>Shipping</h1>
          <h1>10₾</h1>
        </div>
      </div>
      <div className="flex flex-col gap-[19px] pb-[13px] border-b-[1px] border-divider">
        <div className="pt-[23px] w-full flex justify-between font-medium text-[18px]">
          <h1>Order total</h1>
          <h1>{totalPrice} GEL</h1>
        </div>
        <div className={`flex justify-between w-full items-center cursor-pointer select-none  `} onClick={()=>setIsOpen(prev=>!prev)}>
          <h1 className="font-normal text-[16px]">
            {data.reduce((sum, product) => sum + product.quantity, 0)} Items in
            Cart
          </h1>
          <div className={`flex items-center transition-all duration-200 cursor-pointer ${!isOpen && 'rotate-180'}`}>
            <Dropdown_Down/>
          </div>
        </div>
      </div>

      {
        isOpen &&
        <div className="pt-[39px] flex flex-col gap-[14px] h-[400px] overflow-y-auto overflox-x-auto select-none">
          {data.map((row) => (
            <div className="flex justify-between" key={row._id}>
              <div className="flex gap-[16px] basis-2/3">
                <Image
                  src={row.product.images[0]}
                  width={100}
                  height={100}
                  alt="CartImage"
                  className="xl:w-[83px] xl:h-[100px] w-[70px] h-[90px] object-cover"
                />
                <div>
                  <h4 className="xl:text-[18px] text-[16px] font-medium">
                    {row.product.title}
                  </h4>
                  <p className="text-secondaryBlack pt-[10px]">
                    <span className=" text-gray">Qty:</span> {row.quantity}
                  </p>
                  <Link
                    href={`/product/${row.product._id}`}
                    className=" text-secondaryBlack uppercase text-[14px] flex items-center gap-[10px] cursor-pointer"
                  >
                    VIEW DETAILS <Dropdown_Down />
                  </Link>
                </div>
              </div>
              <div className="basis-1/3 text-end">
                <p className="text-secondaryBlack">
                  {row.product.discount
                    ? Math.floor(
                        row.quantity *
                          (row.product.price -
                            (row.product.price * row.product.discount) / 100)
                      )
                    : row.product.price}
                  GEL
                </p>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
};
