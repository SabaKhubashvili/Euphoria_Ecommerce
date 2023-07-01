import React from 'react'
import { Roboto } from '../assets/Fonts'
import { SecondaryInput } from '../Inputs/SecondaryInput'
import { GrayButton } from '../buttons/GrayButton'

export const NewsLetter = () => {
  return (
    <div className='xl:w-[280px] w-[200px]'>
          <h1 className='uppercase text-white font-semibold text-[18px]'>Join us</h1>
          <p className={`${Roboto.className} text-[13px uppercase] pt-[30px]`}>Subscribe to our newsletters</p>

          <div className='mt-[10px] flex flex-col gap-[7px]'>
                <SecondaryInput placeholder='Email Address'/>
                <GrayButton label='Subscribe!' onClick={()=>{}}/>
          </div>
    </div>
  )
}
