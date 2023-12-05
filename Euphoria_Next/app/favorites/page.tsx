import React from 'react'
import { Container } from '../components/Container'
import { ProductComponent } from '../components/Product/ProductComponent'
import { productInterface, products } from '../constants'
import RestClient from '../RestClient/RequestTypes'
import BaseUrl from '../RestClient/ApiUrls'
import { cookies } from 'next/headers'

const page =  async() => {
  const {data}:{data:{favorites:productInterface[]}} = await RestClient.GetRequest(BaseUrl.getFavorites , cookies().get("accessToken")?.value)
  
  return (
    <main className='pt-[130px] '>
      <Container>
        <div className='flex justify-center items-center'>
          <h1 className='uppercase font-bold text-[25px]'>My favorites</h1>
        </div>
          {
            data.favorites.length > 0 ?
        <div className='grid 2xl:grid-cols-6  lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 lg:gap-[26px] gap-[6px]'>
          {data.favorites.map(product=>(
            <ProductComponent {...product} />
          ))}
        </div>
          :
          <div className='py-[300px] flex justify-center items-center w-full md:text-[25px] text-[16px]'>
            There are nothing in favorites
          </div>
        }
      </Container>
    </main>
  )
}

export default page