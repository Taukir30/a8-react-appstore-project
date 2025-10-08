import React from 'react';
import Card from '../Card/Card';
import { Link } from 'react-router';

const TrendingApps = ({featured}) => {
    return (

        <div className='w-[92%] mx-auto text-center my-15'>
            <h2 className='text-4xl font-bold my-3'>Trending Apps</h2>
            <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            <div className="card_section my-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {
                    featured.map( app => <Card key={app.id} app={app}></Card>)
                }
            </div>
            <div className='py-6'>
                <Link className='bg-linear-135 from-[#632EE3] to-[#ab6fff] py-3 px-8 rounded text-xs text-white hover:shadow-xl'>Show All</Link>
            </div>
        </div>

    );
};

export default TrendingApps;