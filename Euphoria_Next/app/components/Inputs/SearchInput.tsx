import React from 'react'


interface Props{
    id?:string,
    name?:string
    placeholder:string,
    onChange?:(e:any)=>void
    value:string
    disabled?:boolean
}

export const SearchInput = ({id,name,placeholder,onChange,value,disabled}:Props) => {
  return (
    <input type="text"
    id={id}
    name={name}
    value={value}
    disabled={disabled}
    className={`w-full py-[14px] px-[12px] placeholder:text-gray text-gray outline-none xl:text-[17px] lg:text-[15px] text-[12px] transition-opacity duration-200
     ${disabled && 'opacity-80'}`}
    placeholder={placeholder}
    onChange={onChange}
    />
  )
}
