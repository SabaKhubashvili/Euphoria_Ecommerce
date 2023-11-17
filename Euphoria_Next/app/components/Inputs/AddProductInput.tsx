"use client";

import React, { useState } from "react";
import { Roboto } from "../assets/Fonts";
import { EyeHidden, EyeShown } from "@/public/Svg/Icons";

interface Props {
  id: string;
  name: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent) => void;
  feedback?: string;
  defaultValue?:string,
  disabled?:boolean,
  value:string,
  fontSize?:string,
  type?:string,
  variant?: 'primary' | 'secondary'
}

export const AddProductInput = ({
  id,
  name,
  placeholder,
  onChange,
  feedback,
  defaultValue,
  disabled,
  value,
  fontSize,
  type = 'text',
  variant = 'primary'
}: Props) => {


  return (
    <div
      className={`flex justify-between items-start sm:flex-row flex-col w-fit `}
    >
        <div className="relative  w-fit ">
          <input
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            type={type}
            defaultValue={defaultValue}
            disabled={disabled}
            style={{fontSize:fontSize, width: variant === 'secondary' ? `${value.length < 14 ? 130 : value.length * 10}px` : 'auto'  }}
            className={`
            border-none outline-none bg-transparent text-black  w-fit 
            ${feedback && "text-rose-500 placeholder:text-rose-500"}
            ${disabled && 'opacity-75'}
            ${variant !== 'secondary' && "transition-all duration-200"}
            ${variant === 'secondary' && '!bg-lightBlue font-bold px-2 py-1 inline uppercase w-fit max-w-[300px]'}
            `}
          />
        </div>
        {/* {feedback && <div className="text-rose-500 mt-[4px]">{feedback}</div>} */}
    </div>
  );
};
