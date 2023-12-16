"use client";

//* ------------------------> React
import React, { useMemo, useState } from "react";
import { toast } from "react-toastify";

//* -----------------------------> Hooks
import { useAllCustomersPagination } from "@/app/hooks/UseAllCustomersPagination";
import { useManageUserModal } from "@/app/hooks/useManageUserModal";

//* ---------------------------------> Components
import { MainTable } from "@/app/components/tables/MainTable";
import { Icon } from "@/app/components/Icon";
import { SecondaryInput } from "@/app/components/Inputs/SecondaryInput";
import { MainDropdown } from "@/app/components/Dropdown/MainDropdown";
import { Pagination } from "@/app/components/Pagination";

//* ------------------------------> TS
import { customerInterface } from "@/app/types";

//* ------------------------------> Assets 
import { WebsiteIcons } from "@/public/Svg/IconsObject";

interface Props{
  data:customerInterface[]
}

export const CustomersTable = ({data}:Props) => {
  //* -----------------------------> Hooks
  const {onOpen:userModalOnOpen,setUser} = useManageUserModal()
  const {
    nextPage,
    prevPage,
    manualPage,
    currentPage,
    customersPerPage,
    setCustomersPerPage,
  } = useAllCustomersPagination();

//* -----------------------------> States
  const [findUserName, setFindUserName] = useState<string>("");
  const [dataForTable,setDataForTable] = useState<customerInterface[]>(
    data.map(customer=>({
      _id:customer._id,
      firstname:customer.firstname,
      lastname:customer.lastname,
      email:customer.email,
    }))
  )
  const [filtereddataForTable, setFiltereddataForTable] = useState<
    typeof dataForTable | undefined
  >(undefined);
    
  //* -----------------------------> Functions
  const openUserModal = (id?:string) =>{
    const user = dataForTable.find(user=>user._id === id);

    if(user){
      setUser(user)
      userModalOnOpen()
    }
  } 

  const dataForTableOnPage: typeof dataForTable = useMemo(() => {
    const startIndex = (currentPage - 1) * customersPerPage;
    const endIndex = currentPage * customersPerPage;
    let returningdataForTable = dataForTable.slice(startIndex, endIndex);
    return returningdataForTable;
  }, [currentPage, customersPerPage]);

  const searchForCustomer = (e: React.FormEvent) => {
    e.preventDefault();    
    const filtered = dataForTable.filter(
      (customer) => customer.firstname.toLowerCase().includes(findUserName.toLowerCase())
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
      setFiltereddataForTable(filtered);
    }
  };

  const changedataForTableOnPage = (number: 10 | 20 | 30 | 40 | 50) => {
    setCustomersPerPage(number);
  };

  //* -----------------------------> JSX
  const actions = (id?:string)=>{
    return(   
    <div
      style={{
        flexBasis: 100 / (Object.keys(dataForTable[0]).length + 1) + "%",
      }}
      className="flex justify-start"
    >
      <Icon svg={WebsiteIcons["edit"]} className="!w-fit h-fit cursor-pointer" onClick={()=>openUserModal(id)} />
      <Icon svg={WebsiteIcons["delete"]} className="!w-fit h-fit" />
      {/* <span className=" cursor-pointer select-none pl-[10px] text-purple">Make admin</span> */}
    </div>)
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
          onClick={() => setFiltereddataForTable(undefined)}
        >
          Reset
        </div>
      </div>
      <div className="mt-[25.5px] bg-white">
        <div className="h-[650px] ">
          <MainTable
            bodyContent={filtereddataForTable && filtereddataForTable.length > 0 ? filtereddataForTable :  dataForTableOnPage}
            topContent={["Id", "Firstname", "Lastname", "email", "Action"]}
            type="primary"
            notFoundMessage="No customer was found"
            actions={(id?:string)=>actions(id)}
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
                { label: "10", onClick: () => changedataForTableOnPage(10) },
                { label: "20", onClick: () => changedataForTableOnPage(20) },
                { label: "30", onClick: () => changedataForTableOnPage(30) },
                { label: "40", onClick: () => changedataForTableOnPage(40) },
                { label: "50", onClick: () => changedataForTableOnPage(50) },
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
              productsLength={filtereddataForTable?.length || dataForTable.length}
              type="secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
