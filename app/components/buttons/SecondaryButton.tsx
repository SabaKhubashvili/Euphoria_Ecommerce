'use client'

import React from 'react'

interface Props{
    onClick:()=>void
    label:string
}

export const SecondaryButton = ({label,onClick}:Props) => {
  return (
    <button className='py-[8px] px-[40px] w-fit border-[2px] border-black text-[18px] font-medium
    tracking-[0.5px] uppercase
    lg:hover:bg-black lg:hover:text-white transition-colors duration-200
    '>
        {label}
    </button>
  )
}
