'use client'

import Image from 'next/image'
import React from 'react'
import { MainButton } from '../buttons/MainButton'
import { GrayButton } from '../buttons/GrayButton'

export const ProductComponent = () => {
  return (
    <div className='flex flex-col gap-[14px] col-span-1'>
      <div className='relative w-full'>
        <Image
          width={400}
          height={500}
          alt='Product'
          src={'/Images/Product/Product.webp'}
          className='w-full h-full object-cover peer'
        />
        <div className="absolute bottom-[-4px] w-full  transition-all duration-200 bg-white left-0 right-0 
         hover:opacity-100 peer-hover:opacity-100  opacity-0 py-[20px]  flex px-[10px] gap-[5px]
          mx-auto 
         ">
            <MainButton full small label='Add to bag' onClick={()=>{}}/>
            <GrayButton full small label='Save' onClick={()=>{}}/>
        </div>
      </div>


      <div className='flex flex-col gap-[18px]'>
          <div>
            <p className='uppercase text-gray font-semibold text-[12px]'>TOP women</p>
            <h1 className='text-[18px] font-light'>Angels malu zip jeans slim black used</h1>
          </div>
          <h3 className='uppercase text-[22px] font-medium'>139,00 EUR</h3>
      </div>
    </div>
  )
}
