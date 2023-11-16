import { AddOrEditProduct } from '@/app/components/admin/addOrEditProduct/addOrEditProduct'
import React from 'react'
import RestClient from "@/app/RestClient/RequestTypes";
import BaseUrl from "@/app/RestClient/ApiUrls";
import { CategoryInterface } from '@/app/types';


const page = async() => {
  const {data:categories} = await RestClient.GetRequest(BaseUrl.getCategories)  as { data: CategoryInterface[] };;

  return (
    <main>
        <AddOrEditProduct categories={categories}/>
    </main>    
)
}

export default page