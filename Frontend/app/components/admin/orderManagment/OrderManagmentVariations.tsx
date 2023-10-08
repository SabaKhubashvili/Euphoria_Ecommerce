"use client";

import React, { useEffect, useRef, useState } from "react";

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

  useEffect(() => {
    const updateActiveELement = () => {
        
      if (underlineRef.current) {
        const activeElement = document.querySelector(".activeTableVariationOrders") as HTMLDivElement;
        console.log(activeElement);
        
        underlineRef.current.style.left = activeElement.offsetLeft + "px";
        underlineRef.current.style.width = activeElement.offsetWidth + "px";
      }
    };
    updateActiveELement()
    document.addEventListener("resize", updateActiveELement);
    return () => document.removeEventListener("resize", updateActiveELement);
  }, [activeVariation]);

  return (
    <div>
      <div className="flex items-center border-b-[1px] border-b-[#DBDADE] relative">
        <div className="h-[2px] bg-purple absolute bottom-0 transition-all duration-200" ref={underlineRef} />
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
    </div>
  );
};
