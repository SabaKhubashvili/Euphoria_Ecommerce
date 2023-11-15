'use client'

import React from "react";
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
export const AddOrEditProduct = () => {
  const formik = useFormik({
    validateOnChange:false,
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
      category: "65411417880b4cbf8653d9d5",
      advantages: "",
    },
    validate:()=>{

    },
    onSubmit:()=>{

    }
  })
  const avaiableSizesOnChange = (size: keyof typeof formik.values.avaiableSizes) => {  
    formik.setFieldValue('avaiableSizes', {
      ...formik.values.avaiableSizes,
      [size]: !formik.values.avaiableSizes[size],
    });
  };
  
  return (
    <div>
      <PageTop pageTitle="Add a product" />
      <div className={`w-full mt-[40px] ${Oswald.className}`}>
        <div className="grid lg:grid-cols-2 lg:gap-[69px] gap-[20px] ">
        <div className="col-span-1 w-full lg:h-[900px]   h-[400px]">
              <Image
               src={"/Images/Product/Black_Placeholder.webp"}
                alt="Product_Image"
                width={624}
                height={790}
                className="w-full object-cover h-full"
              />
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
              category={{ _id: "15", name: "s" }}
            />
          </div>
        </div>
        <SingleProductDetails
          advantages={"product.advantages"}
          aboutProduct={"product.aboutProduct"}
        />
      </div>
    </div>
  );
};
