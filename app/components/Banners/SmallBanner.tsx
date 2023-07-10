'use client'

import React from 'react'
import { Roboto } from '../assets/Fonts'
import { SecondaryButton } from '../buttons/SecondaryButton'
import Image from 'next/image'


interface Props{
  image:string,
  title:string,
  subTitle:string,
  button?:boolean,
  gradient:string,
  textColor?:string,
  small?:boolean
}

export const SmallBanner = ({image,title,subTitle,button,gradient,textColor,small}:Props) => {
  return (
    <section className=' relative flex w-full max-w-[1920px]  mx-auto
    h-fit '>
     <div className={`z-[20] bg-gradient-to-r 
     ${gradient === 'black' ? 'from-[#000] from-20% via-[#000] via-[50%]   to-transparent '  
     : 'from-[#DDEBF1] from-20% via-[#D3E5EE] via-[70%]   to-transparent'} to-transparent absolute w-[80%] 
        h-full top-0 left-0 `} />
         
        <div className={`flex releative z-[21] flex-col pl-[10%] max-w-[839px]
         sm:pt-[78px] pt-[40px] sm:gap-[24px] pb-[59px] ${textColor === 'white' ? 'text-white' : 'text-black'}
         ${small && ' !max-w-[600px] !xl:max-w-[839px]'}
        `}>
            <h1 className={`font-semibold xl:leading-[72px] lg:leading-[62px] leading-[40px] xl:text-[56px] 
            lg:text-[56px] sm:text-[40px] text-[14px] lg:max-w-none max-w-[292px] uppercase
            relative before:absolute ${textColor === 'white' ? 'md:before:content-border-line-white' : ' md:before:content-border-line'} before:right-0 before:w-[80%] 
            `}>
              {title}
            </h1>
            <p className={`${Roboto.className} lg:text-[22px] md:text-[16px] text-[12px]
             lg:leading-[37px] tracking-[0.22px] font-light `}>
                     {subTitle}
                    </p>
            <div>
              { button &&
                <SecondaryButton color='white' small label='Shop Now' onClick={()=>{}} />
              }
            </div>
        </div>
        
        
        <Image
          src={`/Images/Banners/${image}.webp`}
          alt='SmallBanner'
          width={1200}
          height={500}
          className={`h-full ml-auto bg-gradient-to-r from-white to-transparent object-cover absolute right-0 ${gradient === 'black' && 'z-20'}`}
        />
    </section>
  )
}
