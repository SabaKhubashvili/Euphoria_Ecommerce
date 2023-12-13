"use client"

import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { Dropdown_Down } from "@/public/Svg/Icons";

const getCellClasses = (text: string, type: string) => {
    return classNames({
      "bg-[#ffc60029] text-[#FFC600]": type === "primary" && text === "Pending",
      "text-yellow-500": text === "Pending" && type !== "primary",
      "text-[#28C76F] bg-[#28c76f29]": text === "Confirmed" && type === "primary",
      "text-green": text === "Confirmed" && type !== "primary",
      "text-green bg-[#90ee90]" : type === 'primary' && text === 'Paid',
      "text-[#33189D]": type !== "primary" && text !== "Pending",
      "bg-[#b6a9eb] text-[#33189D]": type === "primary" && text === "Delivered",
    });
  };
  
const Dropdown = ({ type }: { type: string }) =>
  type === "primary" && <Dropdown_Down />;

class MainTableRows {
  static HeaderCell = ({
    text,
    length,
  }: {
    text: string;
    length: number;
  }) => (
    <h1
      className={`text-secondaryGray uppercase font-medium md:text-[16px] text-[13px]`}
      style={{ flexBasis: 100 / ((length)) + "%" }}
    >
      {text}
    </h1>
  );

  static StatusRowCell = ({
    text,
    type,
    length,
    onClick,
  }: {
    text: "Pending" | "Delivered" | "Paid" ;
    type: string;
    length: number;
    onClick: (status:"Pending" | "Delivered" | "Paid") => void;
  }) => {
    const ref = useRef<HTMLHeadingElement>(null)
    const [isOpen,setIsOpen] = useState(false)

    useEffect(()=>{
      if(isOpen){

        const handleOutsideClick = (e:MouseEvent) =>{
          if(ref && ref.current && !ref.current.contains(e.target as Node)){
            setIsOpen(false)
          }
        }
        
        window.addEventListener('click',handleOutsideClick)
        return () => window.removeEventListener('click',handleOutsideClick)
      }
    },[isOpen])
    
    return (
      <div className="relative select-none"
      style={{ flexBasis: 100 / length + "%" }}>
        <h1
          onClick={()=>setIsOpen(prev=>!prev)}
          className={`font-medium xl:text-[16px] text-[13px] cursor-pointer flex items-center justify-between rounded-[5px]  !py-[5px] !px-[10px] w-full ${getCellClasses(
            text,
            type
          )}`}
          ref={ref}
          >
          {text}
          {type === "primary" && <Dropdown type={type} />}
        </h1>
        { isOpen &&

            <div className="absolute font-medium xl:text-[16px] text-[13px] top-[35px] flex flex-col gap-[5px] w-full z-[10]">
              {
                text === 'Paid' ? 
                 <div className="bg-[#b6a9eb] text-[#33189D] w-full rounded-[5px]  !py-[5px] !px-[10px] cursor-pointer" onClick={()=>onClick('Delivered')}>
                        Delivered
                 </div>
                 :
                 <div className="text-green bg-[#90ee90] w-full rounded-[5px]  !py-[5px] !px-[10px] cursor-pointer" onClick={()=>onClick('Paid')}>
                  Paid
                </div>
                }
            </div>
        }
      </div>
    );
  };

  static RowCell = ({ text, length }: { text: string; length: number }) => (
    <h1
      className={`text-black font-medium xl:text-[16px] text-[13px] py-[18px]`}
      style={{ flexBasis: 100 / length + "%" }}
    >
      {text}
    </h1>
  );
}

export default MainTableRows;
