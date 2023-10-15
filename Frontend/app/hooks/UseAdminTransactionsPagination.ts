import {create} from 'zustand'

interface AdminTransactionsPagination{
    currentPage:number,
    transactionsPerPage: 10 | 20 | 30 | 40 | 50
    nextPage:()=>void,
    prevPage:()=>void,
    manualPage:(page:number)=>void,
    setTransactionsPerPage: (number: 10 | 20 | 30 | 40 | 50) => void
}

export const useAdminTransactionsPagination = create<AdminTransactionsPagination>((set)=>({
    currentPage:1,
    transactionsPerPage: 10,
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
    setTransactionsPerPage:(perPage)=>{
        set({
            transactionsPerPage: perPage
        })
    }
}))