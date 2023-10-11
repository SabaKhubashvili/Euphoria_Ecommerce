"use client";
import React, { useCallback } from "react";
import { usePagination } from "../hooks/UsePagination";
import { PrevIconWhite, NextIconWhite } from "@/public/Svg/Icons";
import { Icon } from "./Icon";
import { WebsiteIcons } from "@/public/Svg/IconsObject";

interface Props {
  productsLength: number;
  nextPage:()=>void,
  previousPage:()=>void,
  manualPage:(page:number)=>void
  currentPage:number,
  productPerPage:number,
  type?:'primary' | 'secondary'
}
export const Pagination = ({ productsLength, nextPage, previousPage, manualPage, currentPage, productPerPage, type = 'primary' }: Props) => {

  const maxNumber = Math.ceil(productsLength / productPerPage);
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
    <div className={`flex items-center ${type === 'primary' ? 'gap-[10px]' : 'gap-[2px]'}`}>
        {
        currentPage !== 1 &&
          type === 'primary' ?
          <div className="bg-black h-full p-[12px] rounded-md cursor-pointer" onClick={handlePrevPage}>
                <PrevIconWhite/>
          </div>
          :
          <div className="bg-[#F1F2F6] h-full py-[9px] px-[8px] rounded-md cursor-pointer" onClick={handlePrevPage}>
                <Icon svg={WebsiteIcons['prevGray']}/>
          </div>

        }

      {numbers.map((number) => (
        <div className={`cursor-pointer select-none
        ${type === 'primary' ? `py-[10px] px-[15px] border-[2px] border-solid rounded-md text-black font-bold 
        ${number === currentPage ? 'border-black' : 'bg-[#79777d]'}
        ` 
        :
        `py-[4px] px-[8px] rounded-[4px] text-secondaryGray
        ${number === currentPage ? 'bg-purple text-white' : 'bg-[#F1F2F6]'}  `}
        
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
          type === 'primary' ?
          <div className="bg-black h-full p-[12px] rounded-md cursor-pointer " onClick={handleNextPage}>
                <NextIconWhite/>
          </div>
          :
          <div className="bg-[#F1F2F6] h-full py-[9px] px-[8px] rounded-md cursor-pointer" onClick={handleNextPage}>
            <Icon svg={WebsiteIcons['nextGray']}/>
          </div>

        }
      
    </div>
  );
};
