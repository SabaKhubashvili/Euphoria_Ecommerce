"use client";

import { Dropdown_Down } from "@/public/Svg/Icons";
import React, { useEffect, useState } from "react";
import { Icon } from "../Icon";
import { WebsiteIcons } from "@/public/Svg/IconsObject";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import MainTableRows from "./Rows";
import { productInterface } from "@/app/types";

interface Props {
  type: "primary" | "secondary";
  topContent: string[];
  bodyContent: any;
  notFoundMessage?: string;
  actions?: (id?: string, actions?: any) => React.ReactNode;
  customDropdownBody?: (products: productInterface[]) => React.ReactNode;
  updateStatus?: (id:string)=>void
}

// const dropdownBodyOptions = {
//   closed: {
//     height: "0%",
//     display: "none",
//   },
//   open: {
//     height: "fit-content",
//     display: "flex",
//   },
// };

export const MainTable = ({
  type,
  topContent,
  bodyContent,
  notFoundMessage,
  actions,
  customDropdownBody,
  updateStatus
}: Props) => {
  const [isOpenArr, setIsOpenArr] = useState<boolean[]>(bodyContent.map(() => false));
  // useEffect(()=>{
  //   setIsOpenArr(bodyContent.map(() => false))
  // },bodyContent)

  const renderCells = (cont: any) => {
    return Object.keys(cont).map((key) =>
      cont[key] && typeof cont[key] == "object" ? null : cont[key].toString().length > 0 ? (
        key === "status" ? (<MainTableRows.StatusRowCell onClick={()=>updateStatus && updateStatus(cont._id)} key={key} text={cont[key]} tableData={bodyContent} type={type} />) : 
        (<MainTableRows.RowCell key={key} text={ key.toLowerCase().includes("_id" || "id") ? "#" + cont[key].slice(0, 15) + "..." : cont[key]} tableData={bodyContent}/>)) : null
    );
  };

  return (
    <div className="flex flex-col w-full xl:p-[24px] p-[12px] overflow-x-auto h-full bg-white rounded-[16px]">
      <div
        className={`flex items-center w-full py-[8px] px-[20px] border-b-[1px] border-[#DBDADE] border-solid ${
          type === "primary" ? "" : type === "secondary" ? "bg-[#F8F9FA]" : ""
        }`}
      >
        {topContent.map((cont: string, index: number) => (
          <MainTableRows.HeaderCell text={cont} key={index} tableData={topContent} />
        ))}
      </div>
      <div className={`flex flex-col h-full overflow-y-auto w-full`}>
        {bodyContent.length > 0 ? (
          bodyContent.map((cont: any, index: number) => {
            //* --------------> Full body mapping
            const isOpen = isOpenArr[index]
            const toggleIsOpen = () => {
              setIsOpenArr(prev => {
                const newArr = [...prev];
                newArr[index] = !newArr[index];
                return newArr;
              });
            };
          
            return (
            //* --------------> Cells
              <div className={` ${ type === "primary" && "border-b-[1px] border-solid border-[#E9E7FD]"}`} key={index}>
                <div
                  key={index}
                  className={`flex items-center py-[8px] px-[20px]`}>
                  {renderCells(cont)}
                  {actions && actions(cont._id, { onClick: () => toggleIsOpen() })}
                </div>
                {/* //* --------------> Dropdown Body */}
                {customDropdownBody && cont.products && isOpen &&(
                  <div
                    key="dropdownBody"
                    className="inline"
                  >
                    {customDropdownBody(cont.products)}
                  </div>
                )}
              </div>
            );
          })
        ) : (
         //* --------------> Not Found
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
