"use client";
import { Dropdown_Down } from "@/public/Svg/Icons";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  label: string;
  onClick?: () => {};
  type?: string;
  content: string[];
  size?: "sm" | "md" | "lg" | "xl";
}

export const MainDropdown = ({
  label,
  onClick,
  type,
  content,
  size = 'md',
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(()=>{
    
    if(isOpen){
      const handleOutsideClick = (mouse: MouseEvent) => {
        if (ref.current && !ref.current.contains(mouse.target as Node)) {
          console.log('close');
          setIsOpen(false);
        }
      };
      window.addEventListener('click',handleOutsideClick)
      return () => window.removeEventListener('click',handleOutsideClick)
    }
  },[isOpen])

  return (
    <div className="relative border-[1px] border-solid border-divider p-[11px] w-fit" ref={ref}>
      <div
        className={`flex justify-between items-center cursor-pointer
        ${
          size === "sm"
            ? "gap-[20px]"
            : size === "md"
            ? "gap-[40px]"
            : size === "lg"
            ? "gap-[60px]"
            : size === "xl"
            ? "gap-[80px] "
            : ""
        }
        `}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <p className="select-none">{label}</p>
        <div
          className={`${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-transform duration-300`}
        >
          <Dropdown_Down />
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-10 top-[48px] bg-white w-full left-0 select-none p-[11px] ">
          {content.map((cont) => (
            <div className="cursor-pointer" key={cont}>{cont}</div>
          ))}
        </div>
      )}
    </div>
  );
};
