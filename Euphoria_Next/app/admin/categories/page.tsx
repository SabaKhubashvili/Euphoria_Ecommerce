import { CategoriesTable } from '@/app/components/admin/categoriesTable/CategoriesTable'
import { PageTop } from '@/app/components/admin/pageTop/PageTop'
import React from 'react'

const page = () => {
  return (
    <main className=''>
        <PageTop pageTitle='Categories'/>
        <div className='pt-[47px]'>
          <CategoriesTable/>
        </div>
    </main>
  )
}

export default page