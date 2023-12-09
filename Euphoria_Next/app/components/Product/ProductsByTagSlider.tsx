'use client'
import React from "react";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductComponent } from "./ProductComponent";
import "swiper/css";
import "swiper/css/navigation";
import useMediaQuery from "@/app/hooks/UseMediaQuery";
import { productInterface } from "@/app/constants";

interface Props {
  title?: string;
  sliderName: string;
  data: productInterface[];
}

export const ProductsByTagSlider = ({ title, sliderName, data }: Props) => {
  return (
    <section className="flex flex-col gap-[34px] pt-[30px] relative">
      {title && <h1 className="text-[24px] w-fit">{title}</h1>}
      {/* <div className="absolute top-10 right-0 z-[3] w-fit">
        <div className="flex w-fit gap-[3px] justify-end">
          <div className="slider_Prev">Prev</div>
          <div className="slider_Next">Next</div>
        </div>
      </div> */}
      <Swiper
        // navigation={{
        //   nextEl: ".slider_Next",
        //   prevEl: ".slider_Prev",
        // }}
        modules={[FreeMode]}
        className="swiper-container"
        style={{width:'100%'}}
        slidesPerView={'auto'}
        spaceBetween={20}
        freeMode
      >
        {data.slice(0, 15).map((product, index) => (
          <SwiperSlide
            className="sm:max-w-[300px] max-w-[200px] h-fit"
            key={index}
          >
            <ProductComponent res={false} {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};


