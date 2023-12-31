"use client";
import { Dropdown_Down } from "@/public/Svg/Icons";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  label: string;
  type?: "primary" | "secondary";
  content: {
    onClick: (value: boolean)  => void;
    label: string;
    checked:boolean
  }[];
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  full?: boolean;
  feedback?:any
}

export const RadioDropdown = ({
  label,
  type,
  content,
  size = "md",
  full,
  feedback
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      const handleOutsideClick = (mouse: MouseEvent) => {
        if (ref.current && !ref.current.contains(mouse.target as Node)) {
          setIsOpen(false);
        }
      };
      window.addEventListener("click", handleOutsideClick);
      return () => window.removeEventListener("click", handleOutsideClick);
    }
  }, [isOpen]);

  
  return (
    <div className={`relative ${full ? "w-full" : "w-fit"}`} ref={ref}>
      <div
        className={`flex justify-between items-center cursor-pointer  p-[11px]
        ${
          type === "primary"
            ? "border-[1px] border-solid border-divider"
            : "rounded-[6px] bg-white"
        }
        ${
          size === "xs"
            ? "gap-[8px]"
            : size === "sm"
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
        <p
          className={`select-none md:text-[16px] text-[14px] 
        ${
          type === "primary"
            ? "text-black"
            : type === "secondary"
            ? "text-secondaryGray"
            : ""
        }`}
        >
          {label}
        </p>
        <div
          className={`${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-transform duration-300`}
        >
          <Dropdown_Down />
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-10 top-[48px] bg-white w-full left-0 select-none p-[11px] flex flex-col gap-[5px] ">
          {content.map((cont) => (
           <div
           className="cursor-pointer flex justify-between uppercase"
           onClick={(e) => {
             e.stopPropagation();
             cont.onClick(!cont.checked); 
           }}
           key={cont.label}
         >
           <span>{cont.label}</span>
           <input
             type="checkbox"
             checked={cont.checked}
             onChange={(e) => {
               e.stopPropagation();
               cont.onClick(e.target.checked);                
             }}
           />
         </div>
         
          ))}
        </div>
      )}
      {feedback && <div className="text-rose-500 mt-[4px]">{feedback}</div>}
    </div>
  );
};
