"use client";

import { WebsiteIcons } from "@/public/Svg/IconsObject";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "../Icon";
import LinearChart from "./LinearChart";

enum dataTypes {
  customers = 1,
  totalProducts = 2,
  stockProducts = 3,
  outOfStock = 4,
  revenue = 5,
}

export const SeveralContentChart = () => {
  const [activeType, setActiveType] = useState<dataTypes>(dataTypes.customers);
  const underlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateActiveElement = () => {
      const activeElement = document.querySelector(".active") as HTMLDivElement;
      if (activeElement && underlineRef.current) {
        underlineRef.current.style.left = activeElement.offsetLeft + "px";
        underlineRef.current.style.width = activeElement.offsetWidth + "px";
      }
    };
    updateActiveElement();

    window.addEventListener("resize", updateActiveElement);
    return () => {
      window.removeEventListener("resize", updateActiveElement);
    };
  }, [activeType]);

  
  const weeklyIncomeData = [
    { day: "Monday", income: Math.floor(Math.random() * 1000) },
    { day: "Tuesday", income: Math.floor(Math.random() * 1000) },
    { day: "Wednesday", income: Math.floor(Math.random() * 1000) },
    { day: "Thursday", income: Math.floor(Math.random() * 1000) },
    { day: "Friday", income: Math.floor(Math.random() * 1000) },
    { day: "Saturday", income: Math.floor(Math.random() * 1000) },
    { day: "Sunday", income: Math.floor(Math.random() * 1000) },
  ];

  return (
    <div className="flex w-full">
      <div className="w-full p-[24px] bg-white rounded-[16px]">
        <div className="flex justify-between w-full">
          {/* Header */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-[18px] text-blackBlue">
              Reports
            </h3>
            <p className="text-secondaryGray">Last 7 days</p>
          </div>
          <Icon svg={WebsiteIcons["Verticaldots"]} />
        </div>
        <div className="pt-[24px] flex flex-col gap-[46px]">
          {/* Body */}
          <div className="flex justify-between relative">
            <div
              className="absolute h-[3px] rounded-lg bg-purple bottom-0 transition-all duration-200"
              ref={underlineRef}
            />{" "}
            {/* Underline  */}
            <div
              className={`flex flex-col gap-[8px] py-[15px] px-[8px]  cursor-pointer select-none 
                          border-b-[1px]  border-b-[#E9E7FD] ChartElementsReport ${
                            activeType === dataTypes.customers && "active"
                          }`}
              onClick={() => setActiveType(dataTypes.customers)}
            >
              <h1 className="text-grayBlue text-[24px] font-bold">24K</h1>
              <p className="text-secondaryGray">Customers</p>
            </div>
            <div
              className={`flex flex-col gap-[8px] py-[15px] px-[8px]   select-none  border-b-[1px] cursor-pointer  border-b-[#E9E7FD]  ChartElementsReport
                          ${
                            activeType === dataTypes.totalProducts && "active"
                          }`}
              onClick={() => setActiveType(dataTypes.totalProducts)}
            >
              <h1 className="text-grayBlue text-[24px] font-bold">24K</h1>
              <p className="text-secondaryGray">Total Products</p>
            </div>
            <div
              className={`flex flex-col gap-[8px] py-[15px] px-[8px] select-none border-b-[1px] cursor-pointer  border-b-[#E9E7FD]  ChartElementsReport
                          ${
                            activeType === dataTypes.stockProducts && "active"
                          }`}
              onClick={() => setActiveType(dataTypes.stockProducts)}
            >
              <h1 className="text-grayBlue text-[24px] font-bold">24K</h1>
              <p className="text-secondaryGray">Stock Products</p>
            </div>
            <div
              className={`flex flex-col gap-[8px] py-[15px] px-[8px]   select-none border-b-[1px] cursor-pointer  border-b-[#E9E7FD]  ChartElementsReport
                          ${activeType === dataTypes.outOfStock && "active"}`}
              onClick={() => setActiveType(dataTypes.outOfStock)}
            >
              <h1 className="text-grayBlue text-[24px] font-bold">24K</h1>
              <p className="text-secondaryGray">Out of stock</p>
            </div>
            <div
              className={`flex flex-col gap-[8px] py-[15px] px-[8px]   select-none border-b-[1px] cursor-pointer  border-b-[#E9E7FD]  ChartElementsReport
                          ${activeType === dataTypes.revenue && "active"}
                          `}
              onClick={() => setActiveType(dataTypes.revenue)}
            >
              <h1 className="text-grayBlue text-[24px] font-bold">24K</h1>
              <p className="text-secondaryGray">Revenue</p>
            </div>
          </div>

          {/* Charts */}
          <div className="w-full h-[400px]">
            <LinearChart
              XAxisKey={"day"}
              data={weeklyIncomeData}
              valueKey="income"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
