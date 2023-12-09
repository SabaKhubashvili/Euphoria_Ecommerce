"use client";

import { CartRowInterface } from "@/app/types";
import Image from "next/image";
import React, { useState } from "react";
import Counter from "../buttons/Counter";
import { Icon } from "../Icon";
import { WebsiteIcons } from "@/public/Svg/IconsObject";
import RestClient from "@/app/RestClient/RequestTypes";
import BaseUrl from "@/app/RestClient/ApiUrls";
import { getCookie } from "cookies-next";
import { toast } from "react-toastify";

interface Props extends CartRowInterface {
  totalPriceOnChange: any;
  filterCart: (id: string) => void;
}

export const CartTableRow = ({
  _id,
  product,
  quantity,
  size,
  totalPriceOnChange,
  filterCart,
}: Props) => {
  const [productQuantity, setProductQuantity] = useState(quantity);
  const [innerQuantity, setInnerQuantity] = useState<number>(quantity);
  const [productPrice,setProductPrice] = useState(
    product.discount ?
    Math.floor((product.price * product.discount) / 100)
    :
    product.price
  )
  const onDelete = async () => {
    RestClient.deleteRequest(
      BaseUrl.deleteCartRow + _id,
      getCookie("accessToken")
    )
      .then((res) => {
        filterCart(_id);
        toast.success("Succesfully deleted", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        totalPriceOnChange((prev: number) => {
          if (product.discount) {
            return (
              prev - productPrice * quantity
            );
          } else {
            return prev - product.price * quantity;
          }
        });
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const changeQuantity = () => {
    RestClient.postRequest(
      BaseUrl.updateQuantity,
      {
        cartRowId: _id,
        updatedQuantity: innerQuantity,
      },
      getCookie("accessToken")
    )
      .then((res) => {
        toast.success(res.data.message, {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setProductQuantity(innerQuantity);
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div className="w-full !py-[24px] flex items-center ">
      <div className="inline-flex w-fit gap-[10px] basis-1/6 ">
        <Image
          src={product.images[0]}
          alt="Product"
          width={90}
          height={110}
          className="object-cover w-[83px] h-[103px] select-none"
        />
        <h2 className="md:text-[18px] text-[15px] font-medium tracking-[0.5px] uppercase">
          {product.title}
        </h2>
      </div>
      <h1 className="uppercase text-black text-[14px]   items-center  text-center xl:min-w-[0px] basis-1/6 ">
        {product.discount ? (
          <span>
            {productPrice} GEL
          </span>
        ) : (
          <span>{product.price} GEL</span>
        )}
      </h1>
      <h1 className="uppercase text-black text-[14px]   items-center  text-center xl:min-w-[0px] basis-1/6 ">
        {size}
      </h1>
      <div className="uppercase text-black text-[14px]  items-center mx-auto flex justify-center xl:min-w-[0px] basis-1/6 relative">
        {productQuantity !== innerQuantity && (
          <div
            className="absolute top-[30px] bg-secondary w-full text-center text-white py-[6px] cursor-pointer"
            onClick={changeQuantity}
          >
            Change
          </div>
        )}
        <Counter
          value={innerQuantity}
          setValue={(value: number) => {
            if (value > innerQuantity) {
              totalPriceOnChange((prev: number) => {
                if (product.discount) {
                  return (
                    prev + productPrice
                  );
                } else {
                  return prev + product.price;
                }
              });
            } else {
              totalPriceOnChange((prev: number) => {
                if (product.discount) {
                  return (
                    prev - productPrice
                  );
                } else {
                  return prev - product.price;
                }
              });
            }
            setInnerQuantity(value);
          }}
          max={20}
        />
      </div>
      <h1 className="uppercase text-black text-[14px] items-center select-none  text-center xl:min-w-[0px] basis-1/6 ">
        {product.discount
          ? productPrice * innerQuantity
          : product.price * innerQuantity}{" "}
        GEL
      </h1>
      <h1 className="cursor-pointer basis-1/6 " onClick={onDelete}>
        <Icon svg={WebsiteIcons["GrayBgClose"]} />
      </h1>
    </div>
  );
};
