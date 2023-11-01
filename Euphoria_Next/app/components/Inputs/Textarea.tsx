'use client'

import React from 'react'

interface Props{
    onChange?:(e:React.ChangeEvent<HTMLTextAreaElement>)=>void,
    value?:string,
    feedback?:string
    name:string,
    id:string,
    disabled?:boolean
}

export const Textarea = ({onChange,value,feedback,name,id,disabled}:Props) => {
  return (
    <div className='h-full'>
      <textarea 
      id={id}
      name={name}
      onChange={onChange} 
      disabled={disabled}
      className={`w-full h-full outline-none border-[1px] border-solid
      border-secondaryGray p-2 rounded-lg text-secondaryGray
      transition-all duration-300
      ${disabled && 'opacity-75'}
      `}
      placeholder='Description' value={value} />
      {feedback && <div className="text-rose-500 mt-[4px]">{feedback}</div>}
     </div>
  )
}
