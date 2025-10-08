import React from 'react';
import { useParams } from 'react-router';
import useAppdata from '../../hooks/useAppdata';
import downIcon from '../../assets/icon-downloads.png'
import starIcon from '../../assets/icon-ratings.png'
import reviewIcon from '../../assets/icon-review.png'
import loadLogo from '../../assets/logo.png';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const Details = () => {

    const { id } = useParams();
    const { apps, loading, error } = useAppdata();

    const app = apps.find(singleApp => singleApp.id === parseInt(id));

    if (loading) {
        return (
            <div className='w-10 mx-auto my-20'> <img className='h-[50px] animate-spin' src={loadLogo} alt="" /></div>
        )
    }

    const topReview = app.ratings.reduce((max, item) => item.count > max.count ? item : max);

    console.log(app)


    const handleInstall = () => {

    }

    return (
        <div>
            <div className="hero py-5 w-[92%] mx-auto">
                <div className="hero-content flex-col lg:flex-row gap-10 w-full">
                    <img src={app.image} className="max-w-xs rounded-lg shadow-2xl" />
                    <div className='w-full'>
                        <div className='flex flex-col gap-5 my-5 border-b border-gray-200'>
                            <h1 className="text-3xl font-bold playFair"> {app.title} </h1>
                            <p className='text-gray-600 font-semibold '>
                                Developed By : <span className='text-[#632EE3]'>{app.companyName}</span>
                            </p>
                        </div>

                        <div className='flex flex-col md:flex-row gap-10 mb-5'>

                            <div className='flex flex-col gap-2'>
                                <img className='w-[25px]' src={downIcon} alt="" />
                                <span className='text-xs text-gray-600'>Downloads</span>
                                <h2 className='text-3xl font-extrabold'> {app.downloads / 100000} M</h2>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <img className='w-[25px]' src={starIcon} alt="" />
                                <span className='text-xs text-gray-600'>Average Ratings</span>
                                <h2 className='text-3xl font-extrabold uppercase'> {topReview.name} </h2>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <img className='w-[25px]' src={reviewIcon} alt="" />
                                <span className='text-xs text-gray-600'>Total Reviews</span>
                                <h2 className='text-3xl font-extrabold'> {app.reviews / 10000} K</h2>
                            </div>

                        </div>

                        <button onClick={handleInstall} className="btn btn-primary">Install now ({app.size} MB)</button>
                    </div>
                </div>
            </div>

            <div className='border-t border-b border-gray-300 w-[92%] mx-auto py-5'>
                <h2 className='text-xl font-bold'>Ratings</h2>
                <div className='p-4 h-80'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={300}
                            data={app.ratings}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="count" fill="#FF8811" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className='w-[92%] mx-auto py-5'>
                <h2 className='text-xl font-bold'>Description</h2>
                <p className='my-8 text-gray-500 text-justify'> {app.description} </p>
                <p className='my-8 text-gray-500 text-justify'> {app.description} </p>
            </div>
        </div>
    );
};

export default Details;