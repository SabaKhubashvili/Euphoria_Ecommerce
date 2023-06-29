'use client'

import React from 'react'

export const AuthButtons = () => {
  return (
    <div className='flex gap-[12px]'>
        <button className='uppercase font-semibold text-[15px] text-white whitespace-nowrap'>
            SIGN IN
        </button>
        <button className='uppercase font-semibold text-[15px] text-white whitespace-nowrap'>
            CREATE AN ACCOUNT
        </button>
    </div>
  )
}
