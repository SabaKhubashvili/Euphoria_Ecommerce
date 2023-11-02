import { useQuery } from "react-query"
import RestClient from "../RestClient/RequestTypes"
import BaseUrl from "../RestClient/ApiUrls"


export const getProductByLimit = (quantity:number) =>{
    return useQuery('getProductsByLimit',async()=>{
        const response =  await RestClient.GetRequest(BaseUrl.getLimitedProducts + quantity)
        return response.data
    })
}