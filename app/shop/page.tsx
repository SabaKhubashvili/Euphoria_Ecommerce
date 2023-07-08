import React from 'react'
import { SmallBanner } from '../components/Banners/SmallBanner'
import { ShopProducts } from '../components/Shop/ShopProducts'
import { Container } from '../components/Container'

export const metadata = {
    title:'Shop',
    description:'Buy best clothing on market'
}

const Page = () => {
  return (
    <main>
        <div className='lg:mt-[100px] mt-[108px] '>
        <SmallBanner
            image='ShopBanner'
            title='shoping without limits.'
            subTitle='You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. We will deliver your purchase anywhere!'
            button
            />
        </div>
        <Container>
          <ShopProducts/>
        </Container>

    </main>
  )
}

export default Page