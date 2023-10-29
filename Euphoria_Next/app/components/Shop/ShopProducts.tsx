"use client";

import React, { useMemo } from "react";
import { Filter } from "./Filter";
import { Shop } from "./Shop";
import { Roboto } from "../assets/Fonts";
import { productInterface, products } from "@/app/constants";
import { usePagination } from "@/app/hooks/UsePagination";
import { Pagination } from "../Pagination";
import { useFilter } from "@/app/hooks/UseFilter";
import { useGetAllProducts } from "@/app/actions/getAllProducts";

export const ShopProducts = () => {

  const { nextPage, previousPage, manualPage, currentPage, productPerPage } = usePagination();
  const { priceFrom } = useFilter();
  const { 
    data: products, 
    isLoading: isProductsLoading 
  } =   useGetAllProducts() ;
  const currentProducts: productInterface[] | undefined = useMemo(() => {
    if (!isProductsLoading && products) {
      let currentProducts = products;
      if (priceFrom) {
        if (priceFrom === "high") {
          currentProducts = products
            .sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
            .slice(
              (currentPage - 1) * productPerPage,
              currentPage * productPerPage
            );
        } else if (priceFrom === "low") {
          currentProducts = products
            .sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
            .slice(
              (currentPage - 1) * productPerPage,
              currentPage * productPerPage
            );
        }
        return currentProducts || null;
      } else {
        return products.slice(
          (currentPage - 1) * productPerPage,
          currentPage * productPerPage
        ) || null;
      }
    }
  }, [priceFrom, currentPage, productPerPage, isProductsLoading, products]);
 
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
            productsLength={products?.length || 0}
            currentProducts={currentProducts || null}
          />
          {products?.length && productPerPage < products?.length && (
            <Pagination 
              currentPage={currentPage} 
              nextPage={nextPage}
              productPerPage={productPerPage}
              manualPage={manualPage} 
              previousPage={previousPage}
              productsLength={products.length} 
            />
          )}
        </div>
      </div>
    </section>
  );
};