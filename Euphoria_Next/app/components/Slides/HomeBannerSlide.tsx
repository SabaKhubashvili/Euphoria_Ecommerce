'use client'

import Image from 'next/image'
import React from 'react'
import { SecondaryButton } from '../buttons/SecondaryButton'

export const HomeBannerSlide = ({ title, buttonLabel,image }:{
  title:string | React.ReactNode,
  buttonLabel:string,
  image:string
}) => {
  return (
    <div className='relative w-full h-full'>
      <Image
        src={'/Images/Banners/HomeBanner.webp'}
        alt='HomeBanner1'
        className='w-full h-full object-cover absolute top-0 bottom-0 -z-[1] select-none'
        width={1800}
        height={1000}
      />

      <div className='flex lg:justify-between items-center h-full md:px-[100px] px-[20px] xl:pr-[207px] xl:pl-[207px] lg:gap-[48px] gap-[19px]
        lg:flex-row flex-col
      '>
        <div className='flex flex-col lg:gap-[48px] gap-y-[9px] lg:justify-normal justify-center lg:items-start items-center
           lg:basis-1/2 relative before:absolute lg:before:content-border-line before:right-0 before:w-[80%]'>
          <h1 className='font-semibold xl:leading-[96px] lg:leading-[58px] leading-[40px] xl:text-[70px] lg:text-[58px] text-[36px] lg:max-w-none max-w-[292px] lg:text-start text-center'>
            {title}
          </h1>
          <div>
            <SecondaryButton label={buttonLabel} onClick={()=>{}} />
          </div>
        </div>
        <div className='lg:basis-1/2 lg:h-auto h-[400px] max-h-[400px] lg:order-none order-first'>
          <Image
            src={`/Images/Banners/${image}`}
            alt='HomeBannerComponent'
            width={1200}
            height={1200}
            className='lg:max-w-[700px]  w-full h-full object-cover select-none'
          />
        </div>
      </div>
    </div>
  );
};
