import { atom, selector } from "recoil";


export interface ItemsRecord {
  image:string;
  title:string;
  quantitiy:number;
  price:number
}

export interface CartState {
  items:Record<string | number, ItemsRecord>
}


export const cartState = atom<CartState[]>({
    key: "cartState",
    default:[]
  });


export  const amountState = atom({
    key: "itemAmount",
    default: 1
  });


export const selectOptionState = atom({
    key:'selectOption',
    default:0
  })


export const totalPriceState = selector({
  key:'totalPrice',
  get: ({get})=>
    get(cartState)
    .map(({total_price}:any)=> total_price)
    .reduce((prev:number, current:number)=> prev + current, 0),
  
})

export const deliveryChargeState = selector({
  key:'deliveryCharge',
  get:({get})=>(get(totalPriceState)>=100 ? 0 : 15),
});


