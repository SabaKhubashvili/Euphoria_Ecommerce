'use client'

import React from 'react'

interface Props{
    onClick:()=>void
    label:string,
    small?:boolean
    full?:boolean
}

export const SecondaryButton = ({label,onClick,small,full}:Props) => {
  return (
    <button className={`w-fit border-[2px] border-black  font-medium
    tracking-[0.5px] uppercase
    lg:hover:bg-black lg:hover:text-white transition-colors duration-200
    ${small ? 'lg:py-[6px] py-[3px]  lg:px-[20px] px-[10px] text-[15px] ' : 'text-[18px] lg:py-[8px] py-[4px]  lg:px-[40px] px-[20px] '}
    ${full && 'w-full'}
  `}>
        {label}
    </button>
  )
}
