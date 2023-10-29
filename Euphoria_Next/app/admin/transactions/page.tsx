import { PageTop } from '@/app/components/admin/pageTop/PageTop'
import { TransactionsTable } from '@/app/components/admin/transactions/TransactionsTable'
import React from 'react'

const page = () => {
  return (
    <main>
        <PageTop 
            pageTitle='Transactions'
        />
        <TransactionsTable/>
    </main>
  )
}

export default page