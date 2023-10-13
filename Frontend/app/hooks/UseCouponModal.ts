import {create} from 'zustand'

interface couponModalStore{
    isOpen:boolean,
    onOpen:()=>void,
    onClose:()=>void
}

export const useCouponModal = create<couponModalStore>((set)=>({
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