"use client";
import React, { useState } from "react";
import Counter from "../buttons/Counter";
import { MainButton } from "../buttons/MainButton";
import { SecondaryButton } from "../buttons/SecondaryButton";
import { CheckedIcon, GrayHeartIcon } from "@/public/Svg/Icons";
import { productInterface } from "@/app/constants";
import RestClient from "@/app/RestClient/RequestTypes";
import BaseUrl from "@/app/RestClient/ApiUrls";
import { getCookies } from "cookies-next";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { SecondaryInput } from "../Inputs/SecondaryInput";
import { AuthInput } from "../Inputs/AuthInput";
import { Textarea } from "../Inputs/Textarea";
import { AddProductInput } from "../Inputs/AddProductInput";
import { MainDropdown } from "../Dropdown/MainDropdown";
import { CategoryInterface } from "@/app/types";

interface Props {
  _id: number;
  title: string;
  price: number;
  avaiableSizes: string;
  avaiableSizesOnChange?: (size: any) => void;
  category: {
    name: string;
    _id: string;
  };
  description: string;
  isEditable?: boolean;
  onChange?: (e: React.ChangeEvent) => void;
  brand: string;
  categoryOnChange:(val:{
    id:string,
    name:string
  })=>void,
  categories?:CategoryInterface[]
}

