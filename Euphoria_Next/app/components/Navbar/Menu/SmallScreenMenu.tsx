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
      className={`fixed pt-[130px] w-full bg-black transition-transform duration-300 z-[78] text-white pb-[20px] top-0
          ${isOpen ? "-translate-y-0" : "-translate-y-[140%] "}`}
    >
        <Container>
            <div className="flex">
                <SearchInput onChange={()=>{}} value="" placeholder='Type something...'/>
                <GrayButton label="Find" onClick={()=>{}}/>
            </div>
            <div className="pt-[20px]">
              <SmallScreenNavLinks/>
            </div>
        </Container>
    </div>
  );
};
