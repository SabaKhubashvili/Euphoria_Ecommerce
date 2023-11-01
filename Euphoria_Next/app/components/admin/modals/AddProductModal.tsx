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
import { ImageUpload } from "../../Upload/ImageUpload";
import Image from "next/image";
import { Form } from "../../Form/Form";
import { useFormik } from "formik";

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
  const [productImages, setProductImages] = useState<string[]>([]);


  const formik = useFormik(
    {
     validateOnBlur:false,
     validateOnChange:false,
     initialValues:{
      name:'',
      price:'',
      avaiableSizes:{
        xsm: false,
        sm: false,
        md: false,
        lg: false,
        xl: false,
        xxl: false,
      },
      description:'',
      image:'',
     } ,
     validate:(values)=>{
      let errors:any = {}

      if(!values.name){
        errors.name = "Name  is required"
      }
      if(!values.price){
        errors.price = 'Price  is required'
      }
      if(Object.entries(values.avaiableSizes).some(size => size[1] !== false)){
        errors.avaiableSizes = 'Minimum 1 size is required'
      }
      if(values.description.length < 30){
          errors.description = 'Description must be minimum 30 characters'
      }
      return errors;
    },
     onSubmit:()=>{
      if (activeStep === STEPS.productInformation) {
        setActiveStep(STEPS.image);
      } else {
        console.log("submit");
      }
     }
    }
  )
  
  const MainButtonCont = useMemo(() => {
    if (activeStep === STEPS.image) {
      return "Add";
    } else {
      return "Next";
    }
  }, [activeStep]);
  const secondaryButtonOnClick = useCallback(
    (e: any) => {
      e.stopPropagation();
      if (activeStep === STEPS.image) {
        setActiveStep((prev) => prev - 1);
      }
    },
    [activeStep]
  );
  const mainButtonOnClick = useCallback(
    (e: any) => {
      e.stopPropagation();
      if (activeStep === STEPS.productInformation) {
        formik.handleSubmit()
        setActiveStep(STEPS.image);
      } else {
        console.log("submit");
      }
    },
    [activeStep]
  );

  let modalBody = (
    <Form onSubmit={formik.handleSubmit} className="flex flex-col gap-[10px]">
      <div className="flex justify-between gap-[10px]">
        <SecondaryInput 
          id="name"
          name="name"
          placeholder="Product name" 
          type="third"
          onChange={formik.handleChange} />
        <SecondaryInput
          id="price"
          name="price"
          placeholder="Price"
          type="third"
          rightSvg={<Icon svg={WebsiteIcons["Price"]} />}
          onChange={formik.handleChange}
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
              onClick: (e) => formik.setFieldValue('avaiableSizes',({ ...formik.values.avaiableSizes, xsm: e })),
              checked: formik.values.avaiableSizes.xsm,
            },
            {
              label: "sm",
              onClick: (e) => formik.setFieldValue('avaiableSizes',({ ...formik.values.avaiableSizes, sm: e })),
              checked: formik.values.avaiableSizes.sm,
            },
            {
              label: "md",
              onClick: (e) => formik.setFieldValue('avaiableSizes',({ ...formik.values.avaiableSizes, md: e })),
              checked: formik.values.avaiableSizes.md,
            },
            {
              label: "lg",
              onClick: (e) => formik.setFieldValue('avaiableSizes',({ ...formik.values.avaiableSizes, lg: e })),
              checked: formik.values.avaiableSizes.lg,
            },
            {
              label: "xl",
              onClick: (e) => formik.setFieldValue('avaiableSizes',({ ...formik.values.avaiableSizes, xl: e })),
              checked: formik.values.avaiableSizes.xl,
            },
            {
              label: "xxl",
              onClick: (e) => formik.setFieldValue('avaiableSizes',({ ...formik.values.avaiableSizes,  xxl: e })),
              checked: formik.values.avaiableSizes.xxl,
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
    </Form>
  );

  const footerContent = (
    <div className="flex gap-[10px] items-center">
      {activeStep !== STEPS.productInformation && (
        <MainButton label={"Previous"} onClick={secondaryButtonOnClick} full />
      )}
      <GrayButton
        small={false}
        label={MainButtonCont}
        onClick={formik.handleSubmit}
        type="submit"
        full
      />
    </div>
  );

  if (activeStep === STEPS.image) {
    modalBody = (
      <div className={`flex flex-col ${productImages.length > 0 && 'gap-[30px]'} `}>
        <div className="h-fit">
          <ImageUpload
            onChange={(image)=>{setProductImages(prevImages => [...prevImages, image]);}}
            label="Upload Product image"
          />
        </div>
        <div className="flex gap-[5px] flex-wrap">{
          productImages.map((image,key)=>(
            <div className="w-[49%]" key={key}>
              <Image
                src={image}
                alt={`ProductImage${key}`}
                width={500}
                height={500}
                className="w-full h-[444px]  object-cover rounded-sm"
              />
            </div>
          ))
        }</div>
      </div>
    );
  }
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
