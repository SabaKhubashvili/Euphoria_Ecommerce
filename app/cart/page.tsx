import React from 'react'
import { Container } from '../components/Container'
import { Cart } from '../components/Cart/Cart'

const Page = () => {
  return (
    <main className=" pt-[129px]">
    <Container>
      <div>
        <p className="text-gray text-[14px]  text-center">
            Home / Shopping Cart
        </p>
        <h1 className=" sm:text-[48px] xs:text-[35px] text-[30px] xs:leading-[68px] pt-[13px]  text-center ">
          Shopping Cart
        </h1>
        <div className='mt-[55px] max-w-[1600px] mx-auto'>
            <Cart/>
        </div>
      </div>
    </Container>
  </main>
  )
}

export default Page