"use client";

import React, { useState } from "react";
import { Container } from "../Container";
import { Logo } from "../assets/Logo";
import { BigScreenNavLinks } from "./BigScreen/BigScreenNavLinks";
import { Menu } from "./Menu/Menu";
import useMediaQuery from "@/app/hooks/UseMediaQuery";
import { HamburgerIcon } from "@/public/Svg/Icons";
import { SmallScreenMenu } from "./Menu/SmallScreenMenu";
import Link from "next/link";
import { largeScreens } from "@/app/Screens/Screens";

export const Navbar = () => {
  const isAboveLargeScreens = useMediaQuery(largeScreens)
  const [menuToggle,setMenuToggle] = useState<boolean>(false)
  const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-white transition ease transform duration-300`;
  return (
    <React.Fragment>

      <nav className="relative  w-full">
        <div className="fixed top-0 w-full bg-black py-[36px] z-[99] ">

          <Container>
            <div className="flex justify-between items-center">
              {
                !isAboveLargeScreens && 
                <HamburgerIcon menuToggle={menuToggle} setMenuToggle={setMenuToggle}/>
              }
              <Link href={'/'} className="md:w-[90px] w-[65px]  md:h-[40px] h-[27px]">
                    <Logo/>
              </Link>
              {
                isAboveLargeScreens &&
                
                <BigScreenNavLinks/>
              }
              <Menu/>
            </div>
         </Container>
        </div>

      {
        !isAboveLargeScreens  &&(
         <SmallScreenMenu isOpen={menuToggle}/>
        )
      }
      </nav>
  </React.Fragment>
  );
};
