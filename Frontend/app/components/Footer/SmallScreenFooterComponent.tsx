"use client";

import { PlusIcon } from "@/public/Svg/Icons";
import { useState } from "react";
import { Roboto } from "../assets/Fonts";
import Link from "next/link";
import { SingleFooterComponentRowType, footerComponentsType } from "@/app/types";



export const SmallScreenFooterComponent = ({ title, content }: footerComponentsType) => {  
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="relative text-white ">
      <div
        className="flex justify-between py-[14px] cursor-pointer"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <h1 className="uppercase font-medium md:text-[18px] text-[14px] tracking-[0.5px] select-none">
          {title}
        </h1>
        <p>
          <PlusIcon />
        </p>
      </div>
      <div className="bg-[#4F4F4F] h-[1px] w-full" />
      {isOpen && (
        <div className="pt-[5px]">
          <ul className={`${Roboto.className} flex flex-col gap-[5px]`}>
            {content.map((row:SingleFooterComponentRowType) => (
              <li className="text-gray text-[13px] uppercase" key={row.title}>
                <div className="flex flex-col">
                  {row.mainTitle &&  <h1 className="text-white">{row.mainTitle}</h1> }
                  {row.to ? <Link href={row.to}>{row.title}</Link> : row.title}
                </div>
                
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
