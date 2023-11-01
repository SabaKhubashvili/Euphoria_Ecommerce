"use client";

import React from "react";

interface Props {
  id?:string,
  name?:string,
  placeholder: string;
  type: "primary" | "secondary" | "third";
  rightSvg?: React.ReactElement;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (e: React.FormEvent) => void;
  value?: string;
}

export const SecondaryInput = ({
  id,
  name,
  placeholder,
  type,
  rightSvg,
  onChange,
  onSubmit,
  value,
}: Props) => {
  return (
    <div className="w-full">
      {onSubmit ? (
        <form onSubmit={onSubmit} className="relative w-full">
          <input
            type="text"
            value={value}
            onChange={onChange && onChange}
            className={`w-full  outline-none bg-transparent 
     
      ${rightSvg && "pr-[28px]"}
      ${
        type === "primary"
          ? `placeholder:text-white text-white border-white py-[14px] px-[12px]  border-[1px]`
          : type === "secondary"
          ? `bg-white placeholder:text-secondaryGray py-[8px] px-[16px] border-[0px] text-[15px] rounded-[4px]`
          :  type === 'third' ?
          ' bg-white border-[1px] border-secondaryGray placeholder:text-secondaryGray rounded-[4px] px-[16px] py-[8px]'
          :''
      }
      `}
            placeholder={placeholder}
          />
          {rightSvg && (
            <div className="absolute right-1 top-0 bottom-0 flex items-center">
              {rightSvg}
            </div>
          )}
        </form>
      ) : (
        <div className="relative w-full">
          <input
            id={id}
            name={name}
            type="text"
            onChange={onChange && onChange}
            value={value}
            className={`w-full  outline-none bg-transparent 
            
            ${rightSvg && "pr-[28px]"}
      ${
        type === "primary"
          ? `placeholder:text-white text-white border-white py-[14px] px-[12px] border-[1px]`
          : type === "secondary"
          ? `bg-white placeholder:text-secondaryGray py-[8px] px-[16px] border-[0px] rounded-[4px] text-[15px] `
          : type === 'third' ?
          ' bg-white border-[1px] border-secondaryGray placeholder:text-secondaryGray rounded-[4px] px-[16px] py-[8px]'
          :''
      }
      `}
            placeholder={placeholder}
          />
          {rightSvg && (
            <div className="absolute right-1 top-0 bottom-0 flex items-center">
              {rightSvg}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
