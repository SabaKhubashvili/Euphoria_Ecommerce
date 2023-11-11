"use client";

import { CartRowInterface } from "@/app/types";
import Image from "next/image";
import React, { useState } from "react";
import Counter from "../buttons/Counter";
import { Icon } from "../Icon";
import { WebsiteIcons } from "@/public/Svg/IconsObject";

interface Props extends CartRowInterface {
  totalPriceOnChange: any;
}

export const CartTableRow = ({
  product,
  quantity,
  size,
  totalPriceOnChange,
}: Props) => {
  const [innerQuantity, setInnerQuantity] = useState<number>(quantity);
  const [totalPrice, setTotalPrice] = useState(innerQuantity * product.price);

  return (
    <tr className="w-full !py-[24px]" key={product._id}>
      <td className="inline-flex w-fit mr-[20px] gap-[10px] ">
        <Image
          src={product.images[0]}
          alt="Product"
          width={90}
          height={110}
          className="object-cover w-[83px] h-[103px] select-none"
        />
        <div className=" -col gap-[13px] xl:min-w-[0px] min-w-[200px] ">
          {" "}
          {/* Adjusted gap value */}
          <h2 className="md:text-[18px] text-[15px] font-medium tracking-[0.5px] uppercase">
            {product.title}
          </h2>
          {/* <div className="p-[2px] border-[1px] border-divider w-[20px] h-[20px]">
          <div className="h-full w-full bg-blue-400 m-auto p-auto" />
        </div> */}
        </div>
      </td>
      <td className="uppercase text-black text-[14px]   items-center ml-[15px]  text-center xl:min-w-[0px] min-w-[200px] ">
        {product.price} GEL
      </td>
      <td className="uppercase text-black text-[14px]   items-center  text-center xl:min-w-[0px] min-w-[200px] ">
        {size}
      </td>
      <td className="uppercase text-black text-[14px]  items-center ml-[15px] mx-auto flex justify-center xl:min-w-[0px] min-w-[200px] ">
        <Counter
          value={innerQuantity}
          setValue={(value: number) => {
            if (value > innerQuantity) {
              totalPriceOnChange((prev: number) => prev + product.price);
            } else {
              totalPriceOnChange((prev: number) => prev - product.price);
            }
            setInnerQuantity(value);
          }}
          max={20}
        />
      </td>
      <td className="uppercase text-black text-[14px] items-center select-none  text-center xl:min-w-[0px] min-w-[200px] ">
        {product.price * innerQuantity} GEL
      </td>
      <td className="cursor-pointer">
        <Icon svg={WebsiteIcons["redDelete"]} />
      </td>
    </tr>
  );
};
