'use client'

import React from 'react'
import { SmallScreenNavLink } from './SmallScreenNavLink'

export const SmallScreenNavLinks = () => {
  return (
    <div className='flex flex-col gap-[15px]'>
     <SmallScreenNavLink
            label='Home'
            to='/'
        />
        <SmallScreenNavLink
            label='Shop'
            to='/shop'
        />
        <SmallScreenNavLink
            label='Blog'
            to='/blog'
        />
        <SmallScreenNavLink
            label='Sale'
            to='/sale'
        />
        <SmallScreenNavLink
            label='Contact us'
            to='/contact'
        />
        <SmallScreenNavLink
            label='Search'
            to='/search'
        />
    </div>
  )
}
