"use client";

import React, { useState } from "react";
import { BigScreenNavLink } from "./BigScreenNavLink";
import { SecondaryInput } from "../../Inputs/SecondaryInput";
import { motion } from "framer-motion";
export const BigScreenNavLinks = () => {
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  return (
    <div className="">

    <div className="flex gap-[29px] items-center w-fit">
      <BigScreenNavLink label="Home" to="/" />
      <BigScreenNavLink label="Shop" to="/shop" />
      <BigScreenNavLink label="Sale" to="/sale" />
      <BigScreenNavLink label="Contact us" to="/contact" />
      {/* <BigScreenNavLink
            label='Search'
            to='/search'
          /> */}
      <div className="flex gap-[6px] items-center">
        <motion.input
          className="bg-transparent border-[1px] border-white h-[100%] p-2 rounded-[7px] py-[2px] px-[20px] text-white"
          placeholder="...Search"
          initial={{ width: 0, left: "100%" }}
          animate={{ width: "100%" }}
          exit={{ width: 0}}
          transition={{ duration: 0.5 }}
          />
      </div>
    </div>
          </div>
  );
};
