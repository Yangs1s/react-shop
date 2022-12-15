import { atom } from "recoil";

export const DarkModeState = atom<boolean>({
    key: 'DarkMode', 
    default: true, 
  });
