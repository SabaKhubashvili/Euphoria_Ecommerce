'use client'

import React, { useState } from 'react'
import { AboutDresses, BrandFilter, ColorFilter, LengthFilter, PriceSlider, SizeFilter } from './ShopUi'
import { FilterInterface } from '@/app/types'
import { useFilter } from '@/app/hooks/UseFilter'

export const Filter = () => {
  const {filter,addFilter,deleteFilter,handlePriceChange} = useFilter()

  
  const handleFilterChange = (e: string, category: keyof FilterInterface) => {
    if (filter[category].includes(e)) {
      deleteFilter(category, e);
    } else {
      addFilter(category, e);
    }
  };

  
  return (
    <div className='basis-1/4 flex flex-col gap-[30px] sticky top-[150px]'>
        <BrandFilter 
          values={filter.brand}        
          onChange={(e)=>handleFilterChange(e,'brand')}/>
        <SizeFilter
          values={filter.size}        
          onChange={(e)=>handleFilterChange(e,'size')}
        />
        <LengthFilter
             values={filter.length}        
             onChange={(e)=>handleFilterChange(e,'length')}
        />
        <ColorFilter
          values={filter.color}        
          onChange={(e)=>handleFilterChange(e,'color')}
        />
        <PriceSlider
         values={['10','500']}        
         onChange={(e)=>handlePriceChange(e)}
        />
        <AboutDresses/>
    </div>
    )
}
