"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { SecondaryInput } from "../../Inputs/SecondaryInput";
import { Icon } from "../../Icon";
import { WebsiteIcons } from "@/public/Svg/IconsObject";
import { MainDropdown } from "../../Dropdown/MainDropdown";
import { MainTable } from "../../tables/MainTable";
import { orders } from "@/app/constants";
import { Pagination } from "../../Pagination";
import { useAdminOrdersPagination } from "@/app/hooks/UseAdminOrdersPagination";
import { ordersInterface } from "@/app/types";
import { Dropdown_Down } from "@/public/Svg/Icons";
import { toast } from "react-toastify";

enum Variations {
  All = 0,
  Pending = 1,
  Confirmed = 2,
  Delivered = 3,
}

export const OrderManagmentVariations = () => {
  const [activeVariation, setActiveVariation] = useState<Variations>(
    Variations.All
  );
  const underlineRef = useRef<HTMLDivElement>(null);
  const {
    nextPage,
    prevPage,
    manualPage,
    currentPage,
    ordersPerPage,
    setOrdersPerPage,
  } = useAdminOrdersPagination();
  const [orderId, setOrderId] = useState<string>("");
  const [filteredOrders, setFilteredOrders] = useState<ordersInterface[]>();

  useEffect(() => {
    const updateActiveELement = () => {
      if (underlineRef.current) {
        const activeElement = document.querySelector(
          ".activeTableVariationOrders"
        ) as HTMLDivElement;

        underlineRef.current.style.left = activeElement.offsetLeft + "px";
        underlineRef.current.style.width = activeElement.offsetWidth + "px";
      }
    };
    updateActiveELement();
    document.addEventListener("resize", updateActiveELement);
    return () => document.removeEventListener("resize", updateActiveELement);
  }, [activeVariation]);

  const ordersOnPage: ordersInterface[] = useMemo(() => {
    const startIndex = (currentPage - 1) * ordersPerPage;
    const endIndex = currentPage * ordersPerPage;
    let returningOrders = orders.slice(startIndex, endIndex);

    if (activeVariation === Variations.Confirmed) {
      returningOrders = returningOrders.filter(
        (order) => order.status === "Confirmed"
      );
    } else if (activeVariation === Variations.Delivered) {
      returningOrders = returningOrders.filter(
        (order) => order.status === "Delivered"
      );
    } else if (activeVariation === Variations.Pending) {
      returningOrders = returningOrders.filter(
        (order) => order.status === "Pending"
      );
    }
    return returningOrders;
  }, [currentPage, ordersPerPage, activeVariation]);

  const ordersLength = useMemo(() => {
    if (activeVariation === Variations.Confirmed) {
      return orders.filter((order) => order.status === "Confirmed").length;
    } else if (activeVariation === Variations.Delivered) {
      return orders.filter((order) => order.status === "Delivered").length;
    } else if (activeVariation === Variations.Pending) {
      return orders.filter((order) => order.status === "Pending").length;
    } else {
      return orders.length;
    }
  }, [activeVariation]);

  const searchForOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveVariation(Variations.All);
    const filtered = orders.filter((order) => order.id.toString() === orderId);
    if (filtered.length <= 0) {
      toast.error("No order was found", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setFilteredOrders(filtered);
    }
  };

  const actions = () => {
    return (
      <div
        style={{
          flexBasis: 100 / (Object.keys(ordersOnPage[0]).length + 1) + "%",
        }}
        className="flex justify-end"
      >
        <Dropdown_Down />
      </div>
    );
  };

  const changeCustomersOnPage = (number: 10 | 20 | 30 | 40 | 50) => {
    number;
    manualPage(0);
  };

  return (
    <React.Fragment>
      <div className="flex items-center border-b-[1px] border-b-[#DBDADE] relative ">
        <div
          className="h-[2px] bg-purple absolute bottom-0 transition-all duration-200"
          ref={underlineRef}
        />
        {/* Underline */}
        <div
          className={`py-[8px] px-[20px] text-[15px] leading-[22px] cursor-pointer ${
            activeVariation === Variations.All
              ? "text-purple activeTableVariationOrders"
              : "text-secondaryGray"
          }`}
          onClick={() => {
            setFilteredOrders(undefined);
            setOrderId("");
            manualPage(1);
            setActiveVariation(Variations.All);
          }}
        >
          All
        </div>
        <div
          className={`py-[8px] px-[20px] text-[15px] leading-[22px] cursor-pointer ${
            activeVariation === Variations.Pending
              ? "text-purple activeTableVariationOrders"
              : "text-secondaryGray"
          }`}
          onClick={() => {
            setFilteredOrders(undefined);
            setOrderId("");
            manualPage(1);
            setActiveVariation(Variations.Pending);
          }}
        >
          Pending
        </div>
        <div
          className={`py-[8px] px-[20px] text-[15px] leading-[22px] cursor-pointer ${
            activeVariation === Variations.Confirmed
              ? "text-purple activeTableVariationOrders"
              : "text-secondaryGray"
          }`}
          onClick={() => {
            setFilteredOrders(undefined);
            setOrderId("");
            manualPage(1);
            setActiveVariation(Variations.Confirmed);
          }}
        >
          Confirmed
        </div>
        <div
          className={`py-[8px] px-[20px] text-[15px] leading-[22px] cursor-pointer ${
            activeVariation === Variations.Delivered
              ? "text-purple activeTableVariationOrders"
              : "text-secondaryGray"
          }`}
          onClick={() => {
            setFilteredOrders(undefined);
            setOrderId("");
            manualPage(1);
            setActiveVariation(Variations.Delivered);
          }}
        >
          Delivered
        </div>
      </div>
      <div className=" pt-[24px] flex justify-between items-center">
        <div className="flex gap-[10px] items-center">
          <div className="w-[204px]">
            <SecondaryInput
              placeholder="Search by order id"
              type="secondary"
              rightSvg={<Icon svg={WebsiteIcons["Search"]} />}
              onChange={(e) => setOrderId(e.target.value)}
              value={orderId}
              onSubmit={searchForOrder}
            />
          </div>
          <div
            className="cursor-pointer bg-purple text-white px-[10px] py-[8px] rounded-[6px]"
            onClick={() => setFilteredOrders(undefined)}
          >
            Reset
          </div>
        </div>
        {/* <MainDropdown
          content={[
            { label: "16", onClick: () => console.log("smt") },
            { label: "32", onClick: () => console.log("smt") },
            { label: "48", onClick: () => console.log("smt") },
            { label: "64", onClick: () => console.log("smt") },
          ]}
          type="secondary"
          size="xs"
          label="Filter by date range"
        /> */}
      </div>
      <div className="bg-white">
        <div className="h-[600px] mt-[16px]">
          <MainTable
            bodyContent={filteredOrders || ordersOnPage}
            topContent={[
              "Order id",
              "created",
              "customer",
              "total",
              "profit",
              "status",
              " ",
            ]}
            type="primary"
            notFoundMessage="No order was found"
            actions={actions}
          />
        </div>
        <div className="w-full flex justify-between items-center px-[24px]">
          <div className="flex items-center gap-[10px] text-secondaryGray">
            <span>Showing</span>
            <MainDropdown
              type="primary"
              size="xs"
              label={`${ordersPerPage}`}
              content={[
                { label: "10", onClick: () => setOrdersPerPage(10) },
                { label: "20", onClick: () => setOrdersPerPage(20) },
                { label: "30", onClick: () => setOrdersPerPage(30) },
                { label: "40", onClick: () => setOrdersPerPage(40) },
                { label: "50", onClick: () => setOrdersPerPage(50) },
              ]}
            />
            <span>of 50</span>
          </div>
          <div>
            <Pagination
              currentPage={currentPage}
              nextPage={nextPage}
              productPerPage={ordersPerPage}
              manualPage={manualPage}
              previousPage={prevPage}
              productsLength={filteredOrders?.length || ordersLength}
              type="secondary"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
