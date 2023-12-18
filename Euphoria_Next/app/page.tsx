import { HomeBanner } from './components/Banners/HomeBanner'
import { Container } from './components/Container'
import { Brands } from './components/Brand/Brands'
import { BannersGroup } from './components/Banners/BannersGroup'
import { ProductsByTag } from './components/Product/ProductsByTag'
import { SmallBanner } from './components/Banners/SmallBanner'
import { ProductsByTagSlider } from './components/Product/ProductsByTagSlider'
import { SecondarySmallBanner } from './components/Banners/SecondarySmallBanner'
import { SmallBlogs } from './components/Blog/SmallBlogs'
import RestClient from './RestClient/RequestTypes'
import BaseUrl from './RestClient/ApiUrls'
import { productInterface } from './types'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title: "CRISP | ECOMMERCE SHOP",
  description: "High quality clothing shop, where you can buy unique and fashionable clothes",
};

export default async function Home() {
  const {data:FeaturedProductsData}:{data:productInterface[]} =  await RestClient.GetRequest(BaseUrl.getLimitedProducts + 27);
    
  return (
    <main className='pt-[130px] '>
        <HomeBanner/>
          <Container>
            <Brands/>
            <BannersGroup/>
            <ProductsByTag title='Shop some Wear:' data={FeaturedProductsData.slice(8)} />
            <div className='mt-[62px]'>
              <SmallBanner
                title='shoping without limits.'
                subTitle='You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. We will deliver your purchase anywhere!'
                button
                image='SmallBannerSlider'
                gradient='white'
                />
              </div>
            <ProductsByTagSlider 
              title='Featured Items' 
              sliderName='featured' 
              data={FeaturedProductsData.slice(0,8)}/>
            {/* <ProductsByTagSlider title='Most Popular' sliderName='trending' data={[]}/> */}
            <SecondarySmallBanner/>
          </Container>
          <SmallBlogs/>
    </main>
  )
}
