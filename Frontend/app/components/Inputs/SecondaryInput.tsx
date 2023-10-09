'use client'

import React from 'react'


interface Props{
    placeholder:string,
    type: 'primary' | 'secondary',
    rightSvg?: React.ReactElement
    onChange?:()=>void 
}

export const SecondaryInput = ({placeholder,type,rightSvg,onChange}:Props) => {
  return (
    <div className='relative w-full'>
      <input type="text"
      onChange={onChange && onChange}
      className={`w-full  outline-none bg-transparent 
      border-[1px]
      ${ type === 'primary' ?
       'placeholder:text-white text-white border-white py-[14px] px-[12px]' :
       type === 'secondary' ? 
       `bg-white placeholder:text-secondaryGray py-[8px] px-[16px] border-secondaryGray text-[15px] ${rightSvg && 'pr-[28px]'}` : ''}
      `}
      placeholder={placeholder}
      />
      {rightSvg &&
        <div className='absolute right-1 top-0 bottom-0 flex items-center'>
          {rightSvg}
        </div>
      }
    </div>
  )
}
