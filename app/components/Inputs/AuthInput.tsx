"use client";

import React from "react";
import { Roboto } from "../assets/Fonts";

interface Props {
  id: string;
  label?: string;
  name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent) => void;
  feedback?: string;
  required?: boolean;
  type?: string;
}

export const AuthInput = ({
  id,
  name,
  label,
  placeholder,
  onChange,
  feedback,
  required,
  type = "text",
}: Props) => {
  return (
    <div className={`flex justify-between items-start gap-[30px]`}>
      {label && (
        <p
          className={`text-[16px] mt-[2px] text-secondaryBlack leading-[20px] ${Roboto.className} `}
        >
          {label}
          {required && <span className="text-red-500 ml-[10px]">*</span>}
        </p>
      )}
      <div className="w-full">
        <input
          id={id}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          type={type}
          className={`
          w-full px-[16px] py-[10px] border-[1px] border-solid border-divider outline-none
          ${feedback && "border-rose-500 text-rose-500"}
          `}
        />
        {feedback && <div className="text-rose-500 mt-[4px]">{feedback}</div>}
      </div>
    </div>
  );
};
