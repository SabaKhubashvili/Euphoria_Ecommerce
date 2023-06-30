import { HomeBanner } from './components/Banners/HomeBanner'
import { Container } from './components/Container'
import { Brands } from './components/Brand/Brands'
import { BannersGroup } from './components/Banners/BannersGroup'
import { ProductsByTag } from './components/Product/ProductsByTag'
import { SmallBanner } from './components/Banners/SmallBanner'
import { ProductsByTagSlider } from './components/Product/ProductsByTagSlider'
import { SecondarySmallBanner } from './components/Banners/SecondarySmallBanner'
import { SmallBlogs } from './components/Blog/SmallBlogs'

export default function Home() {

  return (
    <main>
        <HomeBanner/>

        <Container>
          <Brands/>
          <BannersGroup/>
          <ProductsByTag title='Shop some Wear:'/>
          <SmallBanner/>
          <ProductsByTagSlider title='Featured Items' sliderName='featured'/>
          <ProductsByTagSlider title='Most Popular' sliderName='trending'/>
          <SecondarySmallBanner/>
        </Container>
          <SmallBlogs/>
    </main>
  )
}
