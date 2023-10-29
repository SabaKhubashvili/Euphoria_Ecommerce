import {create} from 'zustand'

interface AdminOrdersPagination{
    currentPage:number,
    ordersPerPage: 10 | 20 | 30 | 40 | 50
    nextPage:()=>void,
    prevPage:()=>void,
    manualPage:(page:number)=>void,
    setOrdersPerPage: (number: 10 | 20 | 30 | 40 | 50) => void
}

export const useAdminOrdersPagination = create<AdminOrdersPagination>((set)=>({
    currentPage:1,
    ordersPerPage: 10,
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
    setOrdersPerPage:(perPage)=>{
        set({
            ordersPerPage: perPage
        })
    }
}))