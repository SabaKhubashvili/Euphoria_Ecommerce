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
  currentProducts: typeof products | null;
  productsLength: number
}
export const Shop = ({ currentProducts, productsLength }: Props) => {
  const {nextPage,previousPage,currentPage,productPerPage, setProductPerPage,manualPage} = usePagination()
  const maxNumber = Math.ceil(productsLength / productPerPage);
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
  const handleProductPerPageChange = (productNum: 16 | 32 | 48 | 64) => {
    setProductPerPage(productNum);
    const totalPages = Math.ceil(productsLength / productNum);
    if (currentPage > totalPages) {
      manualPage(totalPages);
    }
  };
  
  return (
    <section className="flex flex-col gap-[20px] w-full pl-[15px] ">
      <div className="flex justify-between  sm:flex-row flex-col sm:items-center items-start gap-[10px]">
        <div className="flex gap-[5px] items-center">
          <div className="cursor-pointer" onClick={handlePrevPage}>
            <PrevIconGray/>
          </div>
          <div className="cursor-pointer" onClick={handleNextPage}>
            <NextIconGray />
          </div>
        </div>
        <div className="flex gap-[20px] sm:order-none order-first">
            <MainDropdown
             size="xl"
             label={priceFrom ? priceFrom === 'high' ? 'Low To High' : 'High to low' : 'Sort by'}
             content={[{label:'price (High to low)',onClick:()=>setPriceSort('low')},{label:'price (Low to high)',onClick:()=>setPriceSort('high')}]} />
            <MainDropdown
             size="sm"
             label={`${productPerPage}`}
             content={[
             {label:'16',onClick:()=>handleProductPerPageChange(16)},
             {label:'32',onClick:()=>handleProductPerPageChange(32)},
             {label:'48',onClick:()=>handleProductPerPageChange(48)},
             {label:'64',onClick:()=>handleProductPerPageChange(64)},
            ]}
              />
        </div>
      </div>
      <div className="flex flex-col gap-[44px]">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {currentProducts?.slice(0, 4).map((product) => (
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
          {currentProducts?.slice(4).map((product) => (
            <ProductComponent key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
