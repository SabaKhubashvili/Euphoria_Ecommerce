'use client'

import Image from "next/image"

export const Logo = () => {
  return (
    <Image
        src={'/Images/Logo/logo.png'}
        alt="Logo"
        width={550}
        height={500}
        className="w-full h-full"
    />
  )
}
