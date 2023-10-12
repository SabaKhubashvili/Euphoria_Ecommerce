import {create} from 'zustand'
interface AllCustomersPagination{
    currentPage:number,
    customersPerPage: 10 | 20 | 30 | 40 | 50
    nextPage:()=>void,
    prevPage:()=>void,
    manualPage:(page:number)=>void,
    setCustomersPerPage: (number: 10 | 20 | 30 | 40 | 50) => void
}

export const useAllCustomersPagination = create<AllCustomersPagination>((set)=>({
    currentPage:1,
    customersPerPage: 10,
    nextPage:()=>{
        set((state)=>({
            currentPage: state.currentPage + 1
        }))
    },
    prevPage:()=>{
        set((state)=>({
            currentPage: state.currentPage - 1
        }))
    },
    manualPage:(page)=>{
        set(({
            currentPage: page
        }))
    },
    setCustomersPerPage:(perPage)=>{
        set({
            customersPerPage:perPage
        })
    }
}))