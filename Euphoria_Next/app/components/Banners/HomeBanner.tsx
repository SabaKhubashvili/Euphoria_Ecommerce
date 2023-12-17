"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";
import { HomeBannerSlide } from "../Slides/HomeBannerSlide";
import { SliderController } from "../Slides/SliderController";
import { Container } from "../Container";
import useMediaQuery from "@/app/hooks/UseMediaQuery";
import { largeScreens } from "@/app/Screens/Screens";

export const HomeBanner = () => {
  const isAboveLargeScreens = useMediaQuery(largeScreens);
  return (
    <Container stop={!isAboveLargeScreens}>
      <section className="relative w-full h-[800px] ">
        <div className="absolute bottom-0 right-0 z-[3] lg:w-fit w-full p-4 ">
          <SliderController
            NextEl={"HomeBanner_Next"}
            PrevEl={"HomeBanner_Prev"}
          />
        </div>

        <Swiper
          navigation={{
            nextEl: ".HomeBanner_Next",
            prevEl: ".HomeBanner_Prev",
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="homeBanner h-full"
        >
          <SwiperSlide className="!w-full !h-full">
            <HomeBannerSlide
              title={
                <React.Fragment>
                  SUMMER SALE GEt
                  <span className="transparent-text"> 30% OFF </span>
                  On all dress.
                </React.Fragment>
              }
              buttonLabel="Shop now"
              image="HomeBannerComp.webp"
            />
          </SwiperSlide>
          <SwiperSlide className="!w-full !h-full">
            <HomeBannerSlide
              title={
                <React.Fragment>
                  Super Fast
                  <span className="transparent-text"> Delivery </span>
                </React.Fragment>
              }
              buttonLabel="Shop now"
              image="HomeBannerComp2.webp"
            />
          </SwiperSlide>
          <SwiperSlide className="!w-full !h-full">
            <HomeBannerSlide
              title={
                <React.Fragment>
                  In our shop
                  <span className="transparent-text"> Quality </span>
                  is higher than prices
                </React.Fragment>
              }
              buttonLabel="Shop now"
              image="HomeBannerComp1.webp"
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </Container>
  );
};
