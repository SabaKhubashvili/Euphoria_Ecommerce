"use client";

import React, { useState } from "react";
import { Container } from "../Container";
import { Logo } from "../assets/Logo";
import { BigScreenNavLinks } from "./BigScreen/BigScreenNavLinks";
import { Menu } from "./Menu/Menu";
import useMediaQuery from "@/app/hooks/UseMediaQuery";
import { HamburgerIcon } from "@/public/Svg/Icons";
import { SmallScreenMenu } from "./Menu/SmallScreenMenu";

export const Navbar = () => {
  const isAboveLargeScreens = useMediaQuery('(min-width:1024px)')
  const [menuToggle,setMenuToggle] = useState<boolean>(false)
  const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-white transition ease transform duration-300`;
  return (
    <React.Fragment>

      <nav className="fixed w-full py-[36px] bg-black z-[99] ">
          <Container>
            <div className="flex justify-between items-center">
              {
                !isAboveLargeScreens && 
                <HamburgerIcon menuToggle={menuToggle} setMenuToggle={setMenuToggle}/>
              }
              <div className="md:w-[90px] w-[65px]  md:h-[40px] h-[27px]">
                    <Logo/>
              </div>
              {
                isAboveLargeScreens &&
                
                <BigScreenNavLinks/>
              }
              <Menu/>
            </div>
         </Container>

      </nav>
      {
        !isAboveLargeScreens  &&(
         <SmallScreenMenu isOpen={menuToggle}/>
        )
      }
  </React.Fragment>
  );
};
