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
import { toast } from "react-toastify";

export const ManageUserModal = () => {
  const { isOpen, onClose, user,setUser } = useManageUserModal();
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
  
  const addAdmin = () =>{
    if(user && !isLoading){
      setIsLoading(true)
      RestClient.postRequest(BaseUrl.addAdmin ,{id:user._id},getCookie('accessToken'))
      .then(res=>{
        console.log(res);
        
        setUser({...user,isAdmin:true})
      }).catch(err=>{
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
        setIsLoading(false)
      })
    }
  }
  const removeAdmin = () =>{
    if(user && !isLoading){
      setIsLoading(true)
      RestClient.postRequest(BaseUrl.removeAdmin ,{id:user._id},getCookie('accessToken'))
      .then(res=>{        
        setUser({...user,isAdmin:false})
      }).catch(err=>{
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
        setIsLoading(false)
      })
    }
  }
  

  const body = (
    <div className="">
      <div className="w-full">
        <MainDropdown
          label={user?.isAdmin ? 'Admin' : 'Customer'}
          content={[
            {
              label: "Admin",
              onClick: addAdmin,
            },
            {
              label: "Customer",
              onClick: removeAdmin,
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
