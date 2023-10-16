"use client";
import { UseAddProductModal } from "@/app/hooks/UseAddProductModal";
import React, { useCallback, useMemo, useState } from "react";
import { Modal } from "../../modals/Modal";
import { SecondaryInput } from "../../Inputs/SecondaryInput";
import { WebsiteIcons } from "@/public/Svg/IconsObject";
import { Icon } from "../../Icon";
import { RadioDropdown } from "../../Dropdown/RadioDropdown";
import { Textarea } from "../../Inputs/Textarea";
import { GrayButton } from "../../buttons/GrayButton";
import { MainButton } from "../../buttons/MainButton";

enum STEPS {
  productInformation = 0,
  image = 1,
}

export const AddProductModal = () => {
  const [activeStep, setActiveStep] = useState<STEPS>(STEPS.productInformation);
  const { isOpen, onOpen, onClose } = UseAddProductModal();
  const [avaiableSizes, setAvaiableSizes] = useState({
    xsm: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false,
  });

  const MainButtonCont = useMemo(() => {
    if (activeStep === STEPS.image) {
      return "Add";
    } else {
      return "Next";
    }
  }, [activeStep]);
  const secondaryButtonOnClick = useCallback((e:any) => {
    e.stopPropagation()
    if (activeStep === STEPS.image) {
      setActiveStep((prev) => prev - 1);
    }
  }, [activeStep, STEPS]);
  const mainButtonOnClick = useCallback((e:any) => {
    e.stopPropagation()
    if (activeStep === STEPS.productInformation) {
      setActiveStep(STEPS.image);
    } else {
      console.log("submit");
    }
  }, [activeStep, STEPS]);

  let modalBody = (
    <div className="flex flex-col gap-[10px]">
      <div className="flex justify-between gap-[10px]">
        <SecondaryInput placeholder="Product name" type="third" />
        <SecondaryInput
          placeholder="Price"
          type="third"
          rightSvg={<Icon svg={WebsiteIcons["Price"]} />}
        />
      </div>
      <div className="flex gap-[10px]">
        <RadioDropdown
          label="Choose avaiable sizes"
          type="primary"
          full
          content={[
            {
              label: "xsm",
              onClick: (e) => setAvaiableSizes((prev) => ({ ...prev, xsm: e })),
              checked: avaiableSizes.xsm,
            },
            {
              label: "sm",
              onClick: (e) => setAvaiableSizes((prev) => ({ ...prev, sm: e })),
              checked: avaiableSizes.sm,
            },
            {
              label: "md",
              onClick: (e) => setAvaiableSizes((prev) => ({ ...prev, md: e })),
              checked: avaiableSizes.md,
            },
            {
              label: "lg",
              onClick: (e) => setAvaiableSizes((prev) => ({ ...prev, lg: e })),
              checked: avaiableSizes.lg,
            },
            {
              label: "xl",
              onClick: (e) => setAvaiableSizes((prev) => ({ ...prev, xl: e })),
              checked: avaiableSizes.xl,
            },
            {
              label: "xxl",
              onClick: (e) => setAvaiableSizes((prev) => ({ ...prev, xxl: e })),
              checked: avaiableSizes.xxl,
            },
          ]}
        />
      </div>
      <div className="flex flex-col gap-[5px]">
        <div className="flex justify-between items-center relative">
          <h3 className="font-medium text-[14px]">Enter Description</h3>
          <div className="w-[25px] h-[25px] cursor-pointer peer">
            <Icon svg={WebsiteIcons["Information"]} />
          </div>
          <div className=" hidden peer-hover:inline absolute sm:-right-[10rem] right-[1rem] -top-[4.25rem] bg-black text-white p-2 w-[167px] rounded-sm">
            use <span>/</span> to start from new paragraph
          </div>
        </div>
        <div className="h-[200px]">
          <Textarea />
        </div>
      </div>
    </div>
  );

  const footerContent = (
    <div className="flex gap-[10px]">
      {activeStep !== STEPS.productInformation && (
        <MainButton label={"Previous"} onClick={secondaryButtonOnClick} full />
      )}
      <GrayButton
        small={false}
        label={MainButtonCont}
        onClick={mainButtonOnClick}
        full
      />
    </div>
  );
  return (
    <Modal
      isOpen={isOpen}
      title="Add Product"
      onClose={onClose}
      body={modalBody}
      footer={footerContent}
    />
  );
};
