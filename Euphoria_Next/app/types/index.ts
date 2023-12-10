import { productInterface } from "../constants";

export interface footerComponentsType{
    title: string;
    content: SingleFooterComponentRowType[];
}
export interface SingleFooterComponentRowType {
    mainTitle?: string;
    title: string;
    to?: string;
}
export interface FilterInterface{
    category:string[]
    brand:string[];
    size:string[];
    price:string[]
}

export interface CategoryInterface{
    _id:string,
    name:string
}

export interface ordersInterface{
   _id:string,
   userId:string,
   products:{
    id:string,
    quantity:number,
    size:string
   }[],
   adressInfo:{
    email:string,
    city:string,
    phone:string,
    streetAdress:string,
    fistname:string
   },
   status: 'Paid' | 'Pending' | 'Delivered'
}
export interface Customer {
    name: string;
    email: string;
    phone: string;
    createdAt: string;
  }

export interface CartInterface{
    products:CartRowInterface[]
    userId:string,
    _id:string,    
}
export interface CartRowInterface{
    product:productInterface,
    quantity:number;
    size?:string
    _id:string
}