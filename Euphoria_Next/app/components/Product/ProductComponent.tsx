"use client";

import Image from "next/image";
import React, { useState } from "react";
import { MainButton } from "../buttons/MainButton";
import { GrayButton } from "../buttons/GrayButton";
import { productInterface } from "@/app/constants";
import Link from "next/link";
import useMediaQuery from "@/app/hooks/UseMediaQuery";
import { largeScreens } from "@/app/Screens/Screens";
import RestClient from "@/app/RestClient/RequestTypes";
import BaseUrl from "@/app/RestClient/ApiUrls";
import { getCookie, setCookie } from "cookies-next";
import { redirect, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";

interface Props extends productInterface {
  usingCol?: boolean;
  res?: boolean;
}

export const ProductComponent = ({
  _id,
  title,
  images,
  aboutProduct,
  price,
  usingCol,
  res = true,
}: Props) => {

  const router = useRouter();
  const isAboveLargeScreens = useMediaQuery(largeScreens);

  let token = getCookie("accessToken");
const favorites = localStorage.getItem('favorites');
const parsedFavorites = JSON.parse(favorites || "") || []; 

const [isFavorited, setIsFavorited] = useState(
  parsedFavorites.some((favorite:any) => favorite === _id.toString())
);
  const addToCart = () => {
    RestClient.putRequest(
      BaseUrl.addToCart,
      {
        productId: _id,
        quantity: 1,
      },
      token
    )
      .then((res) => {
        router.push("/cart");
      })
      .catch((err) => {
        if ((err.status = 403)) {
          toast.error(err?.response?.data?.message, {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };

  const addToFavorites = () => {
    RestClient.putRequest(BaseUrl.addToFavorites + `/${_id}`, {}, token)
      .then((res) => {
        if (parsedFavorites) {
          if (res.data.add) {
            parsedFavorites.push(_id.toString());
            setIsFavorited(true)
          } else {
            const indexToRemove = parsedFavorites.indexOf(_id.toString());
            if (indexToRemove !== -1) {
              parsedFavorites.splice(indexToRemove, 1);
            }
            setIsFavorited(false)
          }
        }
        localStorage.setItem('favorites',JSON.stringify(parsedFavorites))
      })
      .catch((err) => {
        if ((err.status = 403)) {
          toast.error(err?.response?.data?.message, {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };
  

  return (
    <div
      className={`flex flex-col gap-[14px]  ${
        usingCol ? "col-span-1" : "w-full h-full"
      }`}
    >
      <div className="relative w-full ">
        <Link href={`/product/${_id}`} className="peer">
          <Image
            width={300}
            height={400}
            alt="Product"
            src={`${images[0]}`}
            className="w-full h-full select-none"
          />
        </Link>
        {isAboveLargeScreens && (
          <div
            className="absolute bottom-[-4px] w-full  transition-all duration-200 bg-white left-0 right-0 
          lg:hover:opacity-100 peer-hover:opacity-100  opacity-0 py-[20px]  flex px-[10px] gap-[5px] select-none
          mx-auto h-auto
          "
          >
            <MainButton
              full
              small
              label="Add to cart"
              styles={{ fontSize: "12px", height: "40px" }}
              onClick={addToCart}
            />
            <GrayButton
              full
              small
              label={isFavorited ? 'Unsave' : 'Save'}
              styles={{ fontSize: "12px", height: "40px" }}
              onClick={addToFavorites}
            />
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between w-full">
        <div>
          <p
            className={`uppercase text-gray font-semibold ${
              res
                ? "xl:text-[12px] md:text-[10px] sm:text-[9px] text-[7px]"
                : "sm:text-[12px] text-[9px]"
            }`}
          >
            {title}
          </p>
          <h1
            className={`${
              res
                ? "xl:text-[18px] md:text-[16px] sm:text-[14px] text-[12px]"
                : "sm:text-[18px] text-[14px]"
            } font-light`}
          >
            {aboutProduct.slice(0, 70)}...
          </h1>
        </div>
        <h3
          className={`uppercase ${
            res
              ? "2xl:text-[22px] xl:text-[20px] md:text-[18px] sm:text-[14px] text-[12px]"
              : "sm:text-[22px] text-[18px]"
          } font-medium`}
        >
          {price} GEL
        </h3>
      </div>
    </div>
  );
};
