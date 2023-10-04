"use client";

import React, { useState } from "react";
import { Sidebar } from "../sidebar/Sidebar";
import { motion, useAnimation } from "framer-motion";
export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const controls = useAnimation();

  const sidebarVariants = {
    open: { width: "20%" },
    closed: { width: "fit-content" },
  };
  const bodyVariants = {
    open: { width: "80%" },
    closed: { width: "85%" },
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
    controls.start(isSidebarOpen ? "closed" : "open");
  };

  return (
    <div className="flex gap-[26px] w-full pr-[26px]">
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
      <motion.div
        initial="closed"
        animate={controls}
        variants={bodyVariants}
        exit={{ width: "15%" }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
