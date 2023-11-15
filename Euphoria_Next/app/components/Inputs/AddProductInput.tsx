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
  required?: boolean;
  defaultValue?:string,
  disabled?:boolean,
  value:string,
  fontSize?:string,
  type?:string
}

export const AddProductInput = ({
  id,
  name,
  placeholder,
  onChange,
  feedback,
  required,
  defaultValue,
  disabled,
  value,
  fontSize,
  type = 'text'
}: Props) => {


  return (
    <div
      className={`flex justify-between items-start sm:flex-row flex-col w-full `}
    >
      <div className="xs:basis-2/3 w-full">
        <div className="relative w-full">
          <input
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            type={type}
            defaultValue={defaultValue}
            disabled={disabled}
            style={{fontSize:fontSize}}
            className={`
            w-full   border-none outline-none bg-transparent text-black
            ${feedback && "border-rose-500 text-rose-500"}
            ${disabled && 'opacity-75'}
            transition-all duration-200
            `}
          />
        </div>
        {feedback && <div className="text-rose-500 mt-[4px]">{feedback}</div>}
      </div>
    </div>
  );
};
