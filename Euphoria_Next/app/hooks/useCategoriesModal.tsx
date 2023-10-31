import {create} from 'zustand'

interface categoriesModalStore{
    isOpen:boolean,
    onOpen:()=>void,
    onClose:()=>void
}

export const useCategoriesModal = create<categoriesModalStore>((set)=>({
    isOpen:false,
    onOpen:()=>{
        set(()=>({
            isOpen:true
        }))
    },
    onClose:()=>{
        set(()=>({
            isOpen:false
        }))
    },
}))