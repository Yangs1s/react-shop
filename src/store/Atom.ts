import { atom,selector } from 'recoil'
import { ItemProps } from '../api/types';
import axios from "axios"

export const ItemsState = atom<ItemProps[]>({
    key: 'items', 
    default: [], 
  });
export const ItemsSelector = selector<ItemProps[]>({
    key: 'items', 
    get:({get})=> get(ItemsState)
  });
  
export const slideState = atom<boolean>({
    key: 'slide', 
    default: false, 
  });




export const itemSelector = selector<ItemProps[]>({
    key:'itemSelector',
    get: async() =>{
    try{
      const response = await axios.get('https://fakestoreapi.com/products')
      return (await response.data) || [];
    } catch(e){
      console.log(e)
    }
    }
})
