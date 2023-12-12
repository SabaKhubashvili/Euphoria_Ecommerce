import BaseUrl from '@/app/RestClient/ApiUrls'
import RestClient from '@/app/RestClient/RequestTypes'
import { OrderManagmentVariations } from '@/app/components/admin/orderManagment/OrderManagmentVariations'
import { PageTop } from '@/app/components/admin/pageTop/PageTop'
import { PublicSans } from '@/app/components/assets/Fonts'
import { ordersInterface } from '@/app/types'
import { cookies } from 'next/headers'
import React from 'react'

const page = async() => {

  const {data:orders}:{data: ordersInterface[]} = await RestClient.GetRequest(BaseUrl.getOrders,cookies().get("accessToken")?.value)


  return (
    <main className={PublicSans.className}>
      <PageTop pageTitle='Order managment'/>
      <div className='pt-[44px]'>
        <OrderManagmentVariations orders={orders}/>
      </div>
   </main>
  )

}

export default page