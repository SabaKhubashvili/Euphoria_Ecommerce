'use client'

import { useFilter } from '@/app/hooks/UseFilter'
import { CloseIcon } from '@/public/Svg/Icons'
import React from 'react'

export const FilteredBy = () => {
    const {filter,deleteFilter,resetFilter} = useFilter()
    const activeFilters = Object.keys(filter).filter((key) => filter[key as keyof typeof filter].length > 0);
    const hasFilters = Object.values(filter).some((arr) => arr.length > 0);

  return (
    <div className=''>
        {
            hasFilters && 
            (
                <div className='py-[28px] px-[23px] border-[1px] border-black border-solid'>
                    <div className='w-full flex justify-between items-end'>
                        <h1 className='text-[22px] font-medium font-Oswald'>Filter</h1>
                        <p className='uppercase  text-[14px] flex items-center gap-[8px] cursor-pointer' onClick={resetFilter}><CloseIcon /> Reset all</p>
                    </div>
                    <div className='mt-[26px] flex flex-col gap-[20px]'>
                        {
                            activeFilters.map(comp=>(
                                <div key={comp}>
                                    <h1 className=' font-Oswald text-[24px] mb-[10px]'>{comp !== 'price' && comp}</h1>
                                    {
                                        comp === 'price' ? 
                                        <div className='flex gap-[14px]'>
                                        {filter[comp as keyof typeof filter].map(component=>(
                                            <div onClick={()=>deleteFilter(comp as keyof typeof filter, component)}  key={component}
                                            className='cursor-pointer uppercase text-[14px] font-Roboto flex gap-[8px] items-center'>
                                               <p className='font-bold font-Roboto'>from {component.split(',')[0]}$</p> 
                                               <p className='font-bold font-Roboto'>to {component.split(',')[1]}$</p>
                                            </div>
                                        ))}
                                    </div>
                                        :
                                        <div className='flex gap-[14px] flex-wrap '>
                                            {filter[comp as keyof typeof filter].map(component=>(
                                                <p 
                                                onClick={()=>deleteFilter(comp as keyof typeof filter, component)} 
                                                className='cursor-pointer uppercase text-[14px] font-Roboto flex gap-[8px] items-center'
                                                key={component}
                                                >
                                                    <CloseIcon />{component}
                                                </p>
                                                ))}
                                        </div>
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            )
        }
    </div>
  )
}
