'use client'

import React from 'react'

interface Props{
    onChange?:(e:React.ChangeEvent<HTMLTextAreaElement>)=>void,
    value?:string,
    feedback?:string
    name:string,
    id:string
}

export const Textarea = ({onChange,value,feedback,name,id}:Props) => {
  return (
    <div className='h-full'>
      <textarea 
      id={id}
      name={name}
      onChange={onChange} 
      className='w-full h-full outline-none border-[1px] border-solid
      border-secondaryGray p-2 rounded-lg text-secondaryGray' 
      placeholder='Description' value={value} />
      {feedback && <div className="text-rose-500 mt-[4px]">{feedback}</div>}
     </div>
  )
}
