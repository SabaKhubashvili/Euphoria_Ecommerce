'use client'

import React from 'react'

interface Props{
    children:React.ReactNode
    stop?:boolean
}

export const Container = ({children,stop}:Props) => {
  return (
    <div className={` ${!stop && '!max-w-[1920px] mx-auto lg:px-[41px] md:px-[30px] sm:px-[20px] px-[10px]' } `}>
        {children}
    </div>
  )
}
