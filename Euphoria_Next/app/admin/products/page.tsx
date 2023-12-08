import BaseUrl from '@/app/RestClient/ApiUrls'
import RestClient from '@/app/RestClient/RequestTypes'
import { PageTop } from '@/app/components/admin/pageTop/PageTop'
import { AdminAllProducts } from '@/app/components/admin/products/AdminAllProducts'
import React from 'react'

const page = async() => {
  const {data:products} = await RestClient.GetRequest(BaseUrl.getProducts)

  return (
    <main>
        <PageTop pageTitle='All Products'/>
        <AdminAllProducts products={products}/>
    </main>
  )
}

export default page