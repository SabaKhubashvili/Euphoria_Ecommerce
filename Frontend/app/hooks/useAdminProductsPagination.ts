import {create} from 'zustand'
interface AllCustomersPagination{
    currentPage:number,
    categoriesPerPage: 10 | 20 | 30 | 40 | 50
    nextPage:()=>void,
    prevPage:()=>void,
    manualPage:(page:number)=>void,
    setCategoriesPerPage: (number: 10 | 20 | 30 | 40 | 50) => void
}

export const useAdminProductsCategoriesPagination = create<AllCustomersPagination>((set)=>({
    currentPage:1,
    categoriesPerPage: 10,
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
    setCategoriesPerPage:(perPage)=>{
        set({
            categoriesPerPage: perPage
        })
    }
}))