'use client'

import React from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ProductComponent } from './ProductComponent'
import "swiper/css";
import "swiper/css/navigation";
import { SliderController } from '../Slides/SliderController'
import useMediaQuery from '@/app/hooks/UseMediaQuery'
import { largeScreens } from '@/app/Screens/Screens'

interface Props{
    title?:string,
    sliderName:string
}

export const ProductsByTagSlider = ({title,sliderName}:Props) => {
    const isAboveLargeScreens = useMediaQuery(largeScreens)

  return (
    <section className='flex flex-col gap-[34px] pt-[30px] relative'>
     {title && <h1 className='text-[24px] leading-[68px]'>{title}</h1>}
     { isAboveLargeScreens &&

         <div className='absolute top-10 right-0 z-[3] lg:w-fit w-full p-4 '>
           <SliderController NextEl={`${sliderName}_Next`} PrevEl={`${sliderName}_Prev`} light />
    </div>
    }
     <Swiper
        modules={[Navigation]}
        navigation={{
            nextEl:`.${sliderName}_Next`,
            prevEl:`.${sliderName}_Prev`
        }}
        className='!h-full !w-full flex gap-[20px]'
        slidesPerView={'auto'}
        spaceBetween={20}
     >
        <SwiperSlide className='!w-[280px]'>
            <ProductComponent/>
        </SwiperSlide>
        <SwiperSlide className='!w-[280px]'>
            <ProductComponent/>
        </SwiperSlide>
        <SwiperSlide className='!w-[280px] !h-full'>
            <ProductComponent/>
        </SwiperSlide>
        <SwiperSlide className='!w-[280px] !h-full'>
            <ProductComponent/>
        </SwiperSlide>
        <SwiperSlide className='!w-[280px] !h-full'>
            <ProductComponent/>
        </SwiperSlide>
        <SwiperSlide className='!w-[280px] !h-full'>
            <ProductComponent/>
        </SwiperSlide>
        <SwiperSlide className='!w-[280px] !h-full'>
            <ProductComponent/>
        </SwiperSlide>
        <SwiperSlide className='!w-[280px] !h-full'>
            <ProductComponent/>
        </SwiperSlide>
        <SwiperSlide className='!w-[280px] !h-full'>
            <ProductComponent/>
        </SwiperSlide>
        <SwiperSlide className='!w-[280px] !h-full'>
            <ProductComponent/>
        </SwiperSlide>
        <SwiperSlide className='!w-[280px] !h-full'>
            <ProductComponent/>
        </SwiperSlide>
        <SwiperSlide className='!w-[280px] !h-full'>
            <ProductComponent/>
        </SwiperSlide>
        <SwiperSlide className='!w-[280px] !h-full'>
            <ProductComponent/>
        </SwiperSlide>
        <SwiperSlide className='!w-[280px] !h-full'>
            <ProductComponent/>
        </SwiperSlide>
     </Swiper>
    </section>
  )
}
