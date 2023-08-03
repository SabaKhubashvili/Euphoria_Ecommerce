"use client";
import React, { useCallback } from "react";
import { usePagination } from "../hooks/UsePagination";
import { PrevIconWhite, NextIconWhite } from "@/public/Svg/Icons";

interface Props {
  productsLength: number;
}
export const Pagination = ({ productsLength }: Props) => {
  const { nextPage, previousPage, manualPage, currentPage } = usePagination();
  const maxNumber = Math.ceil(productsLength / 16);
  const numbers = Array.from({ length: maxNumber }, (_, index) => index + 1);

  const handleNextPage = useCallback(() => {
    if (currentPage < maxNumber) {
      window.scrollTo(0,0);
      nextPage();
    }
  }, [currentPage, maxNumber, nextPage]);
  const handlePrevPage = useCallback(() => {
    if (currentPage !== 1) {
      window.scrollTo(0,0);
      previousPage();
    }
  }, [currentPage, previousPage]);

  
  
  return (
    <div className="flex gap-[10px] items-center">
        {
        currentPage !== 1 &&
          <div className="bg-black h-full p-[12px] rounded-md cursor-pointer" onClick={handlePrevPage}>
                <PrevIconWhite/>
          </div>
        }

      {numbers.map((number) => (
        <div className={`py-[10px] px-[15px]  border-[2px] border-solid 
        rounded-md text-black font-bold cursor-pointer
        ${number === currentPage ? 'border-black' : 'border-[#79777d]'}
        `} onClick={()=>{
          if(currentPage !== number){
            window.scrollTo(150,0);
            manualPage(number)
          }
          }} key={number}>
          {number}
        </div>
      ))}
    
      {
        currentPage < maxNumber &&
          <div className="bg-black h-full p-[12px] rounded-md cursor-pointer " onClick={handleNextPage}>
                <NextIconWhite/>
          </div>
        }
      
    </div>
  );
};
