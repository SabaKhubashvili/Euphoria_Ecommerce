"use client";
import React, { useState } from "react";
import Counter from "../buttons/Counter";
import { MainButton } from "../buttons/MainButton";
import { SecondaryButton } from "../buttons/SecondaryButton";
import { CheckedIcon, GrayHeartIcon } from "@/public/Svg/Icons";
import { productInterface } from "@/app/constants";

interface Props {
  _id: number;
  title: string;
  price: number;
  avaiableSizes: string;
  category: {
    name: string;
    _id: string;
  };
}

export const SingleProductInformation = ({
  title,
  price,
  avaiableSizes,
  category,
}: Props) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [clothingVariant, setClothingVariant] = useState({
    color: "",
    size: "",
  });

  return (
    <React.Fragment>
      <h4 className=" text-gray text-[14px] leading-[48px]">
        Home / Womens Dress / Angels malu
      </h4>
      <div className=" bg-lightBlue font-bold px-2 py-1 inline uppercase ">
        {/* Brand */}
        {category.name}
      </div>
      <h1
        className="max-w-[493px] 2xl:text-[48px] xl:text-[40px] text-[30px] font-medium 
                2xl:leading-[56px] xl:leading-[50px] md:leading-[35px] lg:mt-0 mt-[10px]"
      >
        {/* Title */}
        {title}
      </h1>
      {/* <div className="mt-[28px]">
        <p className="text-[14px] uppercase ">Select Color</p>
        <div className="flex gap-[5px] mt-[10px]">
          <div
             onClick={()=>setClothingVariant(prev=>({...prev,color:'red'}))}
            className={`p-[2px]  cursor-pointer ${
              clothingVariant.color === 'red' && "border-[1px] border-black"
            }`}
          >
            <div className={`w-[15px] h-[15px] bg-red-400`} />
          </div>
          <div
             onClick={()=>setClothingVariant(prev=>({...prev,color:'green'}))}
            className={`p-[2px]  cursor-pointer ${
              clothingVariant.color === 'green' && "border-[1px] border-black"
            }`}
          >
            <div className={`w-[15px] h-[15px] bg-green-400`} />
          </div>
          <div
            onClick={()=>setClothingVariant(prev=>({...prev,color:'blue'}))}
            className={`p-[2px]  cursor-pointer ${
              clothingVariant.color === 'blue' && "border-[1px] border-black"
            }`}
          >
            <div className={`w-[15px] h-[15px] bg-blue-400`} />
          </div>
        </div>
      </div> */}
      <div className="mt-[28px]">
        <p className="text-[14px] uppercase ">Select size</p>
        <div className="flex gap-[5px] mt-[10px] flex-wrap">
          {Object.keys(JSON.parse(avaiableSizes)).map((size) => (
            <div
              key={size}
              onClick={() =>
                setClothingVariant((prev) => ({ ...prev, size: size }))
              }
              className={`cursor-pointer uppercase text-gray text-center border-[1px] border-solid border-divider py-[10px] px-[10px] ${
                clothingVariant.size === size ? "!text-black !border-black" : ""
              }`}
            >
              {size}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-[24px] mt-[36px] xs:flex-nowrap flex-wrap">
        <div className="flex flex-col gap-[10px]">
          <h3 className="uppercase text-[14px] font-medium">Quantity</h3>
          <Counter
            value={quantity}
            setValue={(value) => setQuantity(value)}
            max={10}
          />
        </div>
        <div>
          <h3 className="uppercase text-[14px] font-medium select-none">
            Price total
          </h3>
          <h2 className="text-[26px] font-bold uppercase select-none">
            {quantity * price} GEL
          </h2>
        </div>
      </div>
      <div className="mt-[38px] flex gap-[15px] xs:flex-nowrap flex-wrap">
        <div className="w-full max-w-[221px] h-[50px]">
          <MainButton label="Add to bag" onClick={() => {}} small full />
        </div>
        <div className="w-full max-w-[221px] h-[50px]">
          <SecondaryButton
            label="Save"
            onClick={() => {}}
            small
            full
            leftSvg={<GrayHeartIcon />}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-[15px] mt-[15px] w-full">
        <div className="flex gap-[10gpx] uppercase text-[12px] items-center">
          <CheckedIcon />
          <p className="text-gray">Free Shipping</p>
        </div>
        <div className="flex gap-[4px] uppercase text-[12px]">
          <p className="text-gray font-bold">Product code:</p>
          <p className="text-gray"> RFKK1024</p>
        </div>
        <div className="flex gap-[4px] uppercase text-[12px]">
          <p className="text-gray font-bold ">Tags</p>
          <p className="text-gray"> NEW arrivals, Top women</p>
        </div>
      </div>
    </React.Fragment>
  );
};

const Details = () => {
  return (
    <div className=" border-t-[1px] border-t-divider pt-[32px] flex flex-wrap  flex-col mt-[25px]">
      <div className="flex lg:flex-row flex-col lg:justify-between lg:gap-[52px] gap-[15px]">
        <div className="flex flex-col gap-[15px]">
          <div className="flex flex-col gap-[10px]">
            <h2 className="uppercase font-medium">ABOUT PRODUCT</h2>
            <p>
              Cool off this summer in the Mini Ruffle Smocked Tank Top from our
              very own LA Hearts. This tank features a smocked body, adjustable
              straps, scoop neckline, ruffled hems, and a cropped fit.
            </p>
          </div>
          <ul className="list-disc list-inside ">
            <h2 className="uppercase font-medium mb-[10px]">ABOUT PRODUCT</h2>
            <li className=" font-light">Smocked Body</li>
            <li className=" font-light">Adjustabe straps</li>
            <li className=" font-light">Scoop necklice</li>
            <li className=" font-light">Rufled hems</li>
            <li className=" font-light">Croped length</li>
            <li className=" font-light">Model wearing a small</li>
            <li className=" font-light">100% ryaon</li>
            <li className=" font-light">Machine washable</li>
          </ul>
          <ul className="list-disc list-inside ">
            <h2 className="uppercase font-medium mb-[10px]">Advantages</h2>
            <li className=" font-light">Model wearing a small</li>
            <li className=" font-light">100% ryaon</li>
            <li className=" font-light">Machine washable</li>
          </ul>
        </div>
        <div className="flex flex-col gap-[10px] lg:max-w-[50%]">
          <h2 className="uppercase font-medium">Shipping</h2>
          <p>
            We offer Free Standard Shipping for all orders over $75 to the 50
            states and the District of Columbia. The minimum order value must be
            $75 before taxes, shipping and handling. Shipping fees are
            non-refundable. Please allow up to 2 business days (excluding
            weekends, holidays, and sale days) to process your order. Processing
            Time + Shipping Time = Delivery Time
          </p>
        </div>
      </div>
    </div>
  );
};

const OtherInformation = ({description}:{description:string}) => {
  return (
    <div className="font-light border-t-[1px] border-t-divider mt-[25px] pt-[32px]">
      {description}
    </div>
  );
};

export const SingleProductDetails = ({description}:{description:string}) => {
  const [openCategories, setOpenCategories] = useState({
    Details: true,
    OtherInformation: false,
  });

  return (
    <div className="flex flex-col gap-[10px] mt-[41px]">
      <div
        className="bg-[#F8F9FB] px-[27px] py-[25px] cursor-pointer"
        onClick={() =>
          setOpenCategories((prev) => ({
            ...prev,
            Details: !prev.Details,
          }))
        }
      >
        <div className="flex items-center justify-between">
          <h1 className="2xl:text-[24px] xl:text-[22px] lg:text-[20px] select-none">
            Details
          </h1>
          <div
            className="cursor-pointer transition-all duration-300"
            onClick={() =>
              setOpenCategories((prev) => ({ ...prev, Details: !prev.Details }))
            }
          >
            <div className="w-[20px] h-[3px] bg-divider" />
            <div
              className={`w-[20px] h-[3px] bg-divider transition-all duration-300 ${
                openCategories.Details
                  ? "rotate-0 mt-0 !bg-[#F8F9FB] "
                  : "rotate-90 -mt-[3px]"
              }`}
            />
          </div>
        </div>
        {openCategories.Details && <Details />}
      </div>
      <div className="bg-[#F8F9FB] px-[27px] py-[25px]">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() =>
            setOpenCategories((prev) => ({
              ...prev,
              OtherInformation: !prev.OtherInformation,
            }))
          }
        >
          <h1 className="2xl:text-[24px] xl:text-[22px] lg:text-[20px] select-none">
            Other Information
          </h1>
          <div className="cursor-pointer transition-all duration-300">
            <div className="w-[20px] h-[3px] bg-divider" />
            <div
              className={`w-[20px] h-[3px] bg-divider transition-all duration-300 ${
                openCategories.OtherInformation
                  ? "rotate-0 mt-0 !bg-[#F8F9FB] "
                  : "rotate-90 -mt-[3px]"
              }`}
            />
          </div>
        </div>
        {openCategories.OtherInformation && <OtherInformation description={description} />}
      </div>
    </div>
  );
};
