import Image from "next/image";
import React from "react";
import { Logo } from "../../assets/Logo";
import { Icon } from "../../Icon";
import { WebsiteIcons } from "@/public/Svg/IconsObject";

export const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}) => {
  return (
    <div className=" h-full w-full bg-white">
      <div className="flex justify-between items-center pl-[18px] py-[20px] pr-[14px]">
        <div className="w-[90px] h-[40px]">
          <Logo dark />
        </div>
        <div className={`cursor-pointer ${isSidebarOpen ? '' : 'scale-[-1]'} `} onClick={()=>setIsSidebarOpen(!isSidebarOpen)}>
          <Icon svg={WebsiteIcons["AdminMenu"]} />
        </div>
      </div>
    </div>
  );
};
