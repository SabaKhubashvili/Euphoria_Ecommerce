'use client'

import Image from 'next/image'
import React from 'react'
import { Roboto } from '../assets/Fonts'
import { SecondaryButton } from '../buttons/SecondaryButton'

export const BannersGroup = () => {
  return (
    <section className='mt-[30px] grid lg:grid-cols-2 lg:grid-rows-2 grid-rows-4 gap-[30px] lg:h-[698px] h-[800px]'>
        <div className='col-span-1 row-span-1
         bg-gradient-to-r from-[#F1EFF0] to-[#F3F0EF] 
         flex justify-between items-center
        '>
            <Image
                src={'/Images/Banners/SmallBanner1.webp'}
                alt='Smallbanner'
                width={300}
                height={300}
                className='h-fit self-end  xl:max-w-none lg:max-w-[263px] lg:max-h-none max-w-[137px] xs:w-fit w-[50%]  '
            />
            
            <div className='flex flex-col  xl:gap-[51px] md:gap-[20px] gap-[10px] flex-grow'>
                <div>
                    <h1 className='uppercase md:leading-[62px] leading-[20px] font-semibold xl:text-[48px] lg:text-[35px] text-[16px] max-w-[221px]'>
                    choose
                    your look
                    </h1>
                    <p className={`${Roboto.className}  lg:text-[22px] text-[10px] leading-[37px] tracking-[0.22px] font-light`}>
                     See our clothing collections
                    </p>
                </div>

                <SecondaryButton label='SEE OFFERS' onClick={()=>{}}/>
            </div>
        </div>

        {/*//* Big Banner */}
        <div className='col-span-1 row-span-2
         bg-gradient-to-r from-[#E0DED3] to-[#E0DDD5]
         flex justify-between items-center relative z-[-2] lg:max-h-none 
        '>
            <Image
                src={'/Images/Banners/SmallBanner3.webp'}
                alt='Smallbanner'
                width={1000}
                height={1000}
                className='h-full self-end  xl:max-w-none  absolute w-full lg:max-w-[600px] max-w-[500px]    top-0 right-0 z-[-1] '
            />
            
            <div className='flex flex-col xl:gap-[51px]md:gap-[20px] gap-[10px]  flex-grow self-end xl:ml-[85px] xl:mb-[103px] md:ml-[60px] md:mb-[80px] m-4'>
                <div>
                    <h1 className='uppercase md:leading-[62px] leading-[20px] font-semibold  xl:text-[48px] lg:text-[35px] text-[16px] max-w-[221px]'>
                    choose
                    your look
                    </h1>
                    <p className={`${Roboto.className} text-[22px] leading-[37px] tracking-[0.22px] font-light`}>
                     See our clothing collections
                    </p>
                </div>

                <SecondaryButton label='SEE OFFERS' onClick={()=>{}}/>
            </div>
        </div>

        <div className='col-span-1 row-span-1
         bg-gradient-to-r from-[#F7E0D5] to-[#F3DCD2] 
         flex justify-between items-center
        '>
            <div className='flex flex-col xl:gap-[51px] md:gap-[20px] gap-[10px] flex-grow h-full justify-center xl:pl-[10%] pl-[20px]'>
                <div>
                    <h1 className='uppercase md:leading-[62px] leading-[20px] font-semibold xl:text-[48px] lg:text-[35px] text-[16px]'>
                    brand new style
                    </h1>
                    <p className={`${Roboto.className} lg:text-[22px] text-[10px] leading-[37px] tracking-[0.22px] font-light`}>
                     See our clothing collections
                    </p>
                </div>

                <SecondaryButton label='SEE OFFERS' onClick={()=>{}}/>
            </div>
            <Image
                src={'/Images/Banners/SmallBanner_2.webp'}
                alt='Smallbanner'
                width={300}
                height={300}
                className='h-fit self-end xl:max-w-none lg:max-h-none max-w-[137px] xs:w-fit w-[50%] '
            />
        </div>
    </section>
  )
}
