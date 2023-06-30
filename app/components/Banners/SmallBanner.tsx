'use client'

import React from 'react'
import { Roboto } from '../assets/Fonts'
import { SecondaryButton } from '../buttons/SecondaryButton'
import Image from 'next/image'

export const SmallBanner = () => {
  return (
    <section className=' relative flex w-full
    md:h-[407px] sm:h-[330px] h-[126px] my-[62px]'>
     <div className='z-[20] bg-gradient-to-r from-[#DDEBF1] from-20% via-[#D3E5EE] via-60% to-transparent absolute w-[80%] 
        h-full top-0 left-0' />
         
        <div className='flex releative z-[20] flex-col pl-[10%] max-w-[839px]
         sm:pt-[96px] sm:gap-[24px] pb-[10px]
        '>
            <h1 className='font-semibold xl:leading-[72px] lg:leading-[62px] leading-[40px] xl:text-[70px] 
            lg:text-[56px] sm:text-[40px] text-[14px] lg:max-w-none max-w-[292px] uppercase
            relative before:absolute md:before:content-border-line before:right-0 before:w-[80%] 
            '>
              shoping without limits.
            </h1>
            <p className={`${Roboto.className} lg:text-[22px] text-[10px] leading-[37px] tracking-[0.22px] font-light`}>
                     See our clothing collections
                    </p>
            <div>
            <SecondaryButton small label='Shop Now' onClick={()=>{}} />
            </div>
        </div>
        
        
        <Image
          src={'/Images/Banners/SmallBannerSlider.webp'}
          alt='SmallBanner'
          width={1200}
          height={500}
          className='h-full ml-auto bg-gradient-to-r from-white to-transparent object-cover absolute right-0'
        />
    </section>
  )
}
