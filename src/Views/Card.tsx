import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { searchListState } from '../store/Search';


interface CardProps{
    id:number
    title:string;
    price:number
}


const Card = ({id,title, price}:CardProps) => {
    const [searchList,setSearchList] = useRecoilState(searchListState)
    return (
        <Link to ={`product/${id}`}>
        <li className="w-full h-[70px] border-y-2 bg-slate-400 text-sm relative pt-4 pb-5 m-0 flex flex-col items-center justify-center">
            <span>{title}</span>
            <span>{price}$</span>
        </li>
        </Link>
    );
};

export default Card;