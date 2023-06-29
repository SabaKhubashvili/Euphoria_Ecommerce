'use client'

import Image from 'next/image'
import React from 'react'

interface Props{
    image:string
}


export const Brand = ({image}:Props) => {
  return (
    <div className='xs:px-[46px] h-[80px] xl:w-[170px] lg:w-[150px] md:w-[181px] xs:w-[160px]
     w-full md:border-none border-[1px] border-black flex items-center  '>
        <Image
            src={`/Images/Brands/${image}.webp`}
            alt='Brand'
            width={400}
            height={400}
            className='w-full  xs:max-w-none max-w-[120px]  mx-auto '
        />
</div>
  )
}
