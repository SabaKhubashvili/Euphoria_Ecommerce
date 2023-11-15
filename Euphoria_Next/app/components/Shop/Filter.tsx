'use client'

import React, { useState } from 'react'
import { AboutDresses, BrandFilter, FilterWithCheckboxs,  PriceSlider, SizeFilter } from './ShopUi'
import { FilterInterface } from '@/app/types'
import { useFilter } from '@/app/hooks/UseFilter'
import { FilteredBy } from './FilteredBy'
import { useMediaQuery } from '@mui/material'
import { Dropdown_Down } from '@/public/Svg/Icons'
import { FilterConstant } from '@/app/constants'

export const Filter = () => {
  const {filter,addFilter,deleteFilter,handlePriceChange} = useFilter()
  const isAboveLargeScreens = useMediaQuery('(min-width:1024px)')
  const [isOpen,setIsOpen] = useState<boolean>(false)
  
  const handleFilterChange = (e: string, category: keyof FilterInterface) => {
    if (filter[category].includes(e)) {
      deleteFilter(category, e);
    } else {
      addFilter(category, e);
    }
  };
  const filterSection = (
        <React.Fragment>
            <FilteredBy />
              <FilterWithCheckboxs 
                title={'Category'}
                values={filter.brand}        
                onChange={(e)=>handleFilterChange(e,'brand')}
                data={FilterConstant['length']}
                />
              <BrandFilter 
                values={filter.brand}        
                onChange={(e)=>handleFilterChange(e,'brand')}/>
              <SizeFilter
              values={filter.size}        
              onChange={(e)=>handleFilterChange(e,'size')}
              />
              {/* <LengthFilter
              values={filter.length}        
              onChange={(e)=>handleFilterChange(e,'length')}
              /> */}
              {/* <ColorFilter
              values={filter.color}        
              onChange={(e)=>handleFilterChange(e,'color')}
              /> */}
              <PriceSlider
              values={['10','500']}        
              onChange={(e)=>handlePriceChange(e)}
              />
              <AboutDresses/>
        </React.Fragment>
  );
  
  return (
    <div className='lg:col-span-2  flex flex-col mb-[30px] gap-[30px] lg:sticky top-[150px] lg:h-[750px] lg:overflow-x-auto lg:pr-[15px] select-none'>
      {isAboveLargeScreens ?
      filterSection
        :
        <React.Fragment>
          <div
          className='flex justify-between items-center cursor-pointer border-[1px] border-solid border-divider p-[11px]' 
          onClick={()=>{setIsOpen(prev=>!prev)}}
          >
            <p>Filter</p>
            <div className={`${isOpen ? 'rotate-180' : ''} transition-all duration-300`}>
              <Dropdown_Down/>
            </div>

          </div>
            {
              isOpen && 
              filterSection
            }
      </React.Fragment>
      }
    </div>
    )
}
