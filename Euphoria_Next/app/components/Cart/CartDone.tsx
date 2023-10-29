'use client'
import React from 'react'
import { Icon } from '../Icon'
import { WebsiteIcons } from '@/public/Svg/IconsObject'
import { MainButton } from '../buttons/MainButton'
import { useRouter } from 'next/navigation'

export const CartDone = () => {
    const router = useRouter()
  return (
    <div className="flex flex-col  justify-center items-center pt-[86px]">
      <Icon svg={WebsiteIcons["AnimatedCheckmark"]} />
      <h1 className="text-[25px] text-center">Your order was succesfully placed</h1>
      <p className="pt-[10px] text-secondaryBlack text-center">
        You will recieve message on mail
      </p>
      <div className="pt-[35px]">
        <MainButton
          label="Back to home"
          onClick={() => {
            router.push("/");
          }}
        />
      </div>
    </div>
  );
}
