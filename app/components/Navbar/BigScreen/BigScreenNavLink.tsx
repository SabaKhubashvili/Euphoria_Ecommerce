'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

interface Props{
    to:string,
    label:string
}

export const BigScreenNavLink = ({to,label}:Props) => {
    const pathname = usePathname()
  return (
    <Link
        href={to}
        className={`uppercase text-white font-semibold text-[15px] relative  mx-auto px-auto flex flex-col items-center
        `}
        >
            {label}

            {
                pathname === to &&(
                    <div className='absolute -bottom-1 h-[2px] w-[120%] bg-secondary'>

                    </div>
                )
            }
    </Link>
  )
}
