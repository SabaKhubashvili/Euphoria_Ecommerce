"use client";

import React, { useMemo, useState } from "react";
import { MainTable } from "../../tables/MainTable";
import { SecondaryInput } from "../../Inputs/SecondaryInput";
import { MainDropdown } from "../../Dropdown/MainDropdown";
import { Pagination } from "../../Pagination";
import { useAdminProductsCategoriesPagination } from "@/app/hooks/useAdminProductsPagination";
import { categoryData } from "@/app/constants";

export const CategoriesTable = () => {
  const [addCategory, setAddCategory] = useState<string>("");
  const {
    nextPage,
    prevPage,
    manualPage,
    currentPage,
    categoriesPerPage,
    setCategoriesPerPage,
  } = useAdminProductsCategoriesPagination();

  const categoriesOnPage: typeof categoryData = useMemo(() => {
    const startIndex = (currentPage - 1) * categoriesPerPage;
    const endIndex = currentPage * categoriesPerPage;
    let returningCustomers = categoryData.slice(startIndex, endIndex);
    return returningCustomers;
  }, [currentPage, categoriesPerPage]);

  const actions = () => {
    return (
      <div
        style={{
          flexBasis: 100 / (Object.keys(categoryData[0]).length + 1) + "%",
        }}
        className="flex justify-start text-blue-600 uppercase tracking-[0.01px] font-bold cursor-pointer"
      >
        See products
      </div>
    );
  };

  const changeCategoriesPerPage = (number: 10 | 20 | 30 | 40 | 50) => {
    setCategoriesPerPage(number);
  };

  return (
    <div className="pt-[44px]">
      <div className="flex gap-[10px]">
        <div className="w-full">
          <SecondaryInput
            placeholder="Add category"
            type="secondary"
            onChange={(e) => setAddCategory(e.target.value)}
            value={addCategory}
          />
        </div>
        <div
          className="cursor-pointer bg-purple text-white px-[10px] py-[8px] rounded-[6px]"
          onClick={() => {}}
        >
          Add
        </div>
      </div>
      <div className="mt-[25.5px] bg-white">
        <div className="h-[650px] ">
          <MainTable
            bodyContent={categoriesOnPage}
            topContent={[
              "Category",
              "Products in this category",
              "Overal sales",
              "Profit",
            ]}
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
              label={`${categoriesPerPage}`}
              content={[
                { label: "10", onClick: () => changeCategoriesPerPage(10) },
                { label: "20", onClick: () => changeCategoriesPerPage(20) },
                { label: "30", onClick: () => changeCategoriesPerPage(30) },
                { label: "40", onClick: () => changeCategoriesPerPage(40) },
                { label: "50", onClick: () => changeCategoriesPerPage(50) },
              ]}
            />
            <span>of 50</span>
          </div>
          <div>
            <Pagination
              currentPage={currentPage}
              nextPage={nextPage}
              productPerPage={categoriesPerPage}
              manualPage={manualPage}
              previousPage={prevPage}
              productsLength={categoryData.length}
              type="secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
