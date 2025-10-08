import React from 'react';
import { NavLink } from 'react-router';
import { FaGithub } from "react-icons/fa";
import logo from '../../assets/logo.png'


const Header = () => {

    const menuItems = <>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/">Apps</NavLink></li>                        
                        <li><NavLink to="/app">Installation</NavLink></li>
                    </>

    return (

        <div className='bg-white shadow'>
            <div className="navbar bg-base-100 w-[92%] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {menuItems}
                        </ul>
                    </div>
                    <a className="hidden md:flex gap-1 font-bold text-xl text-[#733CE7]"> <img className='h-[30px]' src={logo} alt="" />HERO.IO</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 items-center gap-3 tracking-wide text-base font-semibold">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <button className="btn bg-linear-130 from-[#733CE7] to-[#a96bff] rounded-md px-4 text-white workSans tracking-wide shadow-none"><FaGithub />Contribute</button>
                </div>
            </div>
        </div>

    );
};

export default Header;