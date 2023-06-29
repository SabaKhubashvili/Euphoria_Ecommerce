'use client'

import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation,Pagination } from "swiper";
import { HomeBannerSlide } from '../Slides/HomeBannerSlide';
import { SliderController } from '../Slides/SliderController';
import { Container } from '../Container';
import useMediaQuery from '@/app/hooks/UseMediaQuery';
import { largeScreens } from '@/app/Screens/Screens';

export const HomeBanner = () => {
    const isAboveLargeScreens = useMediaQuery(largeScreens)
  return (
    <Container stop={!isAboveLargeScreens}>

    <section className='pt-[130px] relative w-full h-[800px] '>

        <div className='absolute bottom-0 right-0 z-[3] w-full p-4 '>
           <SliderController NextEl={'HomeBanner_Next'} PrevEl={'HomeBanner_Prev'} />
        </div>

           <Swiper navigation={{
            nextEl:'.HomeBanner_Next',
            prevEl:'.HomeBanner_Prev'
        }}
        pagination={{
            clickable:true
        }}
        modules={[Navigation,Pagination]}
        className="mySwiper h-full">
                <SwiperSlide className='!w-full !h-full'>
                    <HomeBannerSlide/>
                </SwiperSlide>
                <SwiperSlide className='!w-full !h-full'>
                    <HomeBannerSlide/>
                </SwiperSlide>
                <SwiperSlide className='!w-full !h-full'>
                    <HomeBannerSlide/>
                </SwiperSlide>
           </Swiper>
    </section>
    </Container>
  )
}
