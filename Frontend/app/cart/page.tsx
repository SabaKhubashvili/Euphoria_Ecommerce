import React from 'react'
import { Container } from '../components/Container'
import { Cart } from '../components/Cart/Cart'
import { CartPage } from '../components/Cart/CartPage'

const Page = () => {
  return (
    <main className=" pt-[129px]">
    <Container>
      <CartPage/>
    </Container>
  </main>
  )
}

export default Page