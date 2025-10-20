import { Download, Star, ThumbsUp } from 'lucide-react';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Rechart from '../Rechart/Rechart';
import InstallButton from '../installButton/InstallButton';

const AppDetails = () => {
    const apps = useLoaderData();
    const { appId } = useParams();
    const appIdNum = parseInt(appId);

    const singleApp = apps.find(app => app.id === appIdNum);

    if (!singleApp) return <div>App not found!</div>;

    const { companyName, title, description, image, downloads, ratingAvg, reviews, ratings } = singleApp;

    return (
        <div className='md:w-7xl w-2xl mx-auto'>
            <div className="flex flex-col md:flex-row md:gap-15 my-6">
                <img src={image} alt={title} className="w-[275px] bg-gray-200 mt-4 rounded-xl" />
                <div className='md:w-2xl w-md'>
                    <h1 className="text-xl font-bold mt-4">{title}</h1>
                    <h2 className="text-gray-600 mt-2">
                        Developed By: <span className='text-indigo-600 font-semibold'>{companyName}</span>
                    </h2>
                    <hr className='my-3 text-gray-400' />
                    <div className='flex flex-col md:flex-row gap-10'>
                        <div>
                            <Download className='text-green-600 text-2xl font-bold' />
                            <p>Downloads</p>
                            <h2 className='text-2xl font-bold'>{downloads}</h2>
                        </div>
                        <div>
                            <Star className='text-orange-400' />
                            <p>Average Ratings</p>
                            <h2 className='text-2xl font-bold'>{ratingAvg}</h2>
                        </div>
                        <div>
                            <ThumbsUp className='text-blue-600' />
                            <p>Total Reviews</p>
                            <h2 className='text-2xl font-bold'>{reviews}</h2>
                        </div>
                    </div>

                    {/* Install Button */}
                    <InstallButton app={singleApp} />

                </div>
            </div>

            {/* Rechart */}
            {ratings && ratings.length > 0 && (
                <div>
                    <h2 className="font-semibold text-lg mb-2">Ratings</h2>
                    <Rechart ratings={ratings} />
                </div>
            )}

            {/* Description */}
            <section className='w-xl md:w-7xl mx-auto'>
                <hr className='my-3 text-gray-400' />
                <h1 className='text-xl font-bold my-2'>Description</h1>
                <p className='mb-10'>{description}</p>
            </section>
        </div>
    );
};

export default AppDetails;
