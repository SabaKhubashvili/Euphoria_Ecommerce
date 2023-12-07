"use client";
import { useCouponModal } from "@/app/hooks/UseCouponModal";
import React, { useState } from "react";
import { Icon } from "../../Icon";
import { WebsiteIcons } from "@/public/Svg/IconsObject";
import { MainTable } from "../../tables/MainTable";
import { coupon_codes } from "@/app/constants";
import { SecondaryInput } from "../../Inputs/SecondaryInput";
import { Modal } from "../../modals/Modal";
import RestClient from "@/app/RestClient/RequestTypes";
import BaseUrl from "@/app/RestClient/ApiUrls";
import { getCookie } from "cookies-next";
import { toast } from "react-toastify";
import { useQuery } from "react-query";
import { useGetAllCoupons } from "@/app/actions/getAllCoupons";

export const CouponModal = () => {
  const token = getCookie("accessToken");
  const [isLoading, setIsLoading] = useState(false);
  const { data: couponData,refetch } = useGetAllCoupons(token || "");
  const { isOpen: isCouponModalOpen, onClose: couponModalOnclose } =
    useCouponModal();
  const [addCouponOpen, setAddCouponOpen] = useState<boolean>(false);
  const [newCoupon, setNewCoupon] = useState({
    coupon: "",
    percentage: "",
  });

  const addCoupon = () => {
    if(!isLoading){
      setIsLoading(true)
    
    if (JSON.parse(newCoupon.percentage) > 100) {
      return toast.error("Enter less than 100", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    RestClient.putRequest(
      BaseUrl.addCoupon,
      { ...newCoupon, percentage: newCoupon.percentage },
      token
    )
      .then((res) => {
        toast.success(res.data.message, {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setNewCoupon({
          coupon: "",
          percentage: "",
        });
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }).finally(()=>{
        setIsLoading(false);
        refetch()
      });
    }
  };

  const deleteCoupon = (id: string) => {
    if (!isLoading) {
      setIsLoading(true);
      RestClient.deleteRequest(BaseUrl.deleteCoupon + `/${id}`, token)
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        })
        .finally(() => {
          setIsLoading(false);
          refetch()
        });
    }
  };

  const couponActions = (id?: string) => {
    return (
      <div className="cursor-pointer select-none  propagat" onClick={(e) =>{
        e.stopPropagation()
        id && deleteCoupon(id)}
        }>
        <Icon svg={WebsiteIcons["delete"]} />
      </div>
    );
  };

  const couponModalBody = (
    <div className="md:h-[400px] h-full">
      <MainTable
        topContent={["Coupon", "Percentage"]}
        actions={(id?: string) => couponActions(id)}
        bodyContent={couponData}
        type="secondary"
      />
    </div>
  );
  const couponModalFooter = (
    <div className="">
      {addCouponOpen && (
        <div className={`flex gap-[15px] items-center`}>
          <div className="flex items-center gap-[10px] w-full">
            <SecondaryInput
              placeholder="Code"
              type="third"
              value={newCoupon.coupon}
              onChange={(e) => {
                setNewCoupon((prev) => ({ ...prev, coupon: e.target.value }));
              }}
            />
            <input
              type="number"
              value={newCoupon.percentage}
              onChange={(e) => {
                setNewCoupon((prev) => ({
                  ...prev,
                  percentage: e.target.value,
                }));
              }}
              max={100}
              min={0}
              placeholder="percentage"
              className=" outline-none border-[1px] border-solid border-gray px-[16px] py-[8px] w-full"
            />
          </div>
          <div
            onClick={addCoupon}
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
