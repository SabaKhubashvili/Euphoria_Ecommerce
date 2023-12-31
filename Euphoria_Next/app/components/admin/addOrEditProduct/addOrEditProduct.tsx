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
import { productInterface } from "@/app/types";

interface Props {
  categories?: CategoryInterface[];
  product: productInterface | null;
}

export const AddOrEditProduct = ({ categories, product }: Props) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    validateOnChange: false,
    initialValues: {
      title: product?.title || "",
      aboutProduct: product?.aboutProduct || "",
      description: product?.description || "",
      price: product?.price || 0,
      availableSizes: product?.availableSizes
        ? JSON.parse(product.availableSizes)
        : {
            xs: false,
            sm: false,
            md: false,
            lg: false,
            xl: false,
            xxl: false,
          },
      images: product?.images || [],
      category: product?.category || { _id: "", name: "" },
      advantages: product?.advantages || "",
      brand: product?.brand || "",
      discount: product?.discount || null,
    },
    validate: (values) => {
      let errors: any = {};
      if (!values.title) {
        errors.title = "Title  is required";
      }
      if (!values.price) {
        errors.price = "Price  is required";
      }
      if (!values.category._id) {
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
      if(values.discount && values.discount > 100){
        errors.discount = 'Discount must be less than 100'
      }
      return errors;
    },
    onSubmit: (values) => {
      if (!isSubmitting) {
        setIsSubmitting(true);
        RestClient.putRequest(
          product ? BaseUrl.updateProduct : BaseUrl.addProduct,
          {
            ...values,
            availableSizes: JSON.stringify(values.availableSizes),
            category: values.category._id,
            _id: product ? product._id : null,
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
            if (!product) {
              formik.resetForm();
            }
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
      <PageTop pageTitle={product ? "Modify product" : "Add a product"} />
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
              title={formik.values.title}
              category={{
                _id: formik.values.category._id,
                name: formik.values.category.name,
              }}
              brand={formik.values.brand}
              description={formik.values.description}
              price={formik.values.price}
              discount={formik.values.discount}
              availableSizes={JSON.stringify(formik.values.availableSizes)}
              categories={categories}
              availableSizesOnChange={availableSizesOnChange}
              categoryOnChange={(val: { id: string; name: string }) =>
              formik.setFieldValue("category", { ...val, _id: val.id })
              }
              mainButtonLabel={product ? "Update product" : "Place product"}
              formik={formik}
              isEditable
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
