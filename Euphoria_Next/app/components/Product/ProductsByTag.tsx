"use client";

import React from "react";
import { ProductComponent } from "./ProductComponent";
import { GrayButton } from "../buttons/GrayButton";
import { productInterface } from "@/app/types";

interface Props {
  title?: string;
  data: productInterface[];
}

export const ProductsByTag = ({ title, data }: Props) => {
  return (
    <section className="flex flex-col gap-[34px] pt-[30px]">
      {title && <h1 className="text-[24px] leading-[68px]">{title}</h1>}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
        {data.map((product) => (
          <div className="h-[140vw] xs:h-[70vw] md:h-[50vw] lg:h-[35vw] 2xl:h-[25vw]"  key={product._id}>
            <ProductComponent {...product} />
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center">
        <GrayButton label="Shop more" onClick={() => {}} />
      </div>
    </section>
  );
};
