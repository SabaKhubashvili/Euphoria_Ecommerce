"use client";

import React, { useMemo, useState } from "react";
import { MainTable } from "../../tables/MainTable";
import { customers } from "@/app/constants";
import { Icon } from "../../Icon";
import { WebsiteIcons } from "@/public/Svg/IconsObject";
import { SecondaryInput } from "../../Inputs/SecondaryInput";
import { MainDropdown } from "../../Dropdown/MainDropdown";
import { Pagination } from "../../Pagination";
import { useAllCustomersPagination } from "@/app/hooks/UseAllCustomersPagination";
import { toast } from "react-toastify";

export const CustomersTable = () => {
  const [findUserName, setFindUserName] = useState<string>("");
  const [filteredCustomers, setFilteredCustomers] = useState<
    typeof customers | undefined
  >(undefined);
  const {
    nextPage,
    prevPage,
    manualPage,
    currentPage,
    customersPerPage,
    setCustomersPerPage,
  } = useAllCustomersPagination();

  const CustomersOnPage: typeof customers = useMemo(() => {
    const startIndex = (currentPage - 1) * customersPerPage;
    const endIndex = currentPage * customersPerPage;
    let returningCustomers = customers.slice(startIndex, endIndex);
    return returningCustomers;
  }, [currentPage, customersPerPage]);

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

  const searchForCustomer = (e: React.FormEvent) => {
    e.preventDefault();    
    const filtered = customers.filter(
      (customer) => customer.name.toLowerCase().includes(findUserName.toLowerCase())
    );
    if(filtered.length <= 0){
      toast.error('No customer was found', {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }else{
      setFilteredCustomers(filtered);
    }
  };

  const changeCustomersOnPage = (number: 10 | 20 | 30 | 40 | 50) => {
    setCustomersPerPage(number);
  };

  return (
    <div className="pt-[44px]">
      <div className="flex gap-[10px]">
        <div className="w-[204px]">
          <SecondaryInput
            placeholder="Search by user name"
            type="secondary"
            rightSvg={<Icon svg={WebsiteIcons["Search"]} />}
            onChange={(e) => setFindUserName(e.target.value)}
            value={findUserName}
            onSubmit={searchForCustomer}
          />
        </div>
        <div
          className="cursor-pointer bg-purple text-white px-[10px] py-[8px] rounded-[6px]"
          onClick={() => setFilteredCustomers(undefined)}
        >
          Reset
        </div>
      </div>
      <div className="mt-[25.5px] bg-white">
        <div className="h-[650px] ">
          <MainTable
            bodyContent={filteredCustomers && filteredCustomers.length > 0 ? filteredCustomers :  CustomersOnPage}
            topContent={["Name", "Email", "Phone Number", "Created", "Action"]}
            type="primary"
            notFoundMessage="No customer was found"
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
                { label: "10", onClick: () => changeCustomersOnPage(10) },
                { label: "20", onClick: () => changeCustomersOnPage(20) },
                { label: "30", onClick: () => changeCustomersOnPage(30) },
                { label: "40", onClick: () => changeCustomersOnPage(40) },
                { label: "50", onClick: () => changeCustomersOnPage(50) },
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
              productsLength={filteredCustomers?.length || customers.length}
              type="secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
