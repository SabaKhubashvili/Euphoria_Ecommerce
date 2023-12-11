"use client";

import { Dropdown_Down } from "@/public/Svg/Icons";
import React, { useState } from "react";
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
}

const dropdownBodyOptions = {
  closed: {
    height: "0%",
    display: "none",
  },
  open: {
    height: "fit-content",
    display: "flex",
  },
};

export const MainTable = ({
  type,
  topContent,
  bodyContent,
  notFoundMessage,
  actions,
  customDropdownBody,
}: Props) => {
  const [tableData] = useState(bodyContent);
  const controls = useAnimation();

  const renderCells = (cont: any) => {
    return Object.keys(cont).map((key) =>
      cont[key] && typeof cont[key] == "object" ? null : cont[key].toString().length > 0 ? (
        key === "status" ? (<MainTableRows.StatusRowCell key={key} text={cont[key]} tableData={tableData} type={type} />) : 
        (<MainTableRows.RowCell key={key} text={ key.toLowerCase().includes("_id" || "id") ? "#" + cont[key].slice(0, 15) + "..." : cont[key]} tableData={tableData}/>)) : null
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
          <MainTableRows.HeaderCell text={cont} key={index} tableData={tableData} />
        ))}
      </div>
      <div className={`flex flex-col h-full overflow-y-auto w-full`}>
        {bodyContent.length > 0 ? (
          bodyContent.map((cont: any, index: number) => {
            //! Full body mapping
            const [isOpen, setIsOpen] = useState(false);
            const toggleSidebar = () => {
              setIsOpen((prev) => !prev);
              controls.start(isOpen ? "closed" : "open");
            };
            return (
              //! Cells
              <div className={` ${ type === "primary" && "border-b-[1px] border-solid border-[#E9E7FD]"}`} key={index}>
                <div
                  key={index}
                  className={`flex items-center py-[8px] px-[20px]`}>
                  {renderCells(cont)}
                  {actions && actions(cont._id, { onClick: () => toggleSidebar() })}
                </div>
                {/* //! Dropdown Body */}
                {customDropdownBody && cont.products && (
                  <motion.div
                    key="dropdownBody"
                    initial={{ display: "none" }}
                    animate={controls}
                    variants={dropdownBodyOptions}
                    transition={{ duration: 0.1 }}
                    className="inline"
                  >
                    {customDropdownBody(cont.products)}
                  </motion.div>
                )}
              </div>
            );
          })
        ) : (
          //! Not Found
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
