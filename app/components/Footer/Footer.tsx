'use client'

import { CheckMarkIcon } from '@/public/Svg/Icons'
import React from 'react'
import { Container } from '../Container'
import { BigScreenFooter } from './BigScreenFooter'
import useMediaQuery from '@/app/hooks/UseMediaQuery'
import { largeScreens } from '@/app/Screens/Screens'
import { SmallScreenFooter } from './SmallScreenFooter'

export const Footer = () => {
  const isAboveLargeScreens = useMediaQuery(largeScreens)

  return (
    <footer>
      <div className='bg-main py-[35px] '>
        <div className='lg:w-full w-fit flex lg:justify-around  lg:flex-row flex-col lg:mx-0 mx-auto'>
          <div className='flex gap-[14px] items-center '>
            <CheckMarkIcon/>
            Duties and Taxes Guaranteed
          </div>
          <div className='flex gap-[14px] items-center'>
            <CheckMarkIcon/>
            Free Express Shipping
          </div>
          <div className='flex gap-[14px] items-center'>
            <CheckMarkIcon/>
            Customer Love
          </div>
          <div className='flex gap-[14px] items-center'>
            <CheckMarkIcon/>
            Easy Returns
          </div>
          <div className='flex gap-[14px] items-center'>
            <CheckMarkIcon/>
            Secure Payment
          </div>
        </div>
      </div>

      <section className='bg-black pt-[65px] pb-[114px]'>
        <Container>
          { isAboveLargeScreens ? 

            <BigScreenFooter/>
            :
            <SmallScreenFooter/>
          }
        </Container>
      </section>
    </footer>
  )
}
