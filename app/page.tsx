import { HomeBanner } from './components/Banners/HomeBanner'
import { Container } from './components/Container'
import { Brands } from './components/Brand/Brands'

export default function Home() {

  return (
    <main>
        <HomeBanner/>

        <Container>
          <Brands/>
        </Container>
    </main>
  )
}
