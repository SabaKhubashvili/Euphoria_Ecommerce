"use client";

import React from "react";
import { Container } from "../../Container";
import { SearchInput } from "../../Inputs/SearchInput";
import { GrayButton } from "../../buttons/GrayButton";
import { SmallScreenNavLinks } from "../SmallScreen/SmallScreenNavLinks";

interface Props {
  isOpen: boolean;
}

export const SmallScreenMenu = ({ isOpen }: Props) => {
  return (
    <div
      className={`absolute pt-[130px] w-full bg-black transition-transform duration-300 z-[98] text-white pb-[20px]
          ${isOpen ? "translate-y-0" : "-translate-y-[150%] "}`}
    >
        <Container>
            <div className="flex">
                <SearchInput placeholder='Type something...'/>
                <GrayButton label="Find" onClick={()=>{}}/>
            </div>
            <div className="pt-[20px]">
              <SmallScreenNavLinks/>
            </div>
            
        </Container>
    </div>
  );
};
