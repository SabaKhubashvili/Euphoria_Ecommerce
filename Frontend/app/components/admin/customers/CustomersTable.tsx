"use client";

import React, { useState } from "react";
import { MainTable } from "../../tables/MainTable";
import { customers } from "@/app/constants";
import { Icon } from "../../Icon";
import { WebsiteIcons } from "@/public/Svg/IconsObject";
import { SecondaryInput } from "../../Inputs/SecondaryInput";
import { MainDropdown } from "../../Dropdown/MainDropdown";
import { Pagination } from "../../Pagination";
import { useAllCustomersPagination } from "@/app/hooks/UseAllCustomersPagination";

export const CustomersTable = () => {
  const [findUserName, setFindUserName] = useState<string>("");
  const {
    nextPage,
    prevPage,
    manualPage,
    currentPage,
    customersPerPage,
    setCustomersPerPage,
  } = useAllCustomersPagination();
  
  const actions = (
    <div
      style={{
        flexBasis: 100 / (Object.keys(customers[0]).length + 1) + "%",
      }}
      className="flex justify-start"
    >
      <Icon svg={WebsiteIcons["edit"]} />
      <Icon svg={WebsiteIcons["delete"]} />
    </div>
  );

  const searchForOrder = () => {

  };

  return (
    <div className="pt-[44px]">
      <div className="w-[204px]">
        <SecondaryInput
          placeholder="Search by order id"
          type="secondary"
          rightSvg={<Icon svg={WebsiteIcons["Search"]} />}
          onChange={(e) => setFindUserName(e.target.value)}
          value={findUserName}
          onSubmit={searchForOrder}
        />
      </div>
      <div className="mt-[25.5px] bg-white">

        <div className="h-[700px] ">
            <MainTable
            bodyContent={customers}
            topContent={["Name", "Email", "Phone Number", "Created", "Action"]}
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
            label={`${customersPerPage}`}
            content={[
              { label: "10", onClick: () => setCustomersPerPage(10) },
              { label: "20", onClick: () => setCustomersPerPage(20) },
              { label: "30", onClick: () => setCustomersPerPage(30) },
              { label: "40", onClick: () => setCustomersPerPage(40) },
              { label: "50", onClick: () => setCustomersPerPage(50) },
            ]}
            />
          <span>of 50</span>
        </div>
        <div>
          <Pagination
            currentPage={currentPage}
            nextPage={nextPage}
            productPerPage={customersPerPage}
            manualPage={manualPage}
            previousPage={prevPage}
            productsLength={customers.length}
            type="secondary"
            />
        </div>
            </div>
      </div>
    </div>
  );
};
