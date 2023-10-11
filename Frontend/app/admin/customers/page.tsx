import { PageTop } from '@/app/components/admin/pageTop/PageTop'
import { MainTable } from '@/app/components/tables/MainTable'
import { customers } from '@/app/constants'
import React from 'react'

const page = () => {
  return (
    <main>
      <PageTop pageTitle='Customers'/>
      <MainTable
          bodyContent={customers}
          topContent={[
            "Name",
            "Phone Number",
            "Created",
            "Action",
          ]}
          type="primary"
          notFoundMessage="No order was found"
        />
    </main>
  )
}

export default page