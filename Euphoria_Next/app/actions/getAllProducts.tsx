import {
    useQuery
} from 'react-query'
import RestClient from '../RestClient/RequestTypes'
import BaseUrl from '../RestClient/ApiUrls'
import { productInterface } from '../types'

export const useGetAllProducts = () =>{
    return useQuery('allProducts',async()=>{
        const response = await RestClient.GetRequest(BaseUrl.getProducts)
        return response.data as productInterface[]
    })
}