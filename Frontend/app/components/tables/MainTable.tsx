'use client'

import { Dropdown_Down } from "@/public/Svg/Icons";
import React from "react";


interface Props {
  type: "primary" | "secondary";
  topContent: any;
  bodyContent: any;
}

export const MainTable = ({ type, topContent, bodyContent }: Props) => {


  const HeaderCell = ({ text }: { text: string }) => (
    <h1 className={`text-secondaryGray uppercase font-medium md:text-[16px] text-[13px] 
    `}
      style={{ flexBasis: 100 / topContent.length + '%' }}
    >
      {text}
    </h1>
  );

  const RowCell = ({ text }: { text: string }) => (
    <h1 className={`text-black  font-medium xl:text-[16px] text-[13px] py-[18px]
    ${type === 'primary' && 'border-b-[1px] border-solid border-[#E9E7FD]'}
    `}
      style={{ flexBasis: 100 / Object.keys(bodyContent[0]).length + '%' }}>
      {text}
    </h1>
  );
  const StatusRowCell = ({ text }: { text: "Pending" | "Delivered" }) => (
    <h1
      className={`text-black  font-medium xl:text-[16px] text-[13px] ${text === "Pending" ? "text-yellow-500" : "text-green"
        }`}
      style={{ flexBasis: 100 / topContent.length + '%' }}
    >
      {text}
    </h1>
  );


  return (
    <div className="flex flex-col  w-full xl:p-[24px] p-[12px] overflow-x-auto h-full">
      <div
        className={`flex items-center w-full py-[8px] px-[20px] border-b-[1px] border-[#DBDADE] border-solid
    ${type === "primary" ? "" : type === "secondary" ? "bg-[#F8F9FA]" : ""}
    `}
      >
        {topContent.map((cont: string, index: number) => (
          <HeaderCell text={cont} key={index} />
        ))}
      </div>
      <div className={`flex flex-col h-full overflow-y-auto w-full`}>
        {bodyContent.map((cont: any, index: number) => (
          <div key={index} className="flex  items-center py-[8px] px-[20px] ">
            <RowCell text={'#' + cont.id.toString()} />
            <RowCell text={cont.created_at} />
            <RowCell text={cont.customer} />
            <RowCell text={'$' + cont.total_price} />
            <RowCell text={'$' + cont.profit} />
            <StatusRowCell text={cont.status} />
            <div style={{ flexBasis: 100 / Object.keys(cont).length + '%' }} className="flex justify-end" >
              <Dropdown_Down />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
