"use client";

import React, { useCallback } from "react";
import { ProductComponent } from "../Product/ProductComponent";
import { SmallBanner } from "../Banners/SmallBanner";
import { NextIconGray, PrevIconGray } from "@/public/Svg/Icons";
import { MainDropdown } from "../Dropdown/MainDropdown";
import { usePagination } from "@/app/hooks/UsePagination";
import { useFilter } from "@/app/hooks/UseFilter";
import useMediaQuery from "@/app/hooks/UseMediaQuery";
import { largeScreens } from "@/app/Screens/Screens";
import { AuthInput } from "../Inputs/AuthInput";
import { productInterface } from "@/app/types";

interface Props {
  currentProducts: productInterface[]  | null;
  productsLength: number;
}
export const Shop = ({ currentProducts, productsLength }: Props) => {
  const {
    nextPage,
    previousPage,
    currentPage,
    productPerPage,
    setProductPerPage,
    manualPage,
  } = usePagination();
  const maxNumber = Math.ceil(productsLength / productPerPage);
  const isAboveLargeScreens = useMediaQuery(largeScreens);
  const { setPriceSort, priceFrom, setTitle,title } = useFilter();
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
      <div className="w-full flex">
       <AuthInput 
      //  label="search" 
        id="search" 
        name="search" 
        placeholder="Search" 
        onChange={(e)=>{setTitle(e.target.value)}} value={title} style={{
          flexDirection:'column',
          gap:'5px',
        }}/>
      </div>
      <div className="flex justify-between  sm:flex-row flex-col sm:items-center items-start gap-[10px]">
        <div className="flex gap-[5px] items-center">
          <div className="cursor-pointer" onClick={handlePrevPage}>
            <PrevIconGray />
          </div>
          <div className="cursor-pointer" onClick={handleNextPage}>
            <NextIconGray />
          </div>
        </div>
        <div className="flex gap-[20px] sm:order-none order-first">
          <MainDropdown
            type="primary"
            size="xl"
            label={
              priceFrom
                ? priceFrom === "high"
                  ? "Low To High"
                  : "High to low"
                : "Sort by"
            }
            content={[
              {
                label: "price (High to low)",
                onClick: () => setPriceSort("low"),
              },
              {
                label: "price (Low to high)",
                onClick: () => setPriceSort("high"),
              },
            ]}
          />
          <MainDropdown
            type="primary"
            size="sm"
            label={`${productPerPage}`}
            content={[
              { label: "16", onClick: () => handleProductPerPageChange(16) },
              { label: "32", onClick: () => handleProductPerPageChange(32) },
              { label: "48", onClick: () => handleProductPerPageChange(48) },
              { label: "64", onClick: () => handleProductPerPageChange(64) },
            ]}
          />
        </div>
      </div>
      <div className="flex flex-col gap-[44px]">
        {isAboveLargeScreens && (
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
            {currentProducts?.slice(0, 5).map((product) => (
              <div className="h-[140vw] xs:h-[70vw] md:h-[50vw] lg:h-[35vw] 2xl:h-[25vw]"  key={product._id}>
                <ProductComponent {...product} />
              </div>
            ))}
          </div>
        )}

        {isAboveLargeScreens && (
          <SmallBanner
            image="ShopBanner-2"
            title="shoping without limits."
            subTitle="You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. We will deliver your purchase anywhere!"
            button
            gradient="black"
            textColor="white"
            small
          />
        )}

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
          {currentProducts
            ?.slice(isAboveLargeScreens ? 6 : 0)
            .map((product) => (
              <div className="h-[140vw] xs:h-[70vw] md:h-[50vw] lg:h-[35vw] 2xl:h-[25vw]" key={product._id}>
                <ProductComponent   {...product} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
