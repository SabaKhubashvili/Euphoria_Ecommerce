'use client'

import { RightArrow } from '@/public/Svg/Icons'
import Link from 'next/link'
import React from 'react'

interface Props{
    label:string,
    to:string
}

export const SmallScreenNavLink = ({label,to}:Props) => {
  return (
    <Link
        href={to}
        className='text-[18px] font-medium uppercase text-center flex justify-between items-center'
    >
        {label}
        <div>
            <RightArrow/>
        </div>
    </Link>
  )
}
