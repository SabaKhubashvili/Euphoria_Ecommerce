"use client";

import React, { useCallback } from "react";
import { ProductComponent } from "../Product/ProductComponent";
import { SmallBanner } from "../Banners/SmallBanner";
import { products } from "@/app/constants";
import { NextIconGray, PrevIconGray } from "@/public/Svg/Icons";
import { MainDropdown } from "../Dropdown/MainDropdown";
import { usePagination } from "@/app/hooks/UsePagination";
import { useFilter } from "@/app/hooks/UseFilter";

interface Props {
  currentProducts: typeof products;
  productsLength: number
}
export const Shop = ({ currentProducts, productsLength }: Props) => {
  const {nextPage,previousPage,currentPage} = usePagination()
  const maxNumber = Math.ceil(productsLength / 16);
  const {setPriceSort, priceFrom} = useFilter()
   const handleNextPage = useCallback(() => {
    if (currentPage < maxNumber) {
      nextPage();
    }
  }, [currentPage, maxNumber, nextPage]);
  const handlePrevPage = useCallback(() => {
    if (currentPage !== 1) {
      previousPage();
    }
  }, [currentPage, previousPage]);


  return (
    <section className="flex flex-col gap-[20px] w-full pl-[15px] ">
      <div className="flex justify-between items-center">
        <div className="flex gap-[5px] items-center">
          <div className="cursor-pointer" onClick={handlePrevPage}>
            <PrevIconGray/>
          </div>
          <div className="cursor-pointer" onClick={handleNextPage}>
            <NextIconGray />
          </div>
        </div>
        <div className="flex gap-[20px]">
            <MainDropdown
             size="xl"
             label={priceFrom ? priceFrom === 'high' ? 'Low To High' : 'High to low' : 'Sort by'}
             content={[{label:'price (High to low)',onClick:()=>setPriceSort('low')},{label:'price (Low to high)',onClick:()=>setPriceSort('high')}]} />
            <MainDropdown
             size="sm"
             label="48"
             content={[{label:'12',onClick:()=>console.log('smth')},{label:'32',onClick:()=>console.log('smth')}]}
              />
        </div>
      </div>
      <div className="flex flex-col gap-[44px]">
        <div className="lg:basis-3/4 w-full grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1  gap-[26px]">
          {currentProducts.slice(0, 4).map((product) => (
            <ProductComponent key={product.id} {...product} />
          ))}
        </div>
        <SmallBanner
          image="ShopBanner-2"
          title="shoping without limits."
          subTitle="You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. We will deliver your purchase anywhere!"
          button
          gradient="black"
          textColor="white"
          small
        />
        <div className="lg:basis-3/4 w-full grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1  gap-[26px]">
          {currentProducts.slice(4).map((product) => (
            <ProductComponent key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
