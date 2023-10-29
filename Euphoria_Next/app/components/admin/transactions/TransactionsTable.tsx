"use client";

import React, { useMemo, useState } from "react";
import { MainTable } from "../../tables/MainTable";
import { TransactionsData } from "@/app/constants";
import { Icon } from "../../Icon";
import { WebsiteIcons } from "@/public/Svg/IconsObject";
import { SecondaryInput } from "../../Inputs/SecondaryInput";
import { MainDropdown } from "../../Dropdown/MainDropdown";
import { Pagination } from "../../Pagination";
import { toast } from "react-toastify";
import { useAdminTransactionsPagination } from "@/app/hooks/UseAdminTransactionsPagination";

export const TransactionsTable = () => {
  const [findTransaction, setFindTransaction] = useState<string>("");
  const [filteredTransactions, setFilteredCustomers] = useState<
    typeof TransactionsData | undefined
  >(undefined);
  const {
    nextPage,
    prevPage,
    manualPage,
    currentPage,
    transactionsPerPage,
    setTransactionsPerPage,
  } = useAdminTransactionsPagination();

  const TransactionsOnPage: typeof TransactionsData = useMemo(() => {
    const startIndex = (currentPage - 1) * transactionsPerPage;
    const endIndex = currentPage * transactionsPerPage;
    let returningCustomers = TransactionsData.slice(startIndex, endIndex);
    return returningCustomers;
  }, [currentPage, transactionsPerPage]);


  const searchForTransactions = (e: React.FormEvent) => {
    e.preventDefault();
    if(findTransaction.length === 0){
        return null
    }
    const filtered = TransactionsData.filter((transaction) =>
    transaction.id ===  parseInt(findTransaction)
    );
    if (filtered.length <= 0) {
      toast.error("No transaction was found", {
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
      setFilteredCustomers(filtered);
    }
  };

  const changeTransactionsOnPage = (number: 10 | 20 | 30 | 40 | 50) => {
    setTransactionsPerPage(number);
  };

  return (
    <div className="pt-[44px]">
      <div className="flex gap-[10px]">
        <div className="w-[204px]">
          <SecondaryInput
            placeholder="Search by payment id"
            type="secondary"
            rightSvg={<Icon svg={WebsiteIcons["Search"]} />}
            onChange={(e) => setFindTransaction(e.target.value)}
            value={findTransaction}
            onSubmit={searchForTransactions}
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
            bodyContent={
              filteredTransactions && filteredTransactions.length > 0
                ? filteredTransactions
                : TransactionsOnPage
            }
            topContent={["Id", "customer", "date", "total", "method"]}
            type="primary"
            notFoundMessage="No transaction was found"
          />
        </div>
        <div className="w-full flex justify-between items-center px-[24px]">
          <div className="flex items-center gap-[10px] text-secondaryGray">
            <span>Showing</span>
            <MainDropdown
              type="primary"
              size="xs"
              label={`${transactionsPerPage}`}
              content={[
                { label: "10", onClick: () => changeTransactionsOnPage(10) },
                { label: "20", onClick: () => changeTransactionsOnPage(20) },
                { label: "30", onClick: () => changeTransactionsOnPage(30) },
                { label: "40", onClick: () => changeTransactionsOnPage(40) },
                { label: "50", onClick: () => changeTransactionsOnPage(50) },
              ]}
            />
            <span>of 50</span>
          </div>
          <div>
            <Pagination
              currentPage={currentPage}
              nextPage={nextPage}
              productPerPage={transactionsPerPage}
              manualPage={manualPage}
              previousPage={prevPage}
              productsLength={filteredTransactions?.length || TransactionsData.length}
              type="secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
