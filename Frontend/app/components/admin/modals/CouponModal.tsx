"use client";
import { useCouponModal } from "@/app/hooks/UseCouponModal";
import React, { useState } from "react";
import { Icon } from "../../Icon";
import { WebsiteIcons } from "@/public/Svg/IconsObject";
import { MainTable } from "../../tables/MainTable";
import { coupon_codes } from "@/app/constants";
import { SecondaryInput } from "../../Inputs/SecondaryInput";
import { Modal } from "../../modals/Modal";

export const CouponModal = () => {
  const { isOpen: isCouponModalOpen, onClose: couponModalOnclose } =
    useCouponModal();
  const [addCouponOpen, setAddCouponOpen] = useState<boolean>(false);

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
          <div
            className="bg-black  h-full text-white  w-full
               border-[1px] text-center text-[14px] font-medium py-[10px] cursor-pointer select-none rounded-[4px]"
          >
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
    <Modal
      title={"Coupons"}
      body={couponModalBody}
      isOpen={isCouponModalOpen}
      onClose={couponModalOnclose}
      footer={couponModalFooter}
    />
  );
};
