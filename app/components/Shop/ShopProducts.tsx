'use client'

import React from 'react'
import { Filter } from './Filter'
import { Shop } from './Shop'
import { Roboto } from '../assets/Fonts'

export const ShopProducts = () => {
  return (
    <section className='w-full'>
        <p className={` ${Roboto.className} text-gray text-[14px] `}>Shop</p>
        <div className='flex items-start gap-[30px] mt-[18px]'>
            <Filter/>
            <Shop/>
        </div>
    </section>
  )
}
