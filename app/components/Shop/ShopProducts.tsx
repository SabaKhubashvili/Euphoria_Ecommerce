'use client'

import React from 'react'
import { Filter } from './Filter'
import { Shop } from './Shop'
import { Roboto } from '../assets/Fonts'
import useMediaQuery from '@/app/hooks/UseMediaQuery'
import { largeScreens } from '@/app/Screens/Screens'

export const ShopProducts = () => {
  const IsAboveLargeScreens = useMediaQuery(largeScreens)

  return (
    <section className='w-full pb-[30px]'>
        <p className={` ${Roboto.className} text-gray text-[14px] `}>Shop</p>
        <div className='flex items-start gap-[30px] mt-[18px]'>
          {
          IsAboveLargeScreens &&  
            <Filter/>
          }
            <Shop/>
        </div>
    </section>
  )
}
