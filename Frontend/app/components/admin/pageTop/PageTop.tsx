import React from "react";
import { Icon } from "../../Icon";
import { WebsiteIcons } from "@/public/Svg/IconsObject";
import Image from "next/image";

export const PageTop = ({pageTitle}:{pageTitle:string}) => {
  return (
    <div className="flex justify-between pt-[28px]">
      <h1 className="font-bold text-[24px] leading-[22px] flex-grow">
        {pageTitle}
      </h1>
      <div className="flex gap-[24px] items-center">
        <div className="relative cursor-pointer">
          <Icon svg={WebsiteIcons["Bell"]} />
          <div className="w-fit h-fit">
            <Icon
              svg={WebsiteIcons["RedDot"]}
              className="absolute -right-2 -top-2 "
            />
            <p className="text-[#FFF]  absolute -right-[3px] -top-[5px] text-[13px] font-semibold leading-[14px]">
              2
            </p>
          </div>
        </div>
        <div>
          <Image
            src={"/Images/User/Avatar_Placeholder.png"}
            alt="Avatar Placeholder"
            width={30}
            height={30}
          />
        </div>
      </div>
    </div>
  );
};
