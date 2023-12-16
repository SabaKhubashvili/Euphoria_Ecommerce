import { useQuery } from "react-query"
import RestClient from "../RestClient/RequestTypes"
import BaseUrl from "../RestClient/ApiUrls"


export const useGetProductByLimit = (quantity:number) =>{
    return useQuery('useGetProductsByLimit',async()=>{
        const response =  await RestClient.GetRequest(BaseUrl.getLimitedProducts + quantity)
        return response.data
    })
}