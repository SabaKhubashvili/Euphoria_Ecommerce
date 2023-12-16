import {
    useQuery
} from 'react-query'
import RestClient from '../RestClient/RequestTypes'
import BaseUrl from '../RestClient/ApiUrls'

export const useGetAllCategories = (token:string) =>{
    return useQuery('allCategories',async()=>{
        const response = await RestClient.GetRequest(BaseUrl.getCategories,token)
        return response.data
    })
}