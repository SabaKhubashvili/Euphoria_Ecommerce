import { create } from 'zustand';
import { FilterConstant } from '../constants';
import { FilterInterface } from '../types';



interface FilterStore {
  filter: FilterInterface;
  addFilter: (key: keyof  FilterInterface, value: string) => void;
  deleteFilter: (key: keyof  FilterInterface, value: string) => void;
  handlePriceChange: (e:number[]) => void,
  resetFilter:()=>void
  priceFrom:'low' | 'high' | null,
  setPriceSort:(value: 'low' | 'high')=> void,
  title:string,
  setTitle:(val:string)=>void
}

export const useFilter = create<FilterStore>((set) => ({
  filter: {
    brand: [],
    size: [],
    length: [],
    color: [],
    price:[]
  },
  title:'',
  priceFrom:null,
  addFilter: (key, value) => {
    set((state) => ({
      filter: {
        ...state.filter,
        [key]: [...state.filter[key], value],
      },
    }));
  },
  deleteFilter: (key, value) => {
    set((state) => ({
      filter: {
        ...state.filter,
        [key]: state.filter[key].filter((item) => item !== value),
      },
    }));
  },
  handlePriceChange: (e) => {
    set((state)=>({
        filter:{
            ...state.filter,
            price: [e.toString()]
        }
    }))
  },
  resetFilter: () =>{
    set((state)=>({
      filter:{
        brand: [],
        size: [],
        length: [],
        color: [],
        price:[]
      }
    }))
  },
  setPriceSort:(price)=>{
    set(({
        priceFrom:price
    }))
},
  setTitle:(val:string)=>{
    set(({
      title:val
    }))
  }
}));
