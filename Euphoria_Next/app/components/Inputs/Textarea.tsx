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
}

export const Textarea = ({onChange,value,feedback,name,id,disabled,height}:Props) => {
  return (
    <div className='h-full w-full'>
      <textarea 
      id={id}
      name={name}
      onChange={onChange} 
      disabled={disabled}
      style={{height:`${height}px`}}
      className={`w-full outline-none border-[1px] border-solid
      border-secondaryGray p-2 rounded-lg text-secondaryGray
       transition-opacity duration-300 placeholder:select-none
      ${disabled && 'opacity-75'}
      `}
      placeholder='Description' value={value} />
      {feedback && <div className="text-rose-500 mt-[4px]">{feedback}</div>}
     </div>
  )
}
