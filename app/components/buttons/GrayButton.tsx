'use client'
import React from 'react'

interface Props{
  onClick:()=>void
  label:string,
  small?:boolean
  full?:boolean
}

export const GrayButton = ({label,onClick,full,small}:Props) => {
  return (
    <button
     onClick={onClick}
     className={`border-divider border-[2px] bg-lightBlue text-gray text-center 
      px-[20px] font-medium tracking-[0.5px] uppercase
      ${small ? 'lg:py-[6px] py-[3px]  lg:px-[20px] px-[10px] text-[15px] ' : 'text-[18px] lg:py-[8px] py-[4px]  lg:px-[40px] px-[20px] '}
      ${full && 'w-full'}
      `}>
        {label}
    </button>
  )
}
