'use client'

import React from 'react'
import { BrandFilter, ColorFilter, LengthFilter, PriceSlider, SizeFilter } from './ShopUi'

export const Filter = () => {
  return (
    <div className='basis-1/4 flex flex-col gap-[60px]'>
        <BrandFilter/>
        <SizeFilter/>
        <LengthFilter/>
        <ColorFilter/>
        <PriceSlider/>
    </div>
    )
}
