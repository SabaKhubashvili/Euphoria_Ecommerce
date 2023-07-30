import { create } from "zustand";

interface PaginationStore{
    currentPage:number,
    nextPage:()=>void,
    previousPage:()=>void
}

export const usePagination = create<PaginationStore>((set)=>({
    currentPage:0,
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
}))