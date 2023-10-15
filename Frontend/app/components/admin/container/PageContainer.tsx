"use client";

import React, { useMemo, useState } from "react";
import { Sidebar } from "../sidebar/Sidebar";
import { motion, useAnimation } from "framer-motion";
import { extraLargeScreens, smallScreens } from "@/app/Screens/Screens";
import useMediaQuery from "@/app/hooks/UseMediaQuery";
import { useCouponModal } from "@/app/hooks/UseCouponModal";
import { Modal } from "../../modals/Modal";
import { PublicSans } from "../../assets/Fonts";
import { MainTable } from "../../tables/MainTable";
import { Icon } from "../../Icon";
import { WebsiteIcons } from "@/public/Svg/IconsObject";
import { coupon_codes } from "@/app/constants";
import { SecondaryInput } from "../../Inputs/SecondaryInput";

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const isAboveSmallScreens = useMediaQuery(smallScreens);
  const isAboveLargeScreens = useMediaQuery(extraLargeScreens);
  const controls = useAnimation();
  const { isOpen: isCouponModalOpen, onClose: couponModalOnclose } =
    useCouponModal();
  const [addCouponOpen, setAddCouponOpen] = useState<boolean>(false);

  const sidebarVariants = useMemo(() => {
    return {
      open: { width: "20%" },
      closed: { width: "fit-content" },
    };
  }, [isSidebarOpen, isAboveLargeScreens]);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
    controls.start(isSidebarOpen ? "closed" : "open");
  };
  const couponActions = (
    <div className="flex gap-[10px]">
      <Icon svg={WebsiteIcons["delete"]} />
      <Icon svg={WebsiteIcons["edit"]} />
    </div>
  );
  const couponModalBody = (
    <div className="md:h-[400px] h-full">
      <MainTable
        topContent={["Coupon", "Percentage"]}
        actions={couponActions}
        bodyContent={coupon_codes}
        type="secondary"
      />
    </div>
  );
  const couponModalFooter = (
    <div className="">
      {addCouponOpen && (
        <div className={`flex gap-[15px] items-center`}>
          <div className="flex items-center gap-[10px] w-full">
          <SecondaryInput placeholder="Code" type="third" />
          <SecondaryInput placeholder="Percentage" type="third" />
          </div>
          <div className="bg-black  h-full text-white  w-full
           border-[1px] text-center text-[14px] font-medium py-[10px] cursor-pointer select-none rounded-[4px]">
            Create
          </div>
        </div>
      )}
      <div
        className="bg-purple text-white text-center text-[14px] font-medium py-[10px] cursor-pointer select-none mt-[16px]"
        onClick={() => {
          setAddCouponOpen((prev) => !prev);
        }}
      >
        {!addCouponOpen ? "Add Coupon" : "Close"}
      </div>
    </div>
  );
  return (
    <div
      className={` ${PublicSans.className} flex gap-[26px] w-full  justify-between`}
    >
      <Modal
        title={"Coupons"}
        body={couponModalBody}
        isOpen={isCouponModalOpen}
        onClose={couponModalOnclose}
        footer={couponModalFooter}
      />
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
