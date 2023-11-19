"use client";

import React from "react";
import { BigScreenNavLink } from "./BigScreenNavLink";

export const BigScreenNavLinks = () => {
  return (
    <div className="">
      <div className="flex gap-[29px] items-center w-fit">
        <BigScreenNavLink label="Home" to="/" />
        <BigScreenNavLink label="Shop" to="/shop" />
        <BigScreenNavLink label="Sale" to="/sale" />
        <BigScreenNavLink label="Contact us" to="/contact" />
      </div>
    </div>
  );
};
