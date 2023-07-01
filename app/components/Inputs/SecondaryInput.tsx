'use client'

import React from 'react'


interface Props{
    placeholder:string,

}

export const SecondaryInput = ({placeholder}:Props) => {
  return (
    <input type="text"
    className='w-full py-[14px] px-[12px] placeholder:text-white text-white outline-none bg-transparent 
    border-[1px] border-white  '
    placeholder={placeholder}
    />
  )
}
