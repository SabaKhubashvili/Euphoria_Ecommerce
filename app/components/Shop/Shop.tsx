'use client'

import React from 'react'
import { ProductComponent } from '../Product/ProductComponent'
import { SmallBanner } from '../Banners/SmallBanner'
import { products } from '@/app/constants'

interface Props{
  currentProducts: typeof products
}
export const Shop = ({currentProducts}:Props) => {
  return (
    <section className='flex flex-col gap-[44px] w-full pl-[15px] '>

        <div className="lg:basis-3/4 w-full grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1  gap-[26px]">
            {
              currentProducts.slice(0,4).map((product)=>(
                <ProductComponent {...product} />
              ))
            }
        </div>
              <SmallBanner
                    image='ShopBanner-2'
                    title='shoping without limits.'
                    subTitle='You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. We will deliver your purchase anywhere!'
                    button
                    gradient='black'
                    textColor='white'
                    small
                    />
          <div className="lg:basis-3/4 w-full grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1  gap-[26px]">
            {
                currentProducts.slice(4).map((product)=>(
                  <ProductComponent {...product} />
                ))
              }
        </div>
    </section>
  )
}
