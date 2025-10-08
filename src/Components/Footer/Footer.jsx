import React from 'react';
import logo from '../../assets/logo.png'


const Footer = () => {
    return (
        <div className='bg-[#001931]'>
            <footer className="footer sm:footer-horizontal  text-base-content p-15 mx-auto">
                <div>
                    <a className="hidden md:flex gap-1 font-bold text-xl text-white"> <img className='h-[30px]' src={logo} alt="" />HERO.IO</a>                    
                </div>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer border-t border-[#213951] px-10 py-4 w-[92%] mx-auto">
                <h2 className='text-amber-50 text-center'>Copyright © 2025 - All right reserved</h2>
            </footer>
        </div>
    );
};

export default Footer;