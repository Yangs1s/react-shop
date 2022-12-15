import React from 'react';
import { useRecoilState } from 'recoil';
import { amountState } from '../store/cart';

const AddToCartBtn = () => {
    const [count,setCount] = useRecoilState(amountState)

    const addToCart = () =>{

        setCount(prev => prev+1)
    }
    return (
        <>
            <button 
            className="bg-yellow-500 rounded-lg" 
            onClick={addToCart}>Add To Cart</button>
        </>
    );
};

export default AddToCartBtn;