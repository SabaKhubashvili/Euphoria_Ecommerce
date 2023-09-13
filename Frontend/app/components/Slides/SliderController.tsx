import {
  NextIcon,
  NextIconGray,
  PrevIcon,
  PrevIconGray,
} from "@/public/Svg/Icons";
import React from "react";

interface Props {
  NextEl: string;
  PrevEl: string;
  light?: boolean;
}

export const SliderController = ({ NextEl, PrevEl, light }: Props) => {
  return (
    <div className="flex gap-[3px] lg:justify-end justify-between w-full">
      <div className={`${PrevEl} cursor-pointer`} >
        {light ? <PrevIconGray /> : <PrevIcon />}
      </div>
      <div className={`${NextEl} cursor-pointer`}>
        {light ? <NextIconGray /> : <NextIcon />}
      </div>
    </div>
  );
};
