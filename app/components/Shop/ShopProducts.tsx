"use client";

import React from "react";
import { Filter } from "./Filter";
import { Shop } from "./Shop";
import { Roboto } from "../assets/Fonts";
import useMediaQuery from "@/app/hooks/UseMediaQuery";
import { largeScreens } from "@/app/Screens/Screens";
import { products } from "@/app/constants";
import { usePagination } from "@/app/hooks/UsePagination";
import { Pagination } from "../Pagination";

export const ShopProducts = () => {
  const IsAboveLargeScreens = useMediaQuery(largeScreens);
  const { currentPage } = usePagination();
  console.log(products.slice(
    (currentPage - 1) * 16,
    currentPage * 16
  ));
  console.log(currentPage);
  
  
  return (
    <section className="w-full pb-[30px]">
      <p
        className={` ${Roboto.className} text-gray text-[14px] pt-[18px] leading-[68px] `}
      >
        Home/Shop
      </p>
      <div className="flex items-start  mt-[18px]">
        {IsAboveLargeScreens && (
          <>
            <Filter />
          </>
        )}
        <div className="flex flex-col items-center gap-[30px]">
          <Shop
            productsLength={products.length}
            currentProducts={products.slice(
              (currentPage - 1) * 16,
              currentPage * 16
            )}
          />
          <Pagination productsLength={products.length} />
        </div>
      </div>
    </section>
  );
};
