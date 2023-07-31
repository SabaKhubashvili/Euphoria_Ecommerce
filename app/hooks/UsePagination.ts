import { create } from "zustand";

interface PaginationStore{
    currentPage:number,
    nextPage:()=>void,
    previousPage:()=>void,
    manualPage:(value:number)=>void
}

export const usePagination = create<PaginationStore>((set)=>({
    currentPage:1,
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
    }
}))