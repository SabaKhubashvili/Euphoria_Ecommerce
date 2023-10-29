'use client'

import React from "react";
import { Icon } from "../../Icon";
import { WebsiteIcons } from "@/public/Svg/IconsObject";
import Image from "next/image";
import { PublicSans } from "../../assets/Fonts";
import { IconDropdown } from "../../Dropdown/IconDropdown";



export interface RowProps {
  type: 'sold' | 'notification' | 'registration';
  children: React.ReactNode;
}

export const PageTop = ({pageTitle}:{pageTitle:string}) => {


  const Row = ({ type, children }:RowProps) => {
    return (
      <div className="min-w-[600px] flex justify-between items-center bg-[#FAFAFA] px-[5px] py-[15px]">
        <h3 className="basis-1/2">
          {children}
        </h3>
        <div className="bg-green flex justify-end p-2  rounded-[12px]">
            <Icon svg={WebsiteIcons['Bell']} className=" w-[25px] h-[25px] fill-white stroke-white  "/>
        </div>
      </div>
    );
  };

  return (
    <div className={`flex justify-between pt-[28px] ${PublicSans.className}`}>
      <h1 className="font-bold text-[24px] leading-[22px] flex-grow">
        {pageTitle}
      </h1>
      <div className="flex gap-[24px] items-center">
          <IconDropdown
            Row={Row}
            svg={
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
            }
            content={
              [
                {
                  label: "New user registration: Welcome Alice to our community!",
                  onClick: () => console.log('click'),
                  type: 'registration',
                },
                {
                  label: "Sold: David's vintage record found a new home",
                  onClick: () => console.log('click'),
                  type: 'sold',
                },
                {
                  label: "Flash sale: Save 50% on electronics today!",
                  onClick: () => console.log('click'),
                  type: 'notification',
                },
                {
                  label: "Limited-time offer: 25% off on all clothing items",
                  onClick: () => console.log('click'),
                  type: 'notification',
                },
                {
                  label: "Customer review: ★★★★★ Fantastic product!",
                  onClick: () => console.log('click'),
                  type: 'notification',
                },
                {
                  label: "Registration alert: Mia just joined the community",
                  onClick: () => console.log('click'),
                  type: 'registration',
                },
                {
                  label: "Sold: Liam's rare comic book has a new owner",
                  onClick: () => console.log('click'),
                  type: 'sold',
                },
                {
                  label: "Notification: Explore our latest tech gadgets and deals",
                  onClick: () => console.log('click'),
                  type: 'notification',
                },
                {
                  label: "Limited stock alert: Hurry, don't miss out on these hot deals!",
                  onClick: () => console.log('click'),
                  type: 'notification',
                },
                {
                  label: "New arrivals: Stylish fashion collection now available",
                  onClick: () => console.log('click'),
                  type: 'notification',
                },
              ]              
            }
          />
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
