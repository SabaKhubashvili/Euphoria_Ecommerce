'use client'

import React from 'react'

interface Props{
    onChange?:(e:React.ChangeEvent<HTMLTextAreaElement>)=>void,
    value?:string,
    feedback?:string
    name:string,
    id:string,
    disabled?:boolean,
    height?:string
    paddings?:string
    placeholder?:string,
    type?: 'primary' | 'borderless',
    full?:boolean
}

export const Textarea = ({onChange,value,feedback,name,id,disabled,height,paddings,placeholder,type = 'primary',full}:Props) => {  
  return (
    <div className='h-full w-full'>
      <textarea 
      id={id}
      name={name}
      onChange={onChange} 
      disabled={disabled}
      style={{height:`${height}px`,padding:paddings}}
      className={`w-full outline-none border-[1px] border-solid
      border-secondaryGray p-2 rounded-lg text-secondaryGray
       transition-opacity duration-300 placeholder:select-none h-full
      ${disabled && 'opacity-75'}
      ${type === 'borderless' && '!border-none !bg-transparent'}
      ${full && 'w-full h-full'}
      ${feedback && '!text-rose-500 placeholder:text-rose-500'}
      `}
      placeholder={placeholder} value={value} />
      {feedback && <div className="text-rose-500 mt-[4px]">{feedback}</div>}
     </div>
  )
}
