import React from 'react'
import { Container } from '../components/Container'
import { ProductComponent } from '../components/Product/ProductComponent'
import { products } from '../constants'

const page = () => {
  return (
    <main className='pt-[130px] '>
      <Container>
        <div className='flex justify-center items-center'>
          <h1 className='uppercase font-bold text-[25px]'>Your favorites</h1>
        </div>
        
        <ProductComponent {...products[0]} />
      </Container>
    </main>
  )
}

export default page