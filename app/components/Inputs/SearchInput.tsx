import React from 'react'


interface Props{
    placeholder:string,
    onChange?:(e:any)=>void
}

export const SearchInput = ({placeholder,onChange}:Props) => {
  return (
    <input type="text"
    className='w-full py-[14px] px-[12px] placeholder:text-gray text-gray outline-none lg:text-[17px] md:text-[15px] text-[12px]'
    placeholder={placeholder}
    onChange={onChange}
    />
  )
}
