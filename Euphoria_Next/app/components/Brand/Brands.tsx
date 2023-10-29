'use client'

import Image from 'next/image'
import React from 'react'
import { Brand } from './Brand'

export const Brands = () => {
  return (
    <section className='w-full md:border-b-[1px] md:border-x-[1px]
     border-b-divider border-x-divider mt-[20px] '>
        <div className='flex gap-[44px] md:justify-normal justify-center '>
            <div className='w-full h-[1px] bg-divider ' />
            <h1 className='whitespace-nowrap -mt-3 text-center'>chose your brand</h1>
            <div className='w-full h-[1px] bg-divider' />
        </div>
        <div className='py-[16px] md:px-[11px] flex xs:justify-between  gap-y-[10px]  justify-center items-center flex-wrap  '>
           <Brand image='GUCCI'/>
           <Brand image='ARMANI'/>
           <Brand image='CHANEL'/>
           <Brand image='DIOR'/>
           <Brand image='FENDI'/>
           <Brand image='VERSACE'/> 
        </div>
    </section>
  )
}
