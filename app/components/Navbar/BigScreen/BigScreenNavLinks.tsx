'use client'

import React from 'react'
import { BigScreenNavLink } from './BigScreenNavLink'

export const BigScreenNavLinks = () => {
  return (
    <div className='flex gap-[29px] items-center xl:ml-[90px]'>
        <BigScreenNavLink
            label='Home'
            to='/'
        />
        <BigScreenNavLink
            label='Shop'
            to='/shop'
        />
        <BigScreenNavLink
            label='Blog'
            to='/blog'
        />
        <BigScreenNavLink
            label='Sale'
            to='/sale'
        />
        <BigScreenNavLink
            label='Contact us'
            to='/contact'
        />
        <BigScreenNavLink
            label='Search'
            to='/search'
        />
    </div>
  )
}
