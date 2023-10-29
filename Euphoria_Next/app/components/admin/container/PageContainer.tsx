"use client";

import React, { useMemo, useState } from "react";
import { Sidebar } from "../sidebar/Sidebar";
import { motion, useAnimation } from "framer-motion";
import { extraLargeScreens, smallScreens } from "@/app/Screens/Screens";
import useMediaQuery from "@/app/hooks/UseMediaQuery";
import { Modal } from "../../modals/Modal";
import { PublicSans } from "../../assets/Fonts";
import { CouponModal } from "../modals/CouponModal";
import { AddProductModal } from "../modals/AddProductModal";

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const isAboveSmallScreens = useMediaQuery(smallScreens);
  const isAboveLargeScreens = useMediaQuery(extraLargeScreens);
  const controls = useAnimation();


  const sidebarVariants = useMemo(() => {
    return {
      open: { width: "20%" },
      closed: { width: "fit-content" },
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
    controls.start(isSidebarOpen ? "closed" : "open");
  };
 
  return (
    <div
      className={` ${PublicSans.className} flex gap-[26px] w-full  justify-between`}
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
        className="bg-[#FAFAFA] pl-[20px] flex-grow pr-[26px]"
      >
        {children}
      </motion.div>
    </div>
  );
};
