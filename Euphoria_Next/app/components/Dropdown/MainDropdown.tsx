"use client";
import { Dropdown_Down } from "@/public/Svg/Icons";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  label: string;
  type?: 'primary' | 'secondary';
  content: {
    onClick: (value: string | null | undefined) => void;
    label: string;
  }[] | null;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  full?: boolean;
  fontSize?: string;
  bodyFontSize?: string;
  bodyWidth?: string;
  bodyHeight?: string;
  maxHeight?: string;
  top?: string;
  errors?: boolean;
  styles?: any;
}

export const MainDropdown = ({
  label,
  type,
  content,
  size = 'md',
  full,
  fontSize,
  bodyFontSize,
  bodyWidth,
  bodyHeight,
  maxHeight,
  top,
  errors,
  styles,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOutsideClick = (mouse: MouseEvent) => {
    if (ref.current && !ref.current.contains(mouse.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('click', handleOutsideClick);
      return () => window.removeEventListener('click', handleOutsideClick);
    }
  }, [isOpen]);

  const containerClasses = `flex justify-between items-center cursor-pointer p-[11px]
    ${type === 'primary' ? 'border-[1px] border-solid border-divider' :
      type === 'secondary' ? 'bg-none' : 'rounded-[6px] bg-white'}
    ${size === 'xs' ? 'gap-[8px]' :
      size === "sm" ? "gap-[20px]" : size === "md" ? "gap-[40px]" :
      size === "lg" ? "gap-[60px]" : size === "xl" ? "gap-[80px]" : ""}`;

  const labelClasses = `select-none md:text-[16px] text-[14px] flex text-center items-center
    ${type === 'primary' ? 'text-black' :
      type === 'secondary' ? 'text-secondaryGray' : ''} ${errors && '!text-rose-500'}`;




  return (
    <div className={`relative ${full ? 'w-full' : 'w-fit'} `} ref={ref} style={{ fontSize }}>
      <div
        className={containerClasses}
        onClick={() => setIsOpen((prev) => !prev)}
        style={styles}
      >
        <p className={labelClasses}>{label}</p>
        <div className={`rotate-${isOpen ? '180' : '0'} transition-transform duration-300`}>
          <Dropdown_Down color={errors ? 'red' : 'gray'} />
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-10 top-[48px] bg-white w-full left-0 select-none p-[11px] flex flex-col gap-[5px] leading-5 overflow-y-auto "
          style={{ width: bodyWidth, height: bodyHeight, maxHeight, top }}>

          {content?.map((cont,index) => (

            <div className="cursor-pointer" style={{ fontSize: bodyFontSize }} onClick={(e) => {
              e.stopPropagation()
              cont.onClick(cont.label);
              setIsOpen(false);
            }} key={index}>
              <span className="cursor-pointer">

              {cont.label}
              </span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
