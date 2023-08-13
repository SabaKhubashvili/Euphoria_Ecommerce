"use client";
import React, { useState } from "react";
import Counter from "../buttons/Counter";

const SingleProductInformation = () => {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <React.Fragment>
      <h4 className=" text-gray text-[14px] leading-[48px]">
        Home / Womens Dress / Angels malu
      </h4>
      <div className=" bg-lightBlue font-bold px-2 py-1 inline ">
        {/* Brand */}
        FENDI
      </div>
      <h1
        className="max-w-[493px] 2xl:text-[48px] xl:text-[40px] md:text-[30px] font-medium 
                2xl:leading-[56px] xl:leading-[50px] md:leading-[35px]"
      >
        {/* Title */}
        Women Black Checked Fit and Flare Dress
      </h1>
      <div className="mt-[28px]">
        <p className="text-[14px] uppercase ">Select Color</p>
        <div className="flex gap-[5px] mt-[10px]">
          <div
            className={`p-[2px]  cursor-pointer ${
              false && "border-[1px] border-black"
            }`}
          >
            <div className={`w-[15px] h-[15px] bg-red-400`} />
          </div>
          <div
            className={`p-[2px]  cursor-pointer ${
              false && "border-[1px] border-black"
            }`}
          >
            <div className={`w-[15px] h-[15px] bg-green-400`} />
          </div>
          <div
            className={`p-[2px]  cursor-pointer ${
              true && "border-[1px] border-black"
            }`}
          >
            <div className={`w-[15px] h-[15px] bg-blue-400`} />
          </div>
        </div>
      </div>
      <div className="mt-[28px]">
        <p className="text-[14px] uppercase ">Select size (Inches)</p>
        <div className="flex gap-[5px] mt-[10px] flex-wrap">
          <div
            className={`cursor-pointer uppercase text-gray text-center border-[1px] border-solid border-divider 
                     py-[10px] px-[10px] 
                    ${false && "!text-black !border-black"}
                    `}
          >
            w27
          </div>
          <div
            className={`cursor-pointer uppercase text-gray text-center border-[1px] border-solid border-divider 
                     py-[10px] px-[10px] 
                    ${false && "!text-black !border-black"}
                    `}
          >
            w27
          </div>
          <div
            className={`cursor-pointer uppercase text-gray text-center border-[1px] border-solid border-divider 
                     py-[10px] px-[10px] 
                    ${false && "!text-black !border-black"}
                    `}
          >
            w27
          </div>
          <div
            className={`cursor-pointer uppercase text-gray text-center border-[1px] border-solid border-divider 
                     py-[10px] px-[10px] 
                    ${false && "!text-black !border-black"}
                    `}
          >
            w27
          </div>
          <div
            className={`cursor-pointer uppercase text-gray text-center border-[1px] border-solid border-divider 
                     py-[10px] px-[10px] 
                    ${true && "!text-black !border-black"}
                    `}
          >
            w27
          </div>
          <div
            className={`cursor-pointer uppercase text-gray text-center border-[1px] border-solid border-divider 
                     py-[10px] px-[10px] 
                    ${false && "!text-black !border-black"}
                    `}
          >
            w27
          </div>
          <div
            className={`cursor-pointer uppercase text-gray text-center border-[1px] border-solid border-divider 
                     py-[10px] px-[10px] 
                    ${false && "!text-black !border-black"}
                    `}
          >
            w27
          </div>
        </div>
      </div>
      <div className="flex gap-[24px] mt-[36px]">
        <div className="flex flex-col gap-[10px]">
          <h3 className="uppercase text-[14px] font-medium">Quantity</h3>
          <Counter value={quantity} setValue={(value) => setQuantity(value)} max={10} />
        </div>
        <div>
          <h3 className="uppercase text-[14px] font-medium">Price total</h3>
          <h2 className="text-[26px] font-bold uppercase">{quantity * 90} ,00 EUR</h2>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleProductInformation;
