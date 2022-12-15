import { GiHamburgerMenu } from "react-icons/gi"
import { FaShopify } from "react-icons/fa"
import { Link } from "react-router-dom";
import {useRecoilState, useRecoilValue} from "recoil"
import SibeBar from "../Views/SibeBar";
import ToggleDarkLight from "../Views/ToggleDarkLight";
import { slideState } from "../store/Atom";
import { CiShoppingCart } from "react-icons/ci";
import Search from "./Search";
import { DarkModeState } from "../store/DarkMode";
import { amountState, cartState } from "../store/cart";

const Nav = () => {
    const [isopen,setIsOpen] = useRecoilState<boolean>(slideState);
    const [isdark,setIsDark] = useRecoilState<boolean>(DarkModeState)
    const darkMode = useRecoilValue<boolean>(DarkModeState)
    const count = useRecoilValue<number>(amountState)
    const openSideBar = ()=>{
        setIsOpen((prev)=>!prev)
    };

    const changeDark = () =>{
        setIsDark((prev) => !prev)
    }

    return (
        <>
        <nav className={`bg-black w-full fixed top-0 left-0 z-10 ease-out duration-100 ${darkMode?"dark-nav":"light-nav"} border-b-2 `}>
            <div className="flex w-full text-center my-auto xl:container xl:m-auto p-3 items-center">
                <label className="flex-none lg:hidden btn btn-square btn-ghost w-10 sm:w-auto">
                <GiHamburgerMenu className="text-3xl mr-4" onClick={openSideBar}/>
                </label>

       
                <Link to='/' className="flex items-center">
                    <FaShopify className="text-2xl"/>
                    <h1 className="text-4xl font-extrabold mr-4">MYSHOP</h1>
                </Link>
                <div className="flex justify-between md:flex sm:hidden">
                    <Link to="/fashion" className="mr-2">Fashion</Link>
                    <Link to="/digital" className="mr-2">Digital</Link>
                    <Link to="/acc" className="mr-2">Accesary</Link>
                </div>
                
                <div className="flex ml-auto">
                    <ToggleDarkLight darkMode={isdark} toggleDarkMode={changeDark}/>
                        <Search/>
                        <div className="ml-3 w-9 relative">
                        <Link to="/cart">
                            <CiShoppingCart className="w-9 h-9 cursor-pointer"/>
                        </Link>
                    <span className="rounded-xl bg-red-600 w-4 h-4 text-xs m-0 absolute top-0 right-0">{count}</span>
        </div>
                </div>
            </div>
        <SibeBar onClose={openSideBar} isOpen={isopen}/>
        </nav>
        

    
        </>
    );
};

export default Nav;