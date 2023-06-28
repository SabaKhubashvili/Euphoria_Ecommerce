'use client'
import React from 'react'

interface Props{
    onClick:()=>void
    label:string
}

export const GrayButton = ({label,onClick}:Props) => {
  return (
    <button
     onClick={onClick}
     className=' border-divider border-[2px] bg-lightBlue text-gray text-center text-[15px] px-[20px] font-medium tracking-[0.5px] uppercase'>
        {label}
    </button>
  )
}
