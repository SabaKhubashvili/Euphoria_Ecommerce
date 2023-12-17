'use cLinkent'

import React from 'react'
import { Roboto } from '../assets/Fonts'
import { Logo } from '../assets/Logo'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '@/public/Svg/Social'
import { NewsLetter } from './NewsLetter'
import Link from 'next/link'

export const BigScreenFooter = () => {
  return (
    <div className='flex justify-between lg:flex-row flex-col '>
            <div className='w-[93.628px] h-[36.5px] '>
              <Logo/>
            </div>
            <div className='flex flex-col gap-[30px]'>
              <h1 className='uppercase text-white font-semibold text-[18px]'>features</h1>
              <ul className={`${Roboto.className} flex flex-col gap-[5px]`}>
                <Link href={'/shop'} className='text-gray text-[13px] uppercase'>Men</Link>
                <Link href={'/shop'} className='text-gray text-[13px] uppercase'>Women</Link>
                <Link href={'/shop'} className='text-gray text-[13px] uppercase'>Boys</Link>
                <Link href={'/shop'}className='text-gray text-[13px] uppercase'>Girls</Link>
                <Link href={'/shop'} className='text-gray text-[13px] uppercase'>New Arrivals</Link>
                <Link href={'/shop'} className='text-gray text-[13px] uppercase'>Shoes</Link>
                <Link href={'/shop'} className='text-gray text-[13px] uppercase'>Clothes</Link>
                <Link href={'/shop'} className='text-gray text-[13px] uppercase'>Accessories</Link>
              </ul>
            </div>
            <div className='flex flex-col gap-[30px]'>
              <h1 className='uppercase text-white font-semibold text-[18px]'>Menu</h1>
              <ul className={`${Roboto.className} flex flex-col gap-[5px]`}>
                <li className='text-gray text-[13px] uppercase'>About us</li>
                {/* <Link className='text-gray text-[13px] uppercase'>Contact us</Link> */}
                {/* <Link className='text-gray text-[13px] uppercase'>My accaunt</Link> */}
                {/* <Link className='text-gray text-[13px] uppercase'>Orders history</Link> */}
                <Link href={'/favorites'} className='text-gray text-[13px] uppercase'>My favorites</Link>
                {/* <Link className='text-gray text-[13px] uppercase'>Blog</Link> */}
                <Link href={'/login'} className='text-gray text-[13px] uppercase'>Login</Link>
              </ul>
            </div>
            <div className='flex flex-col gap-[30px]'>
              <h1 className='uppercase text-white font-semibold text-[18px]'>contact us</h1>
              <ul className={`${Roboto.className} flex flex-col gap-[5px]`}>
                <li className='text-gray text-[13px] uppercase font-medium'>
                  <h1 className='text-white'> About us:</h1>
                  <p className='text-gray'>123 Street Name, City, England</p>
                </li>
                <li className='text-gray text-[13px] uppercase font-medium'>
                  <h1 className='text-white'> Phone:</h1>
                  <p className='text-gray'>+995 598438788</p>
                </li>
                <li className='text-gray text-[13px] uppercase font-medium'>
                  <h1 className='text-white'> Email:</h1>
                  <a  href='mailto:khubasvhiLink.saba12@gmail.com' target='_blank' className='text-gray'>khubasvhiLink.saba12@gmail.com</a>
                </li>
                <li className='text-gray text-[13px] uppercase font-medium'>
                  <h1 className='text-white'> Working Days/Hours:</h1>
                  <p className='text-gray'>Mon - Sun / 9:00AM - 8:00PM</p>
                </li>
              </ul>
            </div>
            <div className='flex flex-col gap-[30px]'>
              <h1 className='uppercase text-white font-semibold text-[18px]'>follow us</h1>
              <ul className={`${Roboto.className} flex flex-col gap-[26px]`}>
                <li className='text-gray text-[13px] uppercase'>
                  <a href="https://www.facebook.com/profile.php?id=100011187067102" className='flex gap-[18px]' target='_blank'>
                    <FacebookIcon/>
                    <p className='text-gray '>Facebook</p>
                  </a>
                </li>
                <li className='text-gray text-[13px] uppercase '>
                  <a href="https://www.Linknkedin.com/in/sabakhubashviLink/" className='flex gap-[18px]'  target='_blank'>
                    <LinkedinIcon/>
                    <p className='text-gray '>Linknkedin</p>
                  </a>
                </li>
                <li className='text-gray text-[13px] uppercase'>
                  <a href="https://www.instagram.com/xubashviLink.saba12/" target='_blank' className='flex gap-[18px]'>
                    <InstagramIcon/>
                    <p className='text-gray '>Instagram</p>
                  </a>
                </li>
              </ul>
            </div>
            <NewsLetter/>
          </div>
  )
}
