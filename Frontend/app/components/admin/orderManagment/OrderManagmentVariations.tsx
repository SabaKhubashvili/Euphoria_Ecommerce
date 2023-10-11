"use client";

import React, { useEffect, useRef, useState,useMemo } from "react";
import { SecondaryInput } from "../../Inputs/SecondaryInput";
import { Icon } from "../../Icon";
import { WebsiteIcons } from "@/public/Svg/IconsObject";
import { MainDropdown } from "../../Dropdown/MainDropdown";
import { MainTable } from "../../tables/MainTable";
import { orders } from "@/app/constants";
import { Pagination } from "../../Pagination";
import { UseAdminOrdersPagination } from "@/app/hooks/UseAdminOrdersPagination";
import { ordersInterface } from "@/app/types";

enum Variations {
  All = 0,
  Pending = 1,
  Confirmed = 2,
  Delivered = 3,
}

export const OrderManagmentVariations = () => {
  const [activeVariation, setActiveVariation] = useState<Variations>(
    Variations.All
  );
  const underlineRef = useRef<HTMLDivElement>(null);
  const { nextPage, prevPage, manualPage, currentPage, ordersPerPage, setProductPerPage } = UseAdminOrdersPagination();
  useEffect(() => {
    const updateActiveELement = () => {
      if (underlineRef.current) {
        const activeElement = document.querySelector(
          ".activeTableVariationOrders"
        ) as HTMLDivElement;

        underlineRef.current.style.left = activeElement.offsetLeft + "px";
        underlineRef.current.style.width = activeElement.offsetWidth + "px";
      }
    };
    updateActiveELement();
    document.addEventListener("resize", updateActiveELement);
    return () => document.removeEventListener("resize", updateActiveELement);
  }, [activeVariation]);
  
  const ordersOnPage: ordersInterface[] = useMemo(() => {
    const startIndex = (currentPage - 1) * ordersPerPage;
    const endIndex = currentPage * ordersPerPage;
    return orders.slice(startIndex, endIndex);
  }, [orders, currentPage, ordersPerPage]);
  
  return (
    <React.Fragment>
      <div className="flex items-center border-b-[1px] border-b-[#DBDADE] relative">
        <div
          className="h-[2px] bg-purple absolute bottom-0 transition-all duration-200"
          ref={underlineRef}
        />
        {/* Underline */}
        <div
          className={`py-[8px] px-[20px] text-[15px] leading-[22px] cursor-pointer ${
            activeVariation === Variations.All
              ? "text-purple activeTableVariationOrders"
              : "text-secondaryGray"
          }`}
          onClick={() => {
            setActiveVariation(Variations.All);
          }}
        >
          All
        </div>
        <div
          className={`py-[8px] px-[20px] text-[15px] leading-[22px] cursor-pointer ${
            activeVariation === Variations.Pending
              ? "text-purple activeTableVariationOrders"
              : "text-secondaryGray"
          }`}
          onClick={() => {
            setActiveVariation(Variations.Pending);
          }}
        >
          Pending
        </div>
        <div
          className={`py-[8px] px-[20px] text-[15px] leading-[22px] cursor-pointer ${
            activeVariation === Variations.Confirmed
              ? "text-purple activeTableVariationOrders"
              : "text-secondaryGray"
          }`}
          onClick={() => {
            setActiveVariation(Variations.Confirmed);
          }}
        >
          Confirmed
        </div>
        <div
          className={`py-[8px] px-[20px] text-[15px] leading-[22px] cursor-pointer ${
            activeVariation === Variations.Delivered
              ? "text-purple activeTableVariationOrders"
              : "text-secondaryGray"
          }`}
          onClick={() => {
            setActiveVariation(Variations.Delivered);
          }}
        >
          Delivered
        </div>
      </div>
      <div className=" pt-[24px] flex justify-between items-center">
        <div className="w-[204px]">
          <SecondaryInput
            placeholder="Search by order id"
            type="secondary"
            rightSvg={<Icon svg={WebsiteIcons["Search"]} />}
          />
        </div>
        {/* <MainDropdown
          content={[
            { label: "16", onClick: () => console.log("smt") },
            { label: "32", onClick: () => console.log("smt") },
            { label: "48", onClick: () => console.log("smt") },
            { label: "64", onClick: () => console.log("smt") },
          ]}
          type="secondary"
          size="xs"
          label="Filter by date range"
        /> */}
      </div>
      <div className="h-[600px]">
        <MainTable bodyContent={ordersOnPage} topContent={['Order id', 'created', 'customer', 'total', 'profit', 'status' , ' ']} type="primary"/>
      </div>
      <div className="w-full flex justify-between items-center px-[24px]">
          <div className="flex items-center gap-[10px] text-secondaryGray">
            <span>Showing</span>
            <MainDropdown type="primary" size="xs" label={`${ordersPerPage}`}   content={[
            { label: "10", onClick: () => setProductPerPage(10)},
            { label: "20", onClick: () => setProductPerPage(20) },
            { label: "30", onClick: () => setProductPerPage(30) },
            { label: "40", onClick: () => setProductPerPage(40) },
            { label: "50", onClick: () => setProductPerPage(50) },
          ]}/>
          <span>of 50</span>
          </div>
          <div>
          <Pagination
              currentPage={currentPage} 
              nextPage={nextPage}
              productPerPage={ordersPerPage}
              manualPage={manualPage} 
              previousPage={prevPage}
              productsLength={orders.length} 
              type="secondary"
            />
          </div>
      </div>

    </React.Fragment>
  );
};
