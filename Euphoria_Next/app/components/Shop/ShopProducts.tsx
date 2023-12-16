"use client";

import React, { useMemo } from "react";
import { Filter } from "./Filter";
import { Shop } from "./Shop";
import { Roboto } from "../assets/Fonts";
import { usePagination } from "@/app/hooks/UsePagination";
import { Pagination } from "../Pagination";
import { useFilter } from "@/app/hooks/UseFilter";
import { CategoryInterface, productInterface } from "@/app/types";

interface Props {
  products: productInterface[];
  categories:CategoryInterface[]
}

export const ShopProducts = ({ products,categories }: Props) => {
  
  const { nextPage, previousPage, manualPage, currentPage, productPerPage } =
    usePagination();
  const { priceFrom, filter,title } = useFilter();
  
  const currentProducts: productInterface[] | undefined = useMemo(() => {
    if (products) {
      let currentProducts = products;
      if(title.length > 0){
       currentProducts = currentProducts.filter(product => product.title.includes(title))
      }
      if(filter.category.length > 0){
        
        currentProducts = currentProducts.filter(product => (
          
          filter.category.includes(product.category.name)
        ))
      }
      if (filter.price[0]) {
        currentProducts = currentProducts.filter(
          (product) =>
            product.price > parseInt(filter.price[0].split(",")[0]) &&
            product.price < parseInt(filter.price[0].split(",")[1])
        );
      }
      if (priceFrom) {
        if (priceFrom === "high") {
          currentProducts
            .sort((a, b) => a.price - b.price)
            .slice(
              (currentPage - 1) * productPerPage,
              currentPage * productPerPage
            );
        } else if (priceFrom === "low") {
          currentProducts
            .sort((a, b) => b.price - a.price)
            .slice(
              (currentPage - 1) * productPerPage,
              currentPage * productPerPage
            );
        }
      }

      if (!filter) {
        return (
          currentProducts.slice(
            (currentPage - 1) * productPerPage,
            currentPage * productPerPage
          ) || null
        );
      }
      return currentProducts || null;
    }
  }, [priceFrom, currentPage, productPerPage, products, filter,title]);

  return (
    <section className="w-full pb-[30px]">
      <p
        className={` ${Roboto.className} text-gray text-[14px] pt-[18px] leading-[68px] `}
      >
        Home/Shop
      </p>
      <div className="grid items-start mt-[18px] lg:grid-cols-10">
        <Filter categories={categories} />
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
