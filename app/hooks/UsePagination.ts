import { create } from "zustand";

interface PaginationStore{
    currentPage:number,
    productPerPage: 16 | 32 | 48 | 64,
    nextPage:()=>void,
    previousPage:()=>void,
    manualPage:(value:number)=>void,
    setProductPerPage:(value: 16 | 32 | 48 | 64) => void
}

export const usePagination = create<PaginationStore>((set)=>({
    currentPage:1,
    productPerPage: 16,
    nextPage:()=>{
        set((state)=>({
            currentPage:state.currentPage + 1
        }))
    },
    previousPage:()=>{
        set((state)=>({
            currentPage:state.currentPage - 1
        }))
    },
    manualPage:(page)=>{
        set(({
            currentPage:page
        }))
    },
    setProductPerPage: (value)=>{
        set(({
            productPerPage:value
        }))
    }
}))