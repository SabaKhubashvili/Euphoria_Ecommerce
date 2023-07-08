'use client'

import React from 'react'
import { ProductComponent } from '../Product/ProductComponent'

export const Shop = () => {
  return (
   <div className="lg:basis-3/4 w-full grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1  gap-[26px]">
      <ProductComponent/>
      <ProductComponent/>
      <ProductComponent/>
      <ProductComponent/>
      <ProductComponent/>
      <ProductComponent/>
      <ProductComponent/>
   </div>
  )
}
