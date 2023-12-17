'use client'

import React from 'react'

interface Props{
    onClick:()=>void
    label:string,
    small?:boolean
    full?:boolean
    color?:string
    leftSvg?:React.ReactNode
    active?:boolean
}

export const SecondaryButton = ({label,onClick,small,full,color,leftSvg,active}:Props) => {
  return (
    <button className={`w-fit border-[2px] border-black  font-medium
    tracking-[0.5px] uppercase   select-none
   transition-colors duration-200 flex items-center  justify-center gap-[5px]
    ${small ? 'lg:py-[6px] py-[3px]  lg:px-[20px] px-[10px] text-[14px] ' : 'text-[18px] lg:py-[8px] py-[4px]  lg:px-[40px] px-[20px] '}
    ${full && 'w-full h-full'}
    ${color === 'white' ? 'border-white ' : 'lg:hover:bg-black lg:hover:text-white border-black'}
    ${
      active && color !== 'dark' &&
      'bg-black text-white'
    }
  `}
    onClick={onClick}
  >
    {
      leftSvg && 
      leftSvg
    }
        {label}
    </button>
  )
}
