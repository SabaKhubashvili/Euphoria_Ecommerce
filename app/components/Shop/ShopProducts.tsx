'use client'

import React from 'react'
import { Filter } from './Filter'
import { Shop } from './Shop'
import { Roboto } from '../assets/Fonts'
import useMediaQuery from '@/app/hooks/UseMediaQuery'
import { largeScreens } from '@/app/Screens/Screens'
import { products } from '@/app/constants'
import { usePagination } from '@/app/hooks/UsePagination'

export const ShopProducts = () => {
  const IsAboveLargeScreens = useMediaQuery(largeScreens)
  const {currentPage} = usePagination()

  return (
    <section className='w-full pb-[30px]'>
        <p className={` ${Roboto.className} text-gray text-[14px] pt-[18px] leading-[68px] `}>Home/Shop</p>
        <div className='flex items-start  mt-[18px]'>
          {
          IsAboveLargeScreens &&  
            <>
              <Filter/>
            </>
          }
            <Shop currentProducts={products.slice(0 + 16 * currentPage,currentPage > 0 ? (currentPage + 1) * 16  : 16)}/>
        </div>
    </section>
  )
}
