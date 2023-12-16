import React, { useState } from "react";
import { getCookie } from "cookies-next";

//* ----------------------------------> JSX
import { Modal } from "../../modals/Modal";
import { MainTable } from "../../tables/MainTable";
import { SecondaryInput } from "../../Inputs/SecondaryInput";
import { useGetAllCategories } from "@/app/actions/getAllCategories";

//* ----------------------------------> Assets
import { Icon } from "../../Icon";
import { useCategoriesModal } from "@/app/hooks/useCategoriesModal";
import { WebsiteIcons } from "@/public/Svg/IconsObject";
import RestClient from "@/app/RestClient/RequestTypes";
import BaseUrl from "@/app/RestClient/ApiUrls";

export const CategoriesModal = () => {
  //* ----------------------------------> Hooks
  const { data: categoryData } = useGetAllCategories(
    getCookie("accessToken") || ""
  );
  const { isOpen, onClose } = useCategoriesModal();

  //* ----------------------------------> States
  const [addCategoryOpen, setAddCategorieOpen] = useState<boolean>(false);

  //* ----------------------------------> Functions
  const deleteCategory = (id?: string) => {
    
    if (id) {
      RestClient.deleteRequest(`${BaseUrl.deleteCategory}/${id}`,getCookie('accessToken'))
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //* ----------------------------------> React.ReactNode
  const categoriesActions = (id?: string) => {
    return (
      <div className="flex justify-end w-full gap-[10px]">
        <Icon svg={WebsiteIcons["delete"]} className="cursor-pointer" onClick={() => deleteCategory(id)} />
        <Icon svg={WebsiteIcons["edit"]} />
      </div>
    );
  };
  const categoryModalBody = (
    <div className="md:h-[400px] h-full">
      <MainTable
        topContent={["Category"]}
        actions={(id?: string) => categoriesActions(id)}
        bodyContent={categoryData}
        type="secondary"
        hasId={false}
      />
    </div>
  );
  const categoryModalFooter = (
    <div className="">
      {addCategoryOpen && (
        <div className={`flex gap-[15px] items-center`}>
          <div className="flex items-center gap-[10px] w-full">
            <SecondaryInput placeholder="name" type="third" />
          </div>
          <div
            className="bg-black  h-full text-white  w-full
                   border-[1px] text-center text-[14px] font-medium py-[10px] cursor-pointer select-none rounded-[4px]"
          >
            Add
          </div>
        </div>
      )}
      <div
        className="bg-purple text-white text-center text-[14px] font-medium py-[10px] cursor-pointer select-none mt-[16px]"
        onClick={() => {
          setAddCategorieOpen((prev) => !prev);
        }}
      >
        {!addCategoryOpen ? "Add Category" : "Close"}
      </div>
    </div>
  );

  return (
    <Modal
      title={"Categories"}
      body={categoryModalBody}
      isOpen={isOpen}
      onClose={onClose}
      footer={categoryModalFooter}
    />
  );
};
