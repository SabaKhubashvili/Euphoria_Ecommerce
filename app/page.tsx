import { HomeBanner } from './components/Banners/HomeBanner'
import { Container } from './components/Container'
import { Brands } from './components/Brand/Brands'
import { BannersGroup } from './components/Banners/BannersGroup'
import { ProductComponent } from './components/Product/ProductComponent'
import { ProductsByTag } from './components/Product/ProductsByTag'
import { SmallBannerSlider } from './components/Banners/SmallBannerSlider'

export default function Home() {

  return (
    <main>
        <HomeBanner/>

        <Container>
          <Brands/>
          <BannersGroup/>
          <ProductsByTag title='Shop some Wear:'/>
          <SmallBannerSlider/>
        </Container>
    </main>
  )
}
