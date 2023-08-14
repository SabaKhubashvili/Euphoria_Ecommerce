"use client";

import React, { useMemo } from "react";
import { Filter } from "./Filter";
import { Shop } from "./Shop";
import { Roboto } from "../assets/Fonts";
import useMediaQuery from "@/app/hooks/UseMediaQuery";
import { largeScreens } from "@/app/Screens/Screens";
import { productInterface, products } from "@/app/constants";
import { usePagination } from "@/app/hooks/UsePagination";
import { Pagination } from "../Pagination";
import { useFilter } from "@/app/hooks/UseFilter";

export const ShopProducts = () => {
  const IsAboveLargeScreens = useMediaQuery(largeScreens);
  const { currentPage,manualPage,productPerPage } = usePagination();
  const { priceFrom } = useFilter();

  const currentProducts: productInterface[] = useMemo(() => {
    let currentProducts = products; 
    if (priceFrom) {
      if (priceFrom === "high") {
        currentProducts = products
          .sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
          .slice((currentPage - 1) * productPerPage, currentPage * productPerPage)
      } else if (priceFrom === "low") {
        currentProducts = products
          .sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
          .slice((currentPage - 1) * productPerPage, currentPage * productPerPage)
      }
      return currentProducts;
    } else {
      return products.slice((currentPage - 1) * productPerPage, currentPage * productPerPage);
    }
    
  }, [priceFrom, currentPage,productPerPage]);

  return (
    <section className="w-full pb-[30px]">
      <p
        className={` ${Roboto.className} text-gray text-[14px] pt-[18px] leading-[68px] `}
      >
        Home/Shop
      </p>
      <div className="grid items-start mt-[18px] lg:grid-cols-10">
          <Filter />
        <div className="flex flex-col items-center gap-[30px] lg:col-span-8">
          <Shop
            productsLength={products.length}
            currentProducts={currentProducts}
          />
          { productPerPage < products.length &&
            <Pagination productsLength={products.length} />
          }
        </div>
      </div>
    </section>
  );
};