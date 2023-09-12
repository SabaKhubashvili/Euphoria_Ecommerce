'use client'
import { Dropdown_Down } from '@/public/Svg/Icons'
import Image from 'next/image'
import React from 'react'
import { Roboto } from '../assets/Fonts'

export const SmallCartInfo = () => {
  return (
    <div className="py-[40px]  px-[30px] border-divider border-[2px] bg-lightBlue h-fit lg:basis-2/5">
    <h1 className="text-[24px]">Shipping Address</h1>
    <div className="pt-[22px]">
      <h4
        className={`text-[16px] text-secondaryBlack pb-[13px] border-b-divider border-b-[1px] ${Roboto.className}`}
      >
        1 Item in Cart
      </h4>
      <div className="pt-[19px] flex flex-col gap-[14px] h-[400px] overflow-y-auto overflox-x-auto">
        <div className="flex justify-between min-w-[500px]">
          <div className="flex gap-[16px] basis-2/3">
            <Image
              src={"/Images/Product/Product.webp"}
              width={100}
              height={100}
              alt="CartImage"
              className="xl:w-[83px] xl:h-[100px] w-[70px] h-[90px]"
            />
            <div>
              <h4 className="xl:text-[18px] text-[16px] font-medium">
                Angels malu zip jeans slim black used
              </h4>
              <p className="text-secondaryBlack pt-[10px]">
                <span className=" text-gray">Qty:</span> 1
              </p>
              <p className=" text-secondaryBlack uppercase text-[14px] flex items-center gap-[10px] cursor-pointer">
                VIEW DETAILS <Dropdown_Down />
              </p>
            </div>
          </div>
          <div className="basis-1/3 text-end">
            <p className="text-secondaryBlack">129.00 EUR</p>
          </div>
        </div>
        <div className="flex justify-between min-w-[500px]">
          <div className="flex gap-[16px] basis-2/3">
            <Image
              src={"/Images/Product/Product.webp"}
              width={100}
              height={100}
              alt="CartImage"
              className="xl:w-[83px] xl:h-[100px] w-[70px] h-[90px]"
            />
            <div>
              <h4 className="xl:text-[18px] text-[16px] font-medium">
                Angels malu zip jeans slim black used
              </h4>
              <p className="text-secondaryBlack pt-[10px]">
                <span className=" text-gray">Qty:</span> 1
              </p>
              <p className=" text-secondaryBlack uppercase text-[14px] flex items-center gap-[10px] cursor-pointer">
                VIEW DETAILS <Dropdown_Down />
              </p>
            </div>
          </div>
          <div className="basis-1/3 text-end">
            <p className="text-secondaryBlack">129.00 EUR</p>
          </div>
        </div>
        <div className="flex justify-between min-w-[500px]">
          <div className="flex gap-[16px] basis-2/3">
            <Image
              src={"/Images/Product/Product.webp"}
              width={100}
              height={100}
              alt="CartImage"
              className="xl:w-[83px] xl:h-[100px] w-[70px] h-[90px]"
            />
            <div>
              <h4 className="xl:text-[18px] text-[16px] font-medium">
                Angels malu zip jeans slim black used
              </h4>
              <p className="text-secondaryBlack pt-[10px]">
                <span className=" text-gray">Qty:</span> 1
              </p>
              <p className=" text-secondaryBlack uppercase text-[14px] flex items-center gap-[10px] cursor-pointer">
                VIEW DETAILS <Dropdown_Down />
              </p>
            </div>
          </div>
          <div className="basis-1/3 text-end">
            <p className="text-secondaryBlack">129.00 EUR</p>
          </div>
        </div>
        <div className="flex justify-between min-w-[500px]">
          <div className="flex gap-[16px] basis-2/3">
            <Image
              src={"/Images/Product/Product.webp"}
              width={100}
              height={100}
              alt="CartImage"
              className="xl:w-[83px] xl:h-[100px] w-[70px] h-[90px]"
            />
            <div>
              <h4 className="xl:text-[18px] text-[16px] font-medium">
                Angels malu zip jeans slim black used
              </h4>
              <p className="text-secondaryBlack pt-[10px]">
                <span className=" text-gray">Qty:</span> 1
              </p>
              <p className=" text-secondaryBlack uppercase text-[14px] flex items-center gap-[10px] cursor-pointer">
                VIEW DETAILS <Dropdown_Down />
              </p>
            </div>
          </div>
          <div className="basis-1/3 text-end">
            <p className="text-secondaryBlack">129.00 EUR</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
