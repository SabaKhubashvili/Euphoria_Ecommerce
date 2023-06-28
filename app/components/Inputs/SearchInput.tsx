import React from 'react'


interface Props{
    placeholder:string,

}

export const SearchInput = ({placeholder}:Props) => {
  return (
    <input type="text"
    className='w-full py-[14px] px-[12px] placeholder:text-gray text-gray'
    placeholder={placeholder}
    />
  )
}
