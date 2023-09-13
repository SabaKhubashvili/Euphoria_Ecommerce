import React from 'react'


interface Props{
    id?:string,
    name?:string
    placeholder:string,
    onChange?:(e:any)=>void
}

export const SearchInput = ({id,name,placeholder,onChange}:Props) => {
  return (
    <input type="text"
    id={id}
    name={name}
    className='w-full py-[14px] px-[12px] placeholder:text-gray text-gray outline-none xl:text-[17px] lg:text-[15px] text-[12px]'
    placeholder={placeholder}
    onChange={onChange}
    />
  )
}
