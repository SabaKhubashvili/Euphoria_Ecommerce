'use client'

import React from 'react'
import { AboutDresses, BrandFilter, ColorFilter, LengthFilter, PriceSlider, SizeFilter } from './ShopUi'

export const Filter = () => {
  return (
    <div className='basis-1/4 flex flex-col gap-[30px]'>
        <BrandFilter/>
        <SizeFilter/>
        <LengthFilter/>
        <ColorFilter/>
        <PriceSlider/>
        <AboutDresses/>
    </div>
    )
}
