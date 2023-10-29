"use client";

import React, { useMemo, useState } from "react";
import { Sidebar } from "../sidebar/Sidebar";
import { motion, useAnimation } from "framer-motion";
import { extraLargeScreens, smallScreens } from "@/app/Screens/Screens";
import useMediaQuery from "@/app/hooks/UseMediaQuery";
import { PublicSans } from "../../assets/Fonts";
import { CouponModal } from "../modals/CouponModal";
import { AddProductModal } from "../modals/AddProductModal";
import 'swiper/css'

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const isAboveSmallScreens = useMediaQuery(smallScreens);
  const isAboveLargeScreens = useMediaQuery(extraLargeScreens);
  const controls = useAnimation();


  const sidebarVariants = useMemo(() => {
    return {
      open: { width: "20%" },
      closed: { width: "fit-content"},
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
    controls.start(isSidebarOpen ? "closed" : "open");
  };
 
  return (
    <div
      className={` ${PublicSans.className} flex gap-[26px] w-full 2xl:justify-start justify-between`}
    >
      <CouponModal/>
      <AddProductModal/>
      {isAboveSmallScreens && (
        <motion.div
          initial="closed"
          animate={controls}
          variants={sidebarVariants}
          exit={{ width: "15%" }}
          transition={{ duration: 0.3 }}
          style={{minWidth: isAboveLargeScreens ? '220px' : isSidebarOpen ?  '220px' : ''}}
        >
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={toggleSidebar}
          />
        </motion.div>
      )}
      <motion.div
        initial="closed"
        animate={controls}
        exit={{ width: "15%" }}
        transition={{ duration: 0.3 }}
        className="bg-[#FAFAFA] pl-[20px] flex-grow pr-[26px] max-w-[2268px] w-full"
      >
        {children}
      </motion.div>
    </div>
  );
};