export const SingleProductInformation = ({
  _id,
  title,
  price,
  avaiableSizes,
  avaiableSizesOnChange,
  category,
  description,
  isEditable,
  onChange,
  brand,
  categoryOnChange,
  categories
}: Props) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [clothingVariant, setClothingVariant] = useState({
    size: "",
  });
  const router = useRouter();
  const cookies = getCookies();
  const addToCart = async () => {
    await RestClient.putRequest(
      BaseUrl.addToCart,
      {
        productId: _id,
        quantity: quantity,
        size: clothingVariant.size || Object.keys(JSON.parse(avaiableSizes))[0],
      },
      cookies.accessToken
    )
      .then((res) => {
        toast.success("Sucesfully placed in cart", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        router.push("/cart");
      })
      .catch((err) => {
        router.push("/login");
      });
  };



  return (
    <React.Fragment>
      <div className=" text-gray text-[14px] leading-[48px] flex items-center">
        Home /
        {isEditable ? (
          <MainDropdown
            type="secondary"
            label={category.name} 
            content={
             categories ?  categories?.map(category=>(
                {
                  label:category.name,
                  onClick:()=> categoryOnChange({id:category._id,name:category.name})
                }
              ))
              :
              null
            }
            bodyFontSize="15px"
            paddings="0px 4px"
            fontSize="10px"
            gap="11px"
            bodyHeight="fit-content"
            maxHeight="200px"
            bodyWidth="200px"
            top='28px'
          />
        ) : (
          category.name
        )}
        / {title}
      </div>
      {/* Brand */}
      {isEditable ? (
        <AddProductInput
          id={"brand"}
          name="brand"
          onChange={onChange ? onChange : (e: React.ChangeEvent) => {}}
          value={brand}
          placeholder="Brand"
          variant="secondary"
        />
      ) : (
        <div className=" bg-lightBlue font-bold px-2 py-1 inline uppercase ">
          {category.name}
        </div>
      )}
      {isEditable ? (
        <div className="mt-[10px]">
          <AddProductInput
            id={"title"}
            name="title"
            onChange={onChange ? onChange : (e: React.ChangeEvent) => {}}
            value={title}
            placeholder="Title"
            fontSize="48px"
          />
        </div>
      ) : (
        <h1
          className="max-w-[493px] 2xl:text-[48px] xl:text-[40px] text-[30px] font-medium 
        2xl:leading-[56px] xl:leading-[50px] md:leading-[35px] lg:mt-0 mt-[10px]"
        >
          {/* Title */}
          {title}
        </h1>
      )}
      <div className="mt-[28px]">
        <p className="text-[14px] uppercase ">
          {isEditable ? "Select avaiable sizes" : "Select size"}
        </p>
        <div className="flex gap-[5px] mt-[10px] flex-wrap">
          {Object.keys(JSON.parse(avaiableSizes)).map((size) => (
            <div
              key={size}
              onClick={() =>
                avaiableSizesOnChange
                  ? avaiableSizesOnChange(size)
                  : setClothingVariant((prev) => ({ ...prev, size: size }))
              }
              className={`cursor-pointer uppercase text-gray text-center border-[1px] border-solid border-divider py-[10px] px-[10px] ${
                isEditable
                  ? JSON.parse(avaiableSizes)[size]
                    ? "!text-black !border-black"
                    : ""
                  : clothingVariant.size === size
                  ? "!text-black !border-black"
                  : ""
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
        <div className={isEditable ? "flex flex-col justify-between" : ""}>
          <h3 className="uppercase text-[14px] font-medium select-none">
            Price total
          </h3>
          {isEditable ? (
            <AddProductInput
              id={"price"}
              name="price"
              onChange={onChange ? onChange : undefined}
              value={price.toString()}
              placeholder="Price"
              fontSize="26px"
              type={"number"}
            />
          ) : (
            <h2 className="text-[26px] font-bold uppercase select-none">
              {quantity * price} GEL
            </h2>
          )}
        </div>
      </div>
      <div className="mt-[38px] flex gap-[15px] xs:flex-nowrap flex-wrap">
        <div className="w-full max-w-[221px] h-[50px]">
          <MainButton label="Add to bag" onClick={addToCart} small full />
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
        <div className="flex gap-[10px] uppercase text-[12px] items-center">
          <CheckedIcon />
          <p className="text-gray">Free Shipping</p>
        </div>
        <div className="flex gap-[4px] uppercase text-[12px]">
          <p className="text-gray font-bold ">Tags</p>
          <p className="text-gray"> NEW arrivals, Top women</p>
        </div>
      </div>
      <div className="lg:pt-[20px] pt-[40px] lg:pb-[0] pb-[20px] !text-[15px]">
        {isEditable ? (
          <div className="max-w-[550px] h-[300px]">
            <Textarea
              id={"description"}
              name="description"
              onChange={onChange ? onChange : undefined}
              value={description}
              placeholder="Description"
              paddings="5px 10px"
              type={"borderless"}
            />
          </div>
        ) : (
          <p className="text-gray">{description}</p>
        )}
      </div>
    </React.Fragment>
  );
};

const Details = ({
  aboutProduct,
  advantages,
}: {
  aboutProduct: string;
  advantages: string;
}) => {
  return (
    <div className=" border-t-[1px] border-t-divider pt-[32px] flex flex-wrap  flex-col mt-[25px]">
      <div className="flex lg:flex-row flex-col lg:justify-between lg:gap-[52px] gap-[15px]">
        <div className="flex flex-col gap-[15px]">
          <div className="flex flex-col gap-[10px]">
            <h2 className="uppercase font-medium">ABOUT PRODUCT</h2>
            <p>{aboutProduct}</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h2 className="uppercase font-medium">Advantages</h2>
            <ul className="flex flex-col gap-[5px]">
              {advantages.split("\n").map((advantage) => (
                <li className="font-light" key={advantage}>
                  {"\n" + advantage}
                </li>
              ))}
            </ul>
          </div>
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

const OtherInformation = ({ description }: { description: string }) => {
  return (
    <div className="font-light border-t-[1px] border-t-divider mt-[25px] pt-[32px]">
      {description}
    </div>
  );
};

export const SingleProductDetails = ({
  aboutProduct,
  advantages,
}: {
  aboutProduct: string;
  advantages: string;
}) => {
  const [openCategories, setOpenCategories] = useState({
    Details: true,
    OtherInformation: false,
  });

  return (
    <div className="flex flex-col gap-[10px] mt-[81px]">
      <div className="bg-[#F8F9FB] px-[27px] py-[25px] ">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() =>
            setOpenCategories((prev) => ({
              ...prev,
              Details: !prev.Details,
            }))
          }
        >
          <h1 className="2xl:text-[24px] xl:text-[22px] lg:text-[20px] select-none">
            Details
          </h1>
          <div className="transition-all duration-300">
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
        {openCategories.Details && (
          <Details advantages={advantages} aboutProduct={aboutProduct} />
        )}
      </div>
      {/* <div className="bg-[#F8F9FB] px-[27px] py-[25px]">
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
        {openCategories.OtherInformation && <OtherInformation description={otherInformation} />}
      </div> */}
    </div>
  );
};
