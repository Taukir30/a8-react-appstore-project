import React from 'react';
import Header from '../../Components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className='inter bg-[#F5F5F5]'>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;