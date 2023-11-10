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
    brand:string[];
    size:string[];
    length:string[];
    color:string[];
    price:string[]
}
  
export interface ordersInterface{
    id: number;
  created_at: string;
  customer: string;
  total_price: number;
  profit: number;
  status: 'Confirmed' | 'Delivered' | 'Pending';
}
export interface Customer {
    name: string;
    email: string;
    phone: string;
    createdAt: string;
  }

export interface CartInterface{
    products:{
        productId:productInterface,
        quantity:number;

    }[]
    userId:string,
    _id:string,    
}