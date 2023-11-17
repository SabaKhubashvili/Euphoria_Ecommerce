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

interface Props {
  categories?: CategoryInterface[];
}

export const AddOrEditProduct = ({ categories }: Props) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const formik = useFormik({
    validateOnChange: false,
    initialValues: {
      title: "",
      aboutProduct: "",
      description: "",
      price: 0,
      avaiableSizes: {
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
    validate: () => {},
    onSubmit: () => {},
  });
  const avaiableSizesOnChange = (
    size: keyof typeof formik.values.avaiableSizes
  ) => {
    formik.setFieldValue("avaiableSizes", {
      ...formik.values.avaiableSizes,
      [size]: !formik.values.avaiableSizes[size],
    });
  };

  return (
    <div>
      <PageTop pageTitle="Add a product" />
      <div className={`w-full my-[40px] ${Oswald.className}`}>
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
                    minHeight: "800px",
                    width: "100%",
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
                    className="w-full object-cover h-full"
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
              onChange={formik.handleChange}
              avaiableSizes={JSON.stringify(formik.values.avaiableSizes)}
              avaiableSizesOnChange={avaiableSizesOnChange}
              brand={formik.values.brand}
              category={{
                _id: formik.values.category.id,
                name: formik.values.category.name,
              }}
              categoryOnChange={(val: { id: string; name: string }) =>
                formik.setFieldValue("category", val)
              }
              categories={categories}
            />
          </div>
        </div>
        <SingleProductDetails
          isEditable
          onChange={formik.handleChange}
          advantages={formik.values.advantages}
          aboutProduct={formik.values.aboutProduct}
        />
      </div>
    </div>
  );
};
