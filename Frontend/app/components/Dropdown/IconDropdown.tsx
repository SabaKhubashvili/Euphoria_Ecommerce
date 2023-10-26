"use client";
import React, { useState, useEffect, useRef } from "react";
import { RowProps } from "../admin/pageTop/PageTop";



interface Props {
  svg: React.ReactNode;
  content: {
    label: string;
    onClick: () => void;
    type: 'sold' | 'notification' | 'registration';
  }[];
  Row: React.ComponentType<RowProps>;
}

export const IconDropdown = ({ svg, content,Row }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const DropdownRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        if(isOpen){
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
              <Row type={cont.type} key={cont.label}>
                {cont.label}
              </Row>
          ))}
        </div>
      )}
    </div>
  );
};
