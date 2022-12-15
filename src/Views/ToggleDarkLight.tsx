import React, { useState } from 'react';

import { CiDark ,CiSun,CiShoppingCart} from "react-icons/ci"

interface DarkModeProps{
    darkMode:boolean
    toggleDarkMode:() => void
}


const ToggleDarkLight = ({darkMode,toggleDarkMode}:DarkModeProps) => {
    return (
        <div className="flex ml-auto w-auto">
        <div onClick={toggleDarkMode} className="ml-auto flex items-center">
            <div className=" flex border-[1px] border-zinc-300 rounded-[8px] bg-slate-100 w-[100px] h-10 mx-4 font-bold">
            {
            !darkMode?
            <>
                <div className="w-24 py-2 px-1 bg-red-500 text-center text-sm rounded-[8px]">
                    <span className=" py-2">Light</span>
                </div>
                <CiSun className="w-full h-10 text-xl pb-1"/>
            </>
                :
                <>
                    <CiDark className={`w-full h-10 text-xl text-center pb-1 text-black`}/>
                    <div className={`w-24 py-2 px-1 text-center p-1 bg-purple-500 rounded-lg font-bold ease-linear duration-150 text-sm ${!darkMode ? "translate-x-20":"translate-x-0"} `}>Dark</div>
                </>
            }
            </div>
        </div>

   
    </div>
    );
};

export default ToggleDarkLight;