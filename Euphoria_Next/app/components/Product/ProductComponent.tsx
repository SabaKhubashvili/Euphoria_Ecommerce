'use client'

import Image from 'next/image'
import React from 'react'
import { MainButton } from '../buttons/MainButton'
import { GrayButton } from '../buttons/GrayButton'
import { productInterface, products } from '@/app/constants'
import Link from 'next/link'

interface Props extends productInterface{
  usingCol?:boolean,
}

export const ProductComponent = ({
  _id,
  title,
  images,
  aboutProduct,
  price,
  usingCol,
}:Props) => {
  
  return (
    <Link href={`/product/${_id}`} className={`flex flex-col gap-[14px]  ${usingCol ? 'col-span-1' : 'w-full h-full'}`}>
      <div className='relative w-full h-[425px] '>
        <Image
          width={300}
          height={400}
          alt='Product'
          src={`${images[0]}`}
          className='object-cover peer w-full h-full'
        />
        <div className="absolute bottom-[-4px] w-full  transition-all duration-200 bg-white left-0 right-0 
         lg:hover:opacity-100 peer-hover:opacity-100  opacity-0 py-[20px]  flex px-[10px] gap-[5px]
          mx-auto xl:h-[100px] lg:h-[90px] md:h-[80px] h-[70px]
         ">
            <MainButton full small  label='Add to bag' onClick={()=>{}}/>
            <GrayButton full small  label='Save' onClick={()=>{}}/>
        </div>
      </div>
      <div className='flex flex-col justify-between w-full'>
          <div>
            <p className='uppercase text-gray font-semibold xl:text-[12px] md:text-[10px] sm:text-[9px] text-[7px]'>{title}</p>
            <h1 className='xl:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] font-light'>{aboutProduct.slice(0,70)}...</h1>
          </div>
          <h3 className='uppercase 2xl:text-[22px] xl:text-[20px] md:text-[18px] sm:text-[14px] text-[12px] font-medium'>{price} GEL</h3>
      </div>
    </Link>
  )
}
