'use client'
import React from 'react'

interface Props{
  onClick:(e:any)=>void
  label:string,
  small?:boolean
  full?:boolean
}

export const GrayButton = ({label,onClick,full,small}:Props) => {
  return (
    <button
     onClick={onClick}
     className={`border-divider border-[2px] bg-lightBlue text-gray text-center  select-none
      px-[20px] font-medium tracking-[0.5px] uppercase
      ${small ? 'lg:py-[6px] py-[3px]  lg:px-[20px] px-[10px] 2xl:text-[15px] xl:text-[12px] md:text-[11px] text-[10px] ' : 'text-[18px] lg:py-[8px] py-[4px]  lg:px-[40px] px-[20px] '}
      ${full && 'w-full h-full'}
      `}>
        {label}
    </button>
  )
}
