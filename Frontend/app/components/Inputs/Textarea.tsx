'use client'

import React from 'react'

interface Props{
    onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    value?:string,

}

export const Textarea = ({onChange,value}:Props) => {
  return (
    <textarea className='w-full h-full outline-none border-[1px] border-solid
     border-secondaryGray p-2 rounded-lg text-secondaryGray' 
     placeholder='Description' />
  )
}
