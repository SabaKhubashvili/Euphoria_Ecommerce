'use client'

import Image from 'next/image'
import React from 'react'
import { Roboto } from '../assets/Fonts'
import { SecondaryButton } from '../buttons/SecondaryButton'

export const SecondarySmallBanner = () => {
  return (
    <section className='mt-[118px] h-[363px] relative flex gap-[96px]'>
        <div className='lg:basis-2/3 h-full basis-full '>
            <Image
                src={'/Images/Banners/SmallBanner4.webp'}
                alt='Smallbanner2'
                width={1200}
                height={400}
                className='w-full h-full object-cover object-center'
            />
        </div>
        <div className='ml-auto lg:basis-1/3 lg:static absolute left-0 right-0 mx-auto lg:w-auto w-[80%] top-0 bottom-0
        lg:my-0 mt-auto h-fit  bg-white lg:p-[0] p-[20px] mb-[10px]
        '>
            <div className='flex releative z-[20] flex-col mg:gap-[24px] pb-[10px] lg:justify-normal justify-center lg:text-start text-center
            '>
                <h1 className='font-semibold xl:leading-[72px] lg:leading-[62px]  xl:text-[56px] 
                lg:text-[46px] sm:text-[27px] text-[16px] lg:max-w-none max-w-[292px] uppercase 
                relative before:absolute lg:before:content-border-line before:right-0 before:w-[80%] lg:mx-0 mx-auto
                '>
                  EXPLORE THE BEST OF YOU.
                </h1>
                <p className={`${Roboto.className} lg:text-[22px] md:text-[14px] text-[10px] lg:leading-[37px] tracking-[0.22px] font-light`}>
                  You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco.
                </p>
                <div className='lg:pt-0 pt-[10px]'>
                <SecondaryButton small label='Shop Now' onClick={()=>{}} />
                </div>
            </div>
        </div>
    </section>
  )
}
