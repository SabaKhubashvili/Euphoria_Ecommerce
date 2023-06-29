'use client'

import React from 'react'

interface Props{
    children:React.ReactNode
    stop?:boolean
}

export const Container = ({children,stop}:Props) => {
  return (
    <div className={` ${!stop && 'max-w-[1920px] mx-auto px-[41px]' } `}>
        {children}
    </div>
  )
}
