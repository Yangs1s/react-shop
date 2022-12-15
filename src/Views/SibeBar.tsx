
import { FaShopify } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface sideBarProp {
    onClose:()=>void
    isOpen:boolean
}


const SibeBar = (props:sideBarProp) => {
    return (
            <div className={` ease-in-out duration-300 z-50 ${props.isOpen ? "translate-x-20" : "translate-x-0"} `}>

        {
        props.isOpen 
        ?
        <div className="min-h-screen bg-slate-700 fixed z-40 p-12 text-yellow-50 top-[0px] left-[-80px]" onClick={props.onClose}>
    
            <Link to='/' className="flex items-center">
                    <FaShopify className="text-3xl"/>
                    <h1 className="text-3xl text-center p-1 font-extrabold mr-4">MYSHOP</h1>
                </Link>
                <div className="flex flex-col p-2  md:flex lg:hidden">
                    <Link to="/fashion" className="mt-2">Fashion</Link>
                    <Link to="/digital" className="mt-2">Digital</Link>
                    <Link to="/acc" className="mt-2">Accesary</Link>
                </div>
        </div>
        :''
    }
    </div>
    );
};

export default SibeBar
