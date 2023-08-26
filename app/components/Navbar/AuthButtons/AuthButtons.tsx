'use client'

import Link from 'next/link'
import React from 'react'

export const AuthButtons = () => {
  return (
    <div className='flex gap-[12px] items-center'>
        <Link href={'/login'} className='uppercase font-semibold xl:text-[15px] text-[13px] text-white whitespace-nowrap'>
            SIGN IN
        </Link>
        <Link href={'/register'} className='uppercase font-semibold xl:text-[15px] text-[13px] text-white whitespace-nowrap'>
            CREATE AN ACCOUNT
        </Link>
    </div>
  )
}
