import { create } from 'zustand';
import { CartInterface, CartRowInterface } from '../types';

interface Store  {
  cartData:CartInterface,
  setCartData: (cartData: { _id: string; userId: string; products: CartRowInterface[] }) => void;
}

export const useCartStore = create<Store>((set) => ({

  cartData:  {  
    _id: '',
    userId: '',
    products: [],
  },
  setCartData: (cartData: { _id: string; userId: string; products: CartRowInterface[] }) => {
    set({
     cartData:{
       _id: cartData._id,
       userId: cartData.userId,
       products: cartData.products,
      } 
    });
  },
}));
