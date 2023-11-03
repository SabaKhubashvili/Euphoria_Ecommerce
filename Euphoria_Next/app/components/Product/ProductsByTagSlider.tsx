"use client";

import React from "react";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductComponent } from "./ProductComponent";
import "swiper/css";
import "swiper/css/navigation";
import { SliderController } from "../Slides/SliderController";
import useMediaQuery from "@/app/hooks/UseMediaQuery";
import { largeScreens } from "@/app/Screens/Screens";
import { productInterface, products } from "@/app/constants";
import "swiper/css";
import "swiper/css/navigation";
import { NextIconGray, PrevIconGray } from "@/public/Svg/Icons";

interface Props {
  title?: string;
  sliderName: string;
  data: productInterface[];
}

export const ProductsByTagSlider = ({ title, sliderName, data }: Props) => {
  return (
    <section className="flex flex-col gap-[34px] pt-[30px] relative">
      {title && <h1 className="text-[24px] leading-[68px]">{title}</h1>}
      <div className="absolute top-10 right-0 z-[3] lg:w-fit w-full p-4 md:inline hidden ">
        <div className="flex gap-[3px] lg:justify-end justify-between w-full">
          <div className={`${sliderName}_Prev cursor-pointer`}>
            <PrevIconGray />
          </div>
          <div className={`${sliderName}_Next cursor-pointer`}>
            <NextIconGray />
          </div>
        </div>
      </div>
      <Swiper
        modules={[Navigation, FreeMode]}
        navigation={{
          nextEl: `.${sliderName}_Next`,
          prevEl: `.${sliderName}_Prev`,
        }}
        freeMode
        className="!h-full !w-full flex gap-[20px]"
        slidesPerView={"auto"}
        spaceBetween={20}
      >
        {data.slice(0, 15).map((product, index) => (
          <SwiperSlide
            className="2xl:!w-[240px] xl:!w-[210px] lg:!w-[190px] md:!w-[140px] sm:!w-[130px] !w-[120px]"
            key={index}
          >
            <ProductComponent {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
