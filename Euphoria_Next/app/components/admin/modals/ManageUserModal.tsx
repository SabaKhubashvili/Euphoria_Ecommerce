"use client";

import React, { useCallback, useState } from "react";
import { Modal } from "../../modals/Modal";
import { useManageUserModal } from "@/app/hooks/useManageUserModal";
import LinearChart from "../../Charts/LinearChart";
import { MainTable } from "../../tables/MainTable";
import { MainDropdown } from "../../Dropdown/MainDropdown";
import RestClient from "@/app/RestClient/RequestTypes";
import BaseUrl from "@/app/RestClient/ApiUrls";
import { getCookie } from "cookies-next";

export const ManageUserModal = () => {
  const { isOpen, onClose, user } = useManageUserModal();
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = useCallback(() => {
    if (!isLoading) {
      onClose();
    }
  }, [isLoading, onClose]);
  const weeklyordersData = [
    { day: "12/15", orders: 0 },
    { day: "12/16", orders: 0 },
    { day: "12/17", orders: 0 },
    { day: "12/18", orders: 1 },
    { day: "12/19", orders: 5 },
    { day: "12/19", orders: 1 },
  ];
  
  const toggleAdmin = () =>{
    if(user){
      RestClient.postRequest(BaseUrl.toggleAdmin,{id:user._id},getCookie('accessToken'))
      .then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
    }
  }

  const body = (
    <div className="">
      <div className="w-full">
        <MainDropdown
          label="Role"
          content={[
            {
              label: "Admin",
              onClick: toggleAdmin,
            },
            {
              label: "Customer",
              onClick: toggleAdmin,
            },
          ]}
          type="primary"
          styles={{ padding: "0px !important" }}
          full
        />
      </div>
      <div className="flex flex-col mt-[20px]">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-[18px]">User's orders</h1>
          <p>
            Total Orders: <span className=" text-secondary">150</span>
          </p>
        </div>
        <div className="w-full h-[238px]">
          <LinearChart
            XAxisKey={"day"}
            data={weeklyordersData}
            valueKey="orders"
            yAxis={false}
          />
        </div>
      </div>
      <div className="pt-[20px]">
        <h1 className="font-medium text-[18px]">Favorites</h1>
        <MainTable
          topContent={["title", "price"]}
          bodyContent={[
            {
              title: "Shirt",
              price: "10.00",
            },
          ]}
          type={"primary"}
          styles={{ padding: "0px" }}
        />
      </div>
    </div>
  );
  return (
    <Modal
      title="Manage user"
      body={body}
      onClose={handleClose}
      isOpen={isOpen}
    />
  );
};
