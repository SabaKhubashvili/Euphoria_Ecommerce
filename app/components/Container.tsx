'use client'

import React from 'react'

interface Props{
    children:React.ReactNode
}

export const Container = ({children}:Props) => {
  return (
    <div className='max-w-[1920px] mx-auto px-[41px] '>
        {children}
    </div>
  )
}
