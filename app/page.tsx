import { HomeBanner } from './components/Banners/HomeBanner'
import { Container } from './components/Container'
import { Brands } from './components/Brand/Brands'
import { BannersGroup } from './components/Banners/BannersGroup'

export default function Home() {

  return (
    <main>
        <HomeBanner/>

        <Container>
          <Brands/>
          <BannersGroup/>
        </Container>
    </main>
  )
}
