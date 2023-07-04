'use client'

import React from 'react'
import { Logo } from '../assets/Logo'
import { NewsLetter } from './NewsLetter'
import { SmallScreenFooterComponent } from './SmallScreenFooterComponent'
import { FooterContact, FooterFeatures, FooterMenu, FooterSocial } from '@/app/constants'


export const SmallScreenFooter = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-[102px] h-[44px]'>
        <Logo/>
      </div>
      <div className='pt-[27px] w-full flex flex-col gap-[24px]'>
            <SmallScreenFooterComponent content={FooterFeatures} title='Features'/>
            <SmallScreenFooterComponent content={FooterMenu} title='Menu'/>
            <SmallScreenFooterComponent content={FooterContact} title='contact us'/>
            <SmallScreenFooterComponent content={FooterSocial} title='Social'/>
            
            <NewsLetter/>
      </div>
    </div>
  )
}
