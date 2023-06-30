'use client'

import React from 'react'

interface Props{
    onClick:()=>void
    label:string
}

export const SecondaryButton = ({label,onClick}:Props) => {
  return (
    <button className='lg:py-[8px] py-[4px]  lg:px-[40px] px-[20px] w-fit border-[2px] border-black text-[18px] font-medium
    tracking-[0.5px] uppercase
    lg:hover:bg-black lg:hover:text-white transition-colors duration-200
    '>
        {label}
    </button>
  )
}
