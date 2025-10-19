import { Download, Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const SingleApp = ({app}) => {
    return (
        <div className='bg-white shadow-2xl rounded-xl w-[302px]'>
             <Link to={`/apps/${app.id}`}>
            <img className='w-[275px] mx-auto bg-gray-200 mt-4 rounded-xl' src={app.image} alt="" />
            <div className='flex p-2 gap-1 font-semibold'>
                <p>{app.title} : </p>
                <p> {app.companyName}</p>
            </div>
            <div className='flex justify-between m-2'>
                <div className='flex gap-1 bg-green-300 text-green-800 font-bold p-2  rounded-xl'>
                    <Download></Download>
                    <p>{app.downloads}</p>
                </div>
                <div className='flex gap-1 p-2 bg-orange-200 text-orange-700 rounded-xl font-bold'>
                    <Star className=''></Star>
                    <p>{app.ratingAvg}</p>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default SingleApp;