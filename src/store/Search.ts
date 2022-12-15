import { atom } from "recoil"

export const searchKeywordState = atom({
    key:'keyword',
    default:''
  })
  export const searchListState = atom({
    key:'List',
    default:[]
  })