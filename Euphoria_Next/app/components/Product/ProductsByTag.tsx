'use client'

import React from 'react'
import { ProductComponent } from './ProductComponent'
import { GrayButton } from '../buttons/GrayButton'
import { productInterface, products } from '@/app/constants'
import { getProductByLimit } from '@/app/actions/getProductsByLimit'

interface Props{
    title?:string
    data:productInterface[]
}

export const ProductsByTag = ({title,data}:Props) => {
  
  return (
    <section className='flex flex-col gap-[34px] pt-[30px]'>
        {title && <h1 className='text-[24px] leading-[68px]'>{title}</h1>}
        <div className='grid xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-4 xs:grid-cols-2 grid-cols-1 lg:gap-[26px] gap-[6px]'>
          {
            data.map(product=>(
              <ProductComponent {...product} key={product._id}/>
            ))
          }
        </div>

        <div className='w-full flex justify-center'>
            <GrayButton label='Shop more' onClick={()=>{}}/>
        </div>
    </section>
  )
}
