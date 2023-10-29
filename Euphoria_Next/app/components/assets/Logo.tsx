'use client'

import Image from "next/image"

export const Logo = ({dark}:{dark?:boolean}) => {
  return (
    <Image
        src={dark ? '/Images/Logo/logo_dark.png' : '/Images/Logo/logo.png'}
        alt="Logo"
        width={550}
        height={500}
        className="w-full h-full select-none"
    />
  )
}
