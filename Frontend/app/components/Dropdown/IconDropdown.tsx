"use client";
import React, { useState, useEffect, useRef } from "react";

interface Props {
  svg: React.ReactNode;
  content: {
    label: string;
    onClick: () => void;
  }[];
}

export const IconDropdown = ({ svg, content }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const DropdownRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        if(isOpen){
            console.log('open');
            
            const handleOutsideClick = (e:MouseEvent) =>{
                if(DropdownRef.current && !DropdownRef.current.contains(e.target as Node)){
                    setIsOpen(false)
                }
            }
            window.addEventListener('click',handleOutsideClick)
            return () => window.removeEventListener('click',handleOutsideClick)
        }
    },[isOpen])

  return (
    <div className="relative" ref={DropdownRef}>
      <div
        className="select-none cursor-pointer"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        {svg}
      </div>
      {isOpen && (
        <div className="py-[10px] px-[20px] bg-white rounded-[7px] absolute -right-[20px] flex flex-col gap-[5px]">
          {content.map((cont) => (
            <div className="text-black text-[14px] min-w-[90px] text-left" onClick={cont.onClick} key={cont.label}>
              {cont.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
