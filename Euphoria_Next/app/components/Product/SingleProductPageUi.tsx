"use client";
import React, { useState } from "react";
import Counter from "../buttons/Counter";
import { MainButton } from "../buttons/MainButton";
import { SecondaryButton } from "../buttons/SecondaryButton";
import { CheckedIcon, GrayHeartIcon } from "@/public/Svg/Icons";

export const SingleProductInformation = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [clothingVariant,setClothingVariant] = useState({
    color:'',
    size:'',
  })
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
        className="max-w-[493px] 2xl:text-[48px] xl:text-[40px] text-[30px] font-medium 
                2xl:leading-[56px] xl:leading-[50px] md:leading-[35px] lg:mt-0 mt-[10px]"
      >
        {/* Title */}
        Women Black Checked Fit and Flare Dress
      </h1>
      <div className="mt-[28px]">
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
      </div>
      <div className="mt-[28px]">
        <p className="text-[14px] uppercase ">Select size (Inches)</p>
        <div className="flex gap-[5px] mt-[10px] flex-wrap">
          <div
               onClick={()=>setClothingVariant(prev=>({...prev,size:'W21'}))}
            className={`cursor-pointer uppercase text-gray text-center border-[1px] border-solid border-divider 
                     py-[10px] px-[10px] 
                    ${clothingVariant.size === 'W21' && "!text-black !border-black"}
                    `}
          >
            W21
          </div>
          <div
               onClick={()=>setClothingVariant(prev=>({...prev,size:'W22'}))}
            className={`cursor-pointer uppercase text-gray text-center border-[1px] border-solid border-divider 
                     py-[10px] px-[10px] 
                    ${clothingVariant.size === 'W22' && "!text-black !border-black"}
                    `}
          >
            W22
          </div>
          <div
               onClick={()=>setClothingVariant(prev=>({...prev,size:'W23'}))}
            className={`cursor-pointer uppercase text-gray text-center border-[1px] border-solid border-divider 
                     py-[10px] px-[10px] 
                    ${clothingVariant.size === 'W23' && "!text-black !border-black"}
                    `}
          >
            W23
          </div>
          <div
               onClick={()=>setClothingVariant(prev=>({...prev,size:'W24'}))}
            className={`cursor-pointer uppercase text-gray text-center border-[1px] border-solid border-divider 
                     py-[10px] px-[10px] 
                    ${clothingVariant.size === 'W24' && "!text-black !border-black"}
                    `}
          >
            W24
          </div>
          <div
               onClick={()=>setClothingVariant(prev=>({...prev,size:'W25'}))}
            className={`cursor-pointer uppercase text-gray text-center border-[1px] border-solid border-divider 
                     py-[10px] px-[10px] 
                    ${clothingVariant.size === 'W25' && "!text-black !border-black"}
                    `}
          >
            W25
          </div>
          <div
               onClick={()=>setClothingVariant(prev=>({...prev,size:'W26'}))}
            className={`cursor-pointer uppercase text-gray text-center border-[1px] border-solid border-divider 
                     py-[10px] px-[10px] 
                    ${clothingVariant.size === 'W26' && "!text-black !border-black"}
                    `}
          >
            W26
          </div>
          <div
               onClick={()=>setClothingVariant(prev=>({...prev,size:'W27'}))}
            className={`cursor-pointer uppercase text-gray text-center border-[1px] border-solid border-divider 
                     py-[10px] px-[10px] 
                    ${clothingVariant.size === 'W27' && "!text-black !border-black"}
                    `}
          >
            W27
          </div>
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
          <h3 className="uppercase text-[14px] font-medium select-none">Price total</h3>
          <h2 className="text-[26px] font-bold uppercase select-none">
            {quantity * 90} ,00 EUR
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

const OtherInformation = () => {
  return (
    <div className="font-light border-t-[1px] border-t-divider mt-[25px] pt-[32px]">
      Clothing is not just a practical necessity; it&#39;s a means of expressing
      identity, culture, and style. The world of fashion is vast and
      ever-evolving, offering a myriad of choices that cater to individual
      preferences and societal trends. From the timeless elegance of a tailored
      suit to the carefree comfort of a casual t-shirt and jeans, clothing plays
      a pivotal role in how we present ourselves to the world. Historical
      Significance: From Loincloths to Haute Couture Throughout history,
      clothing has served various purposes beyond just covering the body. In
      ancient civilizations, garments were crafted using materials like animal
      hides and plant fibers. Clothing indicated social status, with luxurious
      fabrics and intricate designs reserved for the elite. Over time, clothing
      styles evolved, influenced by cultural exchanges, technological
      advancements, and changing social norms. The 20th century witnessed a
      fashion revolution with the advent of haute couture and ready-to-wear
      collections. Designers like Coco Chanel and Christian Dior revolutionized
      how people approached fashion, blending traditional craftsmanship with
      innovation. Today, fashion conglomerates, independent designers, and
      sustainable fashion movements continue to reshape the industry. Cultural
      Diversity: The Global Tapestry of Fashion Clothing is a powerful cultural
      marker, reflecting the heritage and beliefs of diverse communities around
      the world. Traditional clothing, such as the vibrant saris of India, the
      intricate kimonos of Japan, and the bold patterns of African textiles,
      showcase the beauty of cultural expression. Globalization and
      multiculturalism have led to cross-cultural fashion influences, resulting
      in fusion styles that celebrate diversity.
    </div>
  );
};

export const SingleProductDetails = () => {
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
        {openCategories.OtherInformation && <OtherInformation />}
      </div>
    </div>
  );
};
