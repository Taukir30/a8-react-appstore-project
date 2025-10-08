import React from 'react';
import { Link } from 'react-router';
import appLogo from '../../assets/appstore.png'
import playLogo from '../../assets/play.png'
import bannerPhoto from '../../assets/hero.png'

const Banner = () => {
    return (
        <div>
            <div className='flex flex-col gap-3 py-5 my-5 justify-center items-center'>
                <h1 className='text-6xl/18 text-center font-bold text-[#001931] w-5/6 md:w-1/2'>We Build <br /> <span className='text-[#733CE7]'> Productive </span> Apps</h1>
                <p className='text-center text-gray-500 w-5/6 md:w-3/4'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='flex gap-3 items-center justify-center'>
                <Link className='flex gap-2 items-center justify-center rounded border border-gray-300 py-2 px-5 font-semibold hover:bg-[#e2d4ff]' to='https://play.google.com/store/apps?hl=en' target='_blank'><img className='h-[20px]' src={playLogo} alt="" /> Google Play</Link>
                <Link className='flex gap-2 items-center justify-center rounded border border-gray-300 py-2 px-5 font-semibold hover:bg-[#e2d4ff]' to='https://www.apple.com/app-store/' target='_blank'> <img className='h-[20px]' src={appLogo} alt="" />App Store</Link>
            </div>
            <div className='flex justify-center items-center mt-6'>
                <img className='h-[350px]' src={bannerPhoto} alt="" />
            </div>
        </div>
    );
};

export default Banner;