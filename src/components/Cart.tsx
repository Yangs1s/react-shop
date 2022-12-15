import "react-responsive-carousel/lib/styles/carousel.min.css"
import { useRecoilState, useRecoilValue } from 'recoil'
import ItemList from './ItemList';
import { DarkModeState } from '../store/DarkMode';
import { amountState, CartState, cartState, deliveryChargeState, totalPriceState } from "../store/cart";
const Cart = () => {
    
    const darkMode = useRecoilState<boolean>(DarkModeState)
    const amount = useRecoilValue<any>(amountState)
    const [carts, setCarts] = useRecoilState<CartState[]>(cartState)

    const totalPrice = useRecoilValue(totalPriceState)
    const deliveryCharge = useRecoilValue(deliveryChargeState)

    console.log(carts)
    return (
        
        <section className={`w-screen h-screen flex flex-col j justify-center items-center ${darkMode[0] ? "dark":"light"}` }>
            <h1 className="mb-10"> CART </h1>
            {carts.map((item,idx)=>{
                return(
                <div className="flex m-3 w-[900px] border-2">
                    <div className="flex items-center w-1/12 justify-center">
                        <h2 className="text-sm">{idx+1}</h2>
                    </div>
                    <figure className="w-32 h-32 p-3 border-x-2">
                        <img src="https://via.placeholder.com/150" alt="상품 이미지" className="w-full h-full" />
                    </figure>
                    <div className="w-3/5 border-r-2 flex items-center">
                        <p className="px-10 w-full">{}</p>
                    </div>
                    <div className="w-1/6 flex items-center justify-center border-r-2">
                        <p>{amount}</p>
                    </div>
                    <div className="w-1/5 flex items-center">
                        <p className="p-3 text-center">price: 300$</p>
                    </div>
                </div>
                )
            })}

            <div>
                Total:{totalPrice + deliveryCharge}
            </div>
        </section>
    );
};

export default Cart;