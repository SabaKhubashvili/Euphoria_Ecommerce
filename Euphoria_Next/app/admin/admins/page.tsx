import { ManageAdminsTable } from '@/app/components/admin/manageAdminsTable/ManageAdminsTable'
import { PageTop } from '@/app/components/admin/pageTop/PageTop'
import React from 'react'

const page = () => {
  return (
    <main>
        <PageTop pageTitle='Manage admins'/>
        <ManageAdminsTable/>
    </main>
  )
}

export default page