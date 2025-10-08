import React from 'react';

const Stats = () => {
    return (
        <div className='bg-linear-135 from-[#632EE3] to-[#ab6fff]'>
            <div className='w-[92%] mx-auto py-16'>
                <h2 className='text-white text-center text-4xl font-bold tracking-wide'>Trusted by Millions, Built for You</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 w-[80%] mx-auto mt-10'>

                    <div className='flex flex-col items-center justify-center gap-3 text-white my-5'>
                        <p className='text-sm font-extralight '>Total Downloads</p>
                        <h2 className='text-5xl font-bold tracking-wide'>29.6M</h2>
                        <p className='text-sm font-extralight '>21% more than last month</p>
                    </div>

                    <div className='flex flex-col items-center justify-center gap-3 text-white my-5'>
                        <p className='text-sm font-extralight '>Total Reviews</p>
                        <h2 className='text-5xl font-bold tracking-wide'>906K</h2>
                        <p className='text-sm font-extralight '>46% more than last month</p>
                    </div>

                    <div className='flex flex-col items-center justify-center gap-3 text-white my-5'>
                        <p className='text-sm font-extralight '>Active Apps</p>
                        <h2 className='text-5xl font-bold tracking-wide'>132+</h2>
                        <p className='text-sm font-extralight '>31 more will Launch</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Stats;