"use client";
import {
  GrayMinusIcon,
  GrayPlusIcon,
  MinusIcon,
  PlusIcon,
} from "@/public/Svg/Icons";
import React from "react";

interface Props {
  value: number;
  setValue: (value: number) => void;
  max?: number;
}

const Counter = ({ value, setValue, max }: Props) => {
  return (
    <div className="px-[14px] border-[1px] border-solid border-divider flex items-center w-fit gap-[16px] ">
      <p
        className="cursor-pointer"
        onClick={() => {
          if (value - 1 > 0) {
            setValue(value - 1);
          }
        }}
      >
        <GrayMinusIcon />
      </p>
      <p className="select-none">{value}</p>
      <p
        className="cursor-pointer"
        onClick={() => {
          if (value !== max) {
            setValue(value + 1);
          }
        }}
      >
        <GrayPlusIcon />
      </p>
    </div>
  );
};

export default Counter;
