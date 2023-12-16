import React from 'react'
import { Container } from '../components/Container'
import { ProductComponent } from '../components/Product/ProductComponent'
import RestClient from '../RestClient/RequestTypes'
import BaseUrl from '../RestClient/ApiUrls'
import { cookies } from 'next/headers'
import { productInterface } from '../types'

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
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
            {data.favorites.map((product, key) => (
              <div className="h-[140vw] xs:h-[70vw] md:h-[50vw] lg:h-[35vw] 2xl:h-[25vw]">
                <ProductComponent key={product._id} {...product} />
              </div>
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

export default page;