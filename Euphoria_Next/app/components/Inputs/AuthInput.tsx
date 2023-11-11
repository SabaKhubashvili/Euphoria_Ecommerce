"use client";

import React, { useState } from "react";
import { Roboto } from "../assets/Fonts";
import { EyeHidden, EyeShown } from "@/public/Svg/Icons";

interface Props {
  id: string;
  label?: string;
  name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent) => void;
  feedback?: string;
  required?: boolean;
  type?: string;
  defaultValue?:string,
  disabled?:boolean,
  value:string
}

export const AuthInput = ({
  id,
  name,
  label,
  placeholder,
  onChange,
  feedback,
  required,
  type = 'text',
  defaultValue,
  disabled,
  value
}: Props) => {
  const [currentType,setCurrentType] = useState<string>(type)
 

  const handleToggleVisibility = (event: React.MouseEvent) => {
    event.stopPropagation();
    setCurrentType(currentType === 'password' ? 'text' : 'password');
  };

  return (
    <div
      className={`flex justify-between items-start sm:flex-row flex-col w-full `}
    >
      {label && (
        <p
          className={`text-[16px] mt-[2px] text-secondaryBlack leading-[20px] xs:mb-0 mb-2 ${Roboto.className} `}
        >
          {label}
          {required && <span className="text-red-500 ml-[10px]">*</span>}
        </p>
      )}
      <div className="xs:basis-2/3 w-full">
        <div className="relative w-full">
          <input
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            type={currentType}
            defaultValue={defaultValue}
            disabled={disabled}
            className={`
            w-full px-[16px] py-[10px] border-[1px] border-solid border-divider outline-none
            ${feedback && "border-rose-500 text-rose-500"}
            ${disabled && 'opacity-75'}
            transition-all duration-200
            `}
          />
          {type && type === "password" && (
            <div className="absolute right-2 flex items-center top-0 bottom-0 cursor-pointer" onClick={handleToggleVisibility}>
              {currentType === "text" ? (
                  <EyeShown />
              ) : (
                  <EyeHidden />
              )}
            </div>
          )}
        </div>
        {feedback && <div className="text-rose-500 mt-[4px]">{feedback}</div>}
      </div>
    </div>
  );
};
