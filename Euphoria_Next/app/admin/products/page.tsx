import { PageTop } from '@/app/components/admin/pageTop/PageTop'
import { AdminAllProducts } from '@/app/components/admin/products/AdminAllProducts'
import React from 'react'

const page = () => {
  return (
    <main>
        <PageTop pageTitle='All Products'/>
        <AdminAllProducts/>
    </main>
  )
}

export default page