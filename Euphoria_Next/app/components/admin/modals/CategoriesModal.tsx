import React, { useState } from "react";
import { Modal } from "../../modals/Modal";
import { useCategoriesModal } from "@/app/hooks/useCategoriesModal";
import { WebsiteIcons } from "@/public/Svg/IconsObject";
import { MainTable } from "../../tables/MainTable";
import { Icon } from "../../Icon";
import { SecondaryInput } from "../../Inputs/SecondaryInput";

const body = <div></div>;

export const CategoriesModal = () => {
  const { isOpen, onClose } = useCategoriesModal();
  const [addCategoryOpen, setAddCategorieOpen] = useState<boolean>(false);
  const categoriesActions = (id?: string) => {
    return (
      <div className="flex justify-end w-full gap-[10px]">
        <Icon svg={WebsiteIcons["delete"]} />
        <Icon svg={WebsiteIcons["edit"]} />
      </div>
    );
  };
  const categoryModalBody = (
    <div className="md:h-[400px] h-full">
      <MainTable
        topContent={["Category"]}
        actions={categoriesActions}
        bodyContent={[
          { name: "Clothing" },
          { name: "Dress" },
          { name: "Another" },
          { name: "Dress" },
          { name: "Another" },
          { name: "Dress" },
          { name: "Another" },
          { name: "Dress" },
          { name: "Another" },
          { name: "Dress" },
          { name: "Another" },
          { name: "Dress" },
          { name: "Another" },
        ]}
        type="secondary"
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
