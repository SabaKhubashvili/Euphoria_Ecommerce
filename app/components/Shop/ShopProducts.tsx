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
  const { currentPage } = usePagination();
  const { priceFrom } = useFilter();

  const currentProducts: productInterface[] = useMemo(() => {
    let currentProducts = products;
    if (priceFrom) {
      if (priceFrom === "high") {
        currentProducts = products
          .slice((currentPage - 1) * 16, currentPage * 16)
          .sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      } else if (priceFrom === "low") {
        currentProducts = products
          .slice((currentPage - 1) * 16, currentPage * 16)
          .sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      }
      return currentProducts;
    } else {
      return products.slice((currentPage - 1) * 16, currentPage * 16);
    }
  }, [priceFrom, currentPage]);

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
            currentProducts={currentProducts}
          />
          <Pagination productsLength={products.length} />
        </div>
      </div>
    </section>
  );
};
