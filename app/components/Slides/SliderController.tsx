import { NextIcon, PrevIcon } from '@/public/Svg/Icons'
import React from 'react'

interface Props{
    NextEl:string
    PrevEl:string
}

export const SliderController = ({NextEl,PrevEl}:Props) => {
  return (
    <div className='flex gap-[3px] lg:justify-end justify-between w-full'>
        <div className={`${PrevEl} cursor-pointer`}>
            <PrevIcon/>
        </div>
        <div className={`${NextEl} cursor-pointer`}>
            <NextIcon/>
        </div>
    </div>
  )
}
