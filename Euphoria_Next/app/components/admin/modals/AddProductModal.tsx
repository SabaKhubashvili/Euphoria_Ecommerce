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
import RestClient from "@/app/RestClient/RequestTypes";
import BaseUrl from "@/app/RestClient/ApiUrls";
import { toast } from "react-toastify";
import { getCookie } from "cookies-next";
import { cookies } from "next/dist/client/components/headers";
import { ToolTip } from "../../Tooltip";

enum STEPS {
  productInformation = 0,
  productDescription = 1,
  image = 2,
}

export const AddProductModal = () => {
  const [activeStep, setActiveStep] = useState<STEPS>(STEPS.productInformation);
  const { isOpen, onClose } = UseAddProductModal();
  const [isSubmitting, setisSubmitting] = useState<boolean>(false);

  const formik = useFormik({
    validateOnBlur: false,
    validateOnChange: false,
    initialValues: {
      title: "",
      aboutProduct: "",
      otherInformation: "",
      price: "",
      avaiableSizes: {
        xsm: false,
        sm: false,
        md: false,
        lg: false,
        xl: false,
        xxl: false,
      },
      images: [],
      category: "65411417880b4cbf8653d9d5",
      advantages: "",
    },
    validate: (values) => {
      let errors: any = {};
      const pattern = /[a-zA-Z]/;

      if (!values.title) {
        errors.title = "Name  is required";
      }
      if (!values.price) {
        errors.price = "Price  is required";
      } else if (pattern.test(values.price)) {
        errors.price = "Invalid value";
      }
      if (!Object.values(values.avaiableSizes).some((size) => size === true)) {
        errors.avaiableSizes = "Minimum 1 size is required";
      }
      if (values.otherInformation.length < 30) {
        errors.otherInformation = "Description must be minimum 30 characters";
      }
      return errors;
    },
    onSubmit: async (values) => {
      if (activeStep != STEPS.image) {
        setActiveStep((prev) => prev + 1);
      } else if (!isSubmitting) {
        setisSubmitting(true);

        RestClient.putRequest(
          BaseUrl.addProduct,
          { ...values, avaiableSizes: JSON.stringify(values.avaiableSizes) },
          getCookie("accessToken")
        )
          .then((res) => {
            toast.success(res.data.message, {
              position: "top-center",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setActiveStep(STEPS.productInformation);
            formik.resetForm();
            onClose();
          })
          .catch((err: any) => {
            toast.error(err.response.data.message, {
              position: "top-center",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          })
          .finally(() => {
            setisSubmitting(false);
          });
      }
    },
  });
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
      if (activeStep !== STEPS.productInformation) {
        setActiveStep((prev) => prev - 1);
      }
    },
    [activeStep]
  );

  // const handleProductAdvantagesChange = (
  //   e: React.ChangeEvent<HTMLTextAreaElement>
  // ) => {
  //   const newText = e.target.value;
  //   const lines = newText.split("\n");

  //   formik.handleChange(e);

  //   if (newText.endsWith("\n") || newText.endsWith("\r\n")) {
  //     formik.setFieldValue(
  //       "advantages",
  //       newText + "◯ " + lines[lines.length - 1]
  //     );
  //   }
  // };

  let modalBody = (
    <Form onSubmit={formik.handleSubmit} className="flex flex-col gap-[10px]">
      <div className="flex justify-between gap-[10px]">
        <SecondaryInput
          id="title"
          name="title"
          placeholder="Product name"
          type="third"
          onChange={formik.handleChange}
          feedback={formik.errors.title}
          value={formik.values.title}
          disabled={isSubmitting}
        />
        <SecondaryInput
          id="price"
          name="price"
          placeholder="Price"
          type="third"
          rightSvg={<Icon svg={WebsiteIcons["Price"]} />}
          onChange={formik.handleChange}
          feedback={formik.errors.price}
          value={formik.values.price}
          disabled={isSubmitting}
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
              onClick: (e) =>
                formik.setFieldValue("avaiableSizes", {
                  ...formik.values.avaiableSizes,
                  xsm: e,
                }),
              checked: formik.values.avaiableSizes.xsm,
            },
            {
              label: "sm",
              onClick: (e) =>
                formik.setFieldValue("avaiableSizes", {
                  ...formik.values.avaiableSizes,
                  sm: e,
                }),
              checked: formik.values.avaiableSizes.sm,
            },
            {
              label: "md",
              onClick: (e) =>
                formik.setFieldValue("avaiableSizes", {
                  ...formik.values.avaiableSizes,
                  md: e,
                }),
              checked: formik.values.avaiableSizes.md,
            },
            {
              label: "lg",
              onClick: (e) =>
                formik.setFieldValue("avaiableSizes", {
                  ...formik.values.avaiableSizes,
                  lg: e,
                }),
              checked: formik.values.avaiableSizes.lg,
            },
            {
              label: "xl",
              onClick: (e) =>
                formik.setFieldValue("avaiableSizes", {
                  ...formik.values.avaiableSizes,
                  xl: e,
                }),
              checked: formik.values.avaiableSizes.xl,
            },
            {
              label: "xxl",
              onClick: (e) =>
                formik.setFieldValue("avaiableSizes", {
                  ...formik.values.avaiableSizes,
                  xxl: e,
                }),
              checked: formik.values.avaiableSizes.xxl,
            },
          ]}
          feedback={formik.errors.avaiableSizes}
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
        <div className="min-h-[150px]">
          <Textarea
            name="otherInformation"
            id="otherInformation"
            onChange={formik.handleChange}
            feedback={formik.errors.otherInformation}
            value={formik.values.otherInformation}
            disabled={isSubmitting}
            height="150"
          />
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

  if (activeStep === STEPS.productDescription) {
    modalBody = (
      <div className="flex flex-col gap-[15px]">
        <div className="flex flex-col gap-[7px]">
          <div className="flex justify-between items-center relative">
            <h3 className="font-medium text-[14px]">Enter About product</h3>
            <div className="flex gap-[7px]">
              <span className="text-secondaryGray">Recommended</span>
              <div
                className={
                  formik.values.aboutProduct.length <= 200
                    ? "text-green"
                    : " text-rose-500"
                }
              >
                {formik.values.aboutProduct.length}
                <span>/200</span>
              </div>
            </div>
          </div>
          <div className="min-h-[150px]">
            <Textarea
              name="aboutProduct"
              id="aboutProduct"
              onChange={formik.handleChange}
              feedback={formik.errors.aboutProduct}
              value={formik.values.aboutProduct}
              disabled={isSubmitting}
              height="150"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[7px]">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-[14px]">
              Enter product advantages
            </h3>
            <ToolTip tooltipText="Format text">
              <div className="w-[20px] h-[20px] cursor-pointer">
                <Icon
                  onClick={(e) => {
                    if (formik.values.advantages.length > 0) {
                      e.stopPropagation();
                      const lines = formik.values.advantages.split("\n");
                      let newText = "";
                      lines.map((line) => {
                        newText += "◯ " + line + "\n";
                      });
                      formik.setFieldValue("advantages", newText);
                    }
                  }}
                  svg={WebsiteIcons["Dot"]}
                />
              </div>
            </ToolTip>
          </div>
          <div className="">
            <Textarea
              name="advantages"
              id="advantages"
              onChange={formik.handleChange}
              feedback={formik.errors.advantages}
              value={formik.values.advantages}
              disabled={isSubmitting}
              height="150"
            />
          </div>
        </div>
      </div>
    );
  }

  if (activeStep === STEPS.image) {
    modalBody = (
      <div
        className={`flex flex-col ${
          formik.values.images.length > 0 && "gap-[30px]"
        } `}
      >
        <div className="h-fit">
          <ImageUpload
            onChange={(image) => {
              formik.setFieldValue("images", [...formik.values.images, image]);
            }}
            label="Upload Product image"
          />
        </div>
        <div className="flex gap-[5px] flex-wrap">
          {formik.values.images.map((image, key) => (
            <div className="w-[49%]" key={key}>
              <Image
                src={image}
                alt={`ProductImage${key}`}
                width={500}
                height={500}
                className="w-full h-[444px]  object-cover rounded-sm"
              />
            </div>
          ))}
        </div>
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
