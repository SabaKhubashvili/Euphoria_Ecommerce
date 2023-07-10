'use client'

import React, { useState } from 'react'
import { AboutDresses, BrandFilter, ColorFilter, LengthFilter, PriceSlider, SizeFilter } from './ShopUi'
import { FilterInterface } from '@/app/types'

export const Filter = () => {
  const [Filters,setFilters] = useState<FilterInterface>({
    brand:[],
    size:[],
    length:[],
    color:[],
    price:[]
  })
  console.log(Filters);
  
  const handleFilterChange = (e: string, category: keyof FilterInterface) => {
    if(Filters[category].includes(e)){
      
      setFilters(prev => {
        const updatedFilters = { ...prev }
        updatedFilters[category] = [...prev[category].filter(cat=>cat !== e)]
        return updatedFilters
      })
    }else{

      setFilters(prev => {
        const updatedFilters = { ...prev };
        updatedFilters[category] = [...prev[category], e];
        return updatedFilters;
      });
    }
  };

  const handlePriceChange = (e:number[]) =>{
    
    setFilters(prev => {
      const updatedFilters = { ...prev }
      updatedFilters.price = [e.toString()]
      return updatedFilters
    })
    
  }
  
  return (
    <div className='basis-1/4 flex flex-col gap-[30px]'>
        <BrandFilter 
        values={Filters.brand}        
        onChange={(e)=>handleFilterChange(e,'brand')}/>
        <SizeFilter
          values={Filters.size}        
          onChange={(e)=>handleFilterChange(e,'size')}
        />
        <LengthFilter
             values={Filters.length}        
             onChange={(e)=>handleFilterChange(e,'length')}
        />
        <ColorFilter
          values={Filters.color}        
          onChange={(e)=>handleFilterChange(e,'color')}
        />
        <PriceSlider
         values={Filters.price}        
         onChange={(e)=>handlePriceChange(e)}
        />
        <AboutDresses/>
    </div>
    )
}
