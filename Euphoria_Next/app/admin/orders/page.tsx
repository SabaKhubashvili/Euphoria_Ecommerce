import { OrderManagmentVariations } from '@/app/components/admin/orderManagment/OrderManagmentVariations'
import { PageTop } from '@/app/components/admin/pageTop/PageTop'
import { PublicSans } from '@/app/components/assets/Fonts'
import React from 'react'

const page = () => {
  return (
   <main className={PublicSans.className}>
    <PageTop pageTitle='Order managment'/>
    <div className='pt-[44px]'>
      <OrderManagmentVariations/>
    </div>
   </main>
  )
}

export default page