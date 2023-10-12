"use client";

import React from "react";

interface Props {
  placeholder: string;
  type: "primary" | "secondary";
  rightSvg?: React.ReactElement;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (e: React.FormEvent) => void;
  value?:string
}

export const SecondaryInput = ({
  placeholder,
  type,
  rightSvg,
  onChange,
  onSubmit,
  value
}: Props) => {
  return (
    <div>
      {onSubmit ? (
        <form onSubmit={onSubmit} className="relative w-full">
          <input
            type="text"
            value={value}
            onChange={onChange && onChange}
            className={`w-full  outline-none bg-transparent 
      border-[1px]
      ${
        type === "primary"
          ? `placeholder:text-white text-white border-white py-[14px] px-[12px] ${
            rightSvg && "pr-[28px]"
          }`
          : type === "secondary"
          ? `bg-white placeholder:text-secondaryGray py-[8px] px-[16px] border-[0px] text-[15px] rounded-[4px] ${
              rightSvg && "pr-[28px]"
            }`
          : ""
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
        <div>
          <input
            type="text"
            onChange={onChange && onChange}
            value={value}
            className={`w-full  outline-none bg-transparent 
            border-[1px]
      ${
        type === "primary"
          ? `placeholder:text-white text-white border-white py-[14px] px-[12px] ${
            rightSvg && "pr-[28px]"
          }`
          : type === "secondary"
          ? `bg-white placeholder:text-secondaryGray py-[8px] px-[16px] border-[0px] rounded-[4px] text-[15px] ${
              rightSvg && "pr-[28px]"
            }`
          : ""
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
