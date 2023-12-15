"use client";

import React, { useCallback, useState } from "react";
import { Modal } from "../../modals/Modal";
import { useManageUserModal } from "@/app/hooks/useManageUserModal";
import { SimpleLineChart } from "../../Charts/SimpleLineChart";
import { SimpleLineChartComponent } from "../ChartComponents/SimpleLineChartComponent";
import { SessionsData } from "@/app/constants";
import { SimpleAreaChartComponent } from "../ChartComponents/SimpleAreaChartComponent";
import LinearChart from "../../Charts/LinearChart";

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
    { day: "12/19", orders: 0 },
  ];
  const body = (
    <div className="">
      <div className="flex flex-col">
        <h1 className="font-medium text-[18px]">User's orders</h1>
        <div className="w-full h-[238px]">
          <LinearChart
            XAxisKey={"day"}
            data={weeklyordersData}
            valueKey="orders"
            yAxis={false}
          />
        </div>
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
