import { AddOrEditProduct } from '@/app/components/admin/addOrEditProduct/addOrEditProduct'
import React from 'react'
import RestClient from "@/app/RestClient/RequestTypes";
import BaseUrl from "@/app/RestClient/ApiUrls";
import { CategoryInterface } from '@/app/types';
import { productInterface } from '@/app/constants';


const page = async({
  searchParams
}:{
  searchParams:{
    productId?:string
  }
}) => {
  let product;
  const {data:categories} = await RestClient.GetRequest(BaseUrl.getCategories)  as { data: CategoryInterface[] };
  if(searchParams.productId){
    try{

      const {data} = await RestClient.GetRequest(BaseUrl.getProductById + `/${searchParams.productId}`);
      product = data
    }catch(error){
      console.log(error);
      
    }
  }
  
  
  return (
    <main>
        <AddOrEditProduct categories={categories} product = {product ? product : null}/>
    </main>    
)
}

export default page