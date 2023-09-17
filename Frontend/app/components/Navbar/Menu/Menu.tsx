'use client'

import React from 'react'
import { AuthButtons } from '../AuthButtons/AuthButtons'
import { CartIcon, HeartIcon, SearchIcon } from '@/public/Svg/Icons'
import { Roboto } from '../../assets/Fonts'
import useMediaQuery from '@/app/hooks/UseMediaQuery'
import Link from 'next/link'
import { isAuthenticated } from '@/app/Libs/IsAuthenticated'

export const Menu = () => {
  const isAboveLargeScreens = useMediaQuery('(min-width:1024px)')
  return (
    <div className='flex gap-[31px] basis-auto justify-end'>
      { isAboveLargeScreens && isAuthenticated() &&

        <AuthButtons/>
      }
        <div className='flex gap-[20px] items-center'>
          {isAboveLargeScreens ?

            <HeartIcon/>
            :
            <SearchIcon/>
          }
            <Link href={'/cart'} className='flex gap-[11px] items-center'>
              <div className='relative'>
                <CartIcon/>
                <div className='absolute text-[11px] text-center -top-3 lg:-left-3 lg:right-auto -right-3 rounded-md
                 text-white bg-secondary py-[1px] px-[5px] font-medium leading-[14px] tracking-[0.2px] '>
                  3
                </div>
              </div>
                { isAboveLargeScreens &&
                  <div>
                    <h3 className='leading-[20px] text-[13px] tracking-[0.12px] text-white h-fit '>Shopping Cart</h3> 
                    <h3 className={` ${Roboto.className} leading-[20px] font-bold  text-[15px] tracking-[0.12px] text-white h-fit`}>0,00 EUR</h3> 
                  </div>
                }
            </Link>
        </div>
    </div>
  )
}
