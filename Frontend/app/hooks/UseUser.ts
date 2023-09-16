import {create} from 'zustand'

interface UserStore{
    jwtToken: string | undefined,
    isAuthenticated:boolean,
    setJwtToken:(token:string | undefined)=>void
    setIsAuthenticated:(isAuthenticated:boolean)=>void
}

export const UseUser = create<UserStore>((set)=>({
    jwtToken:'',
    isAuthenticated:false,
    setJwtToken:(token: string | undefined)=>{
        set((prev)=>({
            jwtToken:token
        })) 
    },
    setIsAuthenticated:(isAuthenticated:boolean)=>{
        set((prev)=>({
            isAuthenticated:isAuthenticated
        }))
    }
}))