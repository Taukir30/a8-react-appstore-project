import React from 'react';
import logo from '../../assets/logo.png'
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className='bg-[#001931]'>
            <div className="footer sm:footer-horizontal flex justify-between text-base-content p-10 sm:p-15 mx-auto">
                <div>
                    <a className="flex gap-1 font-bold text-xl text-white"> <img className='h-[30px]' src={logo} alt="" />HERO.IO</a>                    
                </div>
                
                <nav className='text-white w-1/3 flex flex-col justify-center items-center'>
                    <h6 className="footer-title">Social Links</h6>
                    <div className='flex gap-3'>
                        <a className="link link-hover"><FaSquareXTwitter /></a>
                        <a className="link link-hover"><IoLogoLinkedin /></a>
                        <a className="link link-hover"><FaFacebookSquare /></a>
                        <a className="link link-hover"><FaInstagramSquare /></a>
                    </div>
                </nav>
            </div>
            <div className="footer flex items-center justify-center border-t border-[#213951] px-10 py-4 w-[92%] mx-auto">
                <h2 className='text-amber-50 text-center'>Copyright © 2025 - All right reserved</h2>
            </div>
        </footer>
    );
};

export default Footer;