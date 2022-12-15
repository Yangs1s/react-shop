import React from 'react';
import { FaCcAmex, FaCcMastercard, FaCcPaypal, FaCcVisa } from 'react-icons/fa';
import { AiFillGithub, AiFillGoogleCircle, AiFillInstagram, AiFillTwitterCircle, AiOutlineFacebook } from 'react-icons/ai'
const Footer = () => {
    return (
        <footer className=" pt-3 flex flex-col items-center justify-center h-1/5 bg-zinc-900 text-yellow-50 w-screen">
            <ul className="flex justify-center w-full text-4xl">
                <li>
                <FaCcVisa/>
                </li>
                <li>
                <FaCcMastercard/>
                </li>
                <li>
                <FaCcAmex/>
                </li>
                <li>
                <FaCcPaypal/>
                </li>
            </ul>

            <ul className=" my-3 flex text-3xl"> 
                <li><AiFillGithub/></li>
                <li><AiFillGoogleCircle/></li>
                <li><AiOutlineFacebook/> </li>
                <li><AiFillInstagram/></li>
                <li><AiFillTwitterCircle/></li>
            </ul>
            <p className="font-extrabold">
            Copyright © 2022 Zero Base
            </p>
        </footer>
    );
};

export default Footer;