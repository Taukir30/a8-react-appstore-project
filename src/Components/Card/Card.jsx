import React from 'react';
import { Link } from 'react-router';
import downIcon from '../../assets/icon-downloads.png'
import starIcon from '../../assets/icon-ratings.png'

const Card = ({ app }) => {

    console.log(app)

    return (
        <Link className='shadow hover:shadow-xl hover:-translate-y-1'>
            <div className="card bg-base-100 w-full shadow-sm">
                <figure className='m-2 border border-gray-200 rounded-md'>
                    <img src={app.image} alt="Shoes" />
                </figure>
                <div className="card-body px-3 pt-1 pb-3">
                    <h2 className="card-title text-base font-normal">{app.title}</h2>
                    
                    <div className="card-actions justify-between">
                        <div className="badge badge-soft badge-success text-xs"> <img className='h-[12px]' src={downIcon} alt="" /> {app.downloads} </div>
                        <div className="badge badge-soft bg-[#FFF0E1] border-0 text-xs text-[#FF8811]"> <img className='h-[12px]' src={starIcon} alt="" /> {app.reviews} </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;