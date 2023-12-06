import {
    useQuery
} from 'react-query'
import RestClient from '../RestClient/RequestTypes'
import BaseUrl from '../RestClient/ApiUrls'

export const useGetAllCoupons = (token:string) =>{
    return useQuery('allCoupons',async()=>{
        const response = await RestClient.GetRequest(BaseUrl.getCoupons,token)
        return response.data
    })
}