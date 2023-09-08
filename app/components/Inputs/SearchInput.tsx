import React from 'react'


interface Props{
    placeholder:string,
    onChange?:(e:any)=>void
}

export const SearchInput = ({placeholder,onChange}:Props) => {
  return (
    <input type="text"
    className='w-full py-[14px] px-[12px] placeholder:text-gray text-gray outline-none'
    placeholder={placeholder}
    onChange={onChange}
    />
  )
}
