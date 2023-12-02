import React from 'react'
import { SmallBanner } from '../components/Banners/SmallBanner'
import { ShopProducts } from '../components/Shop/ShopProducts'
import { Container } from '../components/Container'
import RestClient from '../RestClient/RequestTypes'
import BaseUrl from '../RestClient/ApiUrls'


export const metadata = {
    title:'Discover Your Perfect Style - Shop the Latest Trends in Fashion at CRISP',
    description:'Discover stylish clothing, footwear, and accessories that elevate your wardrobe. Explore our curated collection for quality fashion at CRISP.',
    // metadataBase: new URL("https://next-dashboard.pinkjelly.org/"),
}

const ShopPage = async() => {
  const {data:allProducts} = await RestClient.GetRequest(BaseUrl.getProducts);
  const {data:categories} = await RestClient.GetRequest(BaseUrl.getCategories);
  return (
    <main>
        <div className='lg:mt-[120px] mt-[108px] px-[10px]'>
        <SmallBanner
            image='ShopBanner'
            title='shoping without limits.'
            subTitle='You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. We will deliver your purchase anywhere!'
            button
            gradient='white'
            />
        </div>
        <Container>
          <ShopProducts products={allProducts} categories={categories}/>
        </Container>

    </main>
  )
}

export default ShopPage