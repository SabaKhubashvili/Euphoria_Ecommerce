"use client";

import { Dropdown_Down } from "@/public/Svg/Icons";
import React from "react";
import { Icon } from "../Icon";
import { WebsiteIcons } from "@/public/Svg/IconsObject";

interface Props {
  type: "primary" | "secondary";
  topContent: any;
  bodyContent: any;
  notFoundMessage?: string;
  actions?: React.ReactNode
}

export const MainTable = ({
  type,
  topContent,
  bodyContent,
  notFoundMessage,
  actions
}: Props) => {
  const HeaderCell = ({ text }: { text: string }) => (
    <h1
      className={`text-secondaryGray uppercase font-medium md:text-[16px] text-[13px] 
    `}
      style={{
        flexBasis: actions
          ? 100 / (Object.keys(bodyContent[0]).length + 1) + "%"
          : 100 / Object.keys(bodyContent[0]).length + "%",
      }}
    >
      {text}
    </h1>
  );

  const RowCell = ({ text }: { text: string }) => (
    <h1
      className={`text-black  font-medium xl:text-[16px] text-[13px] py-[18px]
    `}
      style={{
        flexBasis: actions
          ? 100 / (Object.keys(bodyContent[0]).length + 1) + "%"
          : 100 / Object.keys(bodyContent[0]).length + "%",
      }}
    >
      {text}
    </h1>
  );
  const StatusRowCell = ({
    text,
  }: {
    text: "Pending" | "Delivered" | "Confirmed";
  }) => (
    <h1
      className={`  font-medium xl:text-[16px] text-[13px]  cursor-pointer flex items-center justify-between ${
        type === "primary" && "px-[10px] py-[5px] rounded-[4px]"
      }
      ${
        text === "Pending"
          ? `${
              type === "primary"
                ? "bg-[#ffc60029] text-[#FFC600]"
                : " text-yellow-500 "
            }`
          : text === "Confirmed"
          ? ` ${
              type === "primary"
                ? "text-[#28C76F] bg-[#28c76f29]"
                : "text-green"
            }`
          : type === "primary"
          ? "text-[#33189D] bg-[#33189d29]"
          : "text-[#33189D]"
      }`}
      style={{
        flexBasis: actions
          ? 100 / (Object.keys(bodyContent[0]).length + 1) + "%"
          : 100 / Object.keys(bodyContent[0]).length + "%",
      }}
    >
      {text}
      {type === "primary" && <Dropdown_Down />}
    </h1>
  );

  return (
    <div className="flex flex-col w-full xl:p-[24px] p-[12px] overflow-x-auto h-full">
      <div
        className={`flex items-center w-full py-[8px] px-[20px] border-b-[1px] border-[#DBDADE] border-solid ${
          type === "primary" ? "" : type === "secondary" ? "bg-[#F8F9FA]" : ""
        }`}
      >
        {topContent.map((cont: string, index: number) => (
          <HeaderCell text={cont} key={index} />
        ))}
      </div>
      <div className={`flex flex-col h-full overflow-y-auto w-full`}>
        {bodyContent.length > 0 ? (
          bodyContent.map((cont: any, index: number) => (
            <div
              key={index}
              className={`flex items-center py-[8px] px-[20px]     ${
                type === "primary" &&
                "border-b-[1px] border-solid border-[#E9E7FD]"
              }`}
            >
              {Object.keys(cont).map((key) =>
                cont[key].toString().length > 0 ? (
                  key === "status" ? (
                    <StatusRowCell key={key} text={cont[key]} />
                  ) : (
                    <RowCell key={key} text={cont[key]} />
                  )
                ) : (
                  ""
                )
              )}
              {actions && 

                actions
              }
            </div>
          ))
        ) : (
          <div className="flex flex-col gap-[5px] items-center justify-center text-[18px] font-bold w-full h-full ">
            <div className="w-[30px] h-[30px]">
              <Icon svg={WebsiteIcons["notFound"]} />
            </div>
            {notFoundMessage}
          </div>
        )}
      </div>
    </div>
  );
};
