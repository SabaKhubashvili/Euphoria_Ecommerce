"use client";

import React, { useState } from "react";
import {
  SingleProductDetails,
  SingleProductInformation,
} from "../../Product/SingleProductPageUi";
import {
  FacebookBlackIcon,
  InstagramBlackIcon,
  TwitterBlackIcon,
} from "@/public/Svg/Social";
import Image from "next/image";
import { PageTop } from "../pageTop/PageTop";
import { Oswald } from "../../assets/Fonts";
import { useFormik } from "formik";
import { CategoryInterface } from "@/app/types";
import { ImageUpload } from "../../Upload/ImageUpload";
import { Icon } from "../../Icon";
import { WebsiteIcons } from "@/public/Svg/IconsObject";
import RestClient from "@/app/RestClient/RequestTypes";
import { getCookie } from "cookies-next";
import BaseUrl from "@/app/RestClient/ApiUrls";
import { toast } from "react-toastify";

interface Props {
  categories?: CategoryInterface[];
}

export const AddOrEditProduct = ({ categories }: Props) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    validateOnChange: false,
    initialValues: {
      title: "",
      aboutProduct: "",
      description: "",
      price: 0,
      availableSizes: {
        xs: false,
        sm: false,
        md: false,
        lg: false,
        xl: false,
        xxl: false,
      },
      images: [],
      category: { id: "", name: "" },
      advantages: "",
      brand: "",
    },
    validate: (values) => {
      let errors: any = {};
      if (!values.title) {
        errors.title = "Title  is required";
      }
      if (!values.price) {
        errors.price = "Price  is required";
      }
      if (!values.category.id) {
        errors.category = "Category is required";
      }
      if (!values.brand) {
        errors.brand = "Brand  is required";
      }
      if (!Object.values(values.availableSizes).some((size) => size === true)) {
        errors.availableSizes = "Minimum 1 size is required";
      }
      if (values.aboutProduct.length < 10) {
        errors.aboutProduct = " ";
      }
      if (values.description.length < 10) {
        errors.description = " ";
      }
      if (values.advantages.length < 10) {
        errors.advantages = " ";
      }
      if (values.images.length === 0) {
        errors.images = " ";
      }
      return errors;
    },
    onSubmit: (values) => {
      if (!isSubmitting) {
        console.log(values);

        setIsSubmitting(true);
        RestClient.putRequest(
          BaseUrl.addProduct,
          {
            ...values,
            availableSizes: JSON.stringify(values.availableSizes),
            category: values.category.id,
          },
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
            formik.resetForm();
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
            setIsSubmitting(false);
          });
      }
    },
  });
  const availableSizesOnChange = (
    size: keyof typeof formik.values.availableSizes
  ) => {
    formik.setFieldValue("availableSizes", {
      ...formik.values.availableSizes,
      [size]: !formik.values.availableSizes[size],
    });
  };
  return (
    <div>
      <PageTop pageTitle="Add a product" />
      <div
        className={`w-full my-[40px] ${Oswald.className} ${
          isSubmitting && "opacity-75"
        } transition-opacity duration-300`}
      >
        <div className="grid lg:grid-cols-2 lg:gap-[69px] gap-[20px] ">
          <div className="col-span-1 w-full">
            <div className="h-fit">
              {(formik.values.images.length === 0 || isUploading) && (
                <ImageUpload
                  label="Upload image"
                  onChange={(val) => {
                    formik.setFieldValue("images", [
                      ...formik.values.images,
                      val,
                    ]);
                    setIsUploading(false);
                  }}
                  styles={{
                    height: "900px",
                    width: "100%",
                    maxWidth: "700px",
                  }}
                  errors={formik.errors.images}
                  parentStyles={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                />
              )}
              <div className="">
                {formik.values.images.length > 0 && !isUploading && (
                  <Image
                    src={formik.values.images[activeImage]}
                    alt="Product_Image"
                    width={624}
                    height={790}
                    className="w-full object-cover h-[900px] max-w-[700px]"
                  />
                )}
                {formik.values.images.length > 0 && (
                  <div className="flex gap-[15px] mt-[10px]">
                    {formik.values.images
                      .slice(0, formik.values.images.length)
                      .map((image, index) => (
                        <Image
                          src={image}
                          alt="Product_Image"
                          width={200}
                          height={200}
                          className="w-[70px] h-[100px] cursor-pointer"
                          onClick={() => {
                            setIsUploading(false);
                            setActiveImage(index);
                          }}
                          key={image}
                        />
                      ))}
                    <div
                      className="w-[100px] h-[100px] flex justify-center items-center border-[1px] border-solid border-secondaryGray cursor-pointer"
                      onClick={() => setIsUploading(true)}
                    >
                      <div className="w-[40px]  h-[40px]">
                        <Icon svg={WebsiteIcons["Camera"]} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-center items-center gap-[10px] mt-[15px] text-[12px] font-medium">
              SHARE:
              <FacebookBlackIcon />
              <TwitterBlackIcon />
              <InstagramBlackIcon />
            </div>
          </div>
          <div className="col-span-1 select-none">
            <SingleProductInformation
              _id={1}
              isEditable
              title={formik.values.title}
              price={formik.values.price}
              description={formik.values.description}
              availableSizes={JSON.stringify(formik.values.availableSizes)}
              category={{
                _id: formik.values.category.id,
                name: formik.values.category.name,
              }}
              brand={formik.values.brand}
              availableSizesOnChange={availableSizesOnChange}
              categories={categories}
              categoryOnChange={(val: { id: string; name: string }) =>
                formik.setFieldValue("category", val)
              }
              mainButtonLabel="Place product"
              formik={formik}
            />
          </div>
        </div>
        <SingleProductDetails
          isEditable
          advantages={formik.values.advantages}
          aboutProduct={formik.values.aboutProduct}
          formik={formik}
        />
      </div>
    </div>
  );
};
