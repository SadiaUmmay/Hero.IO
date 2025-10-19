import React from 'react';
import AllAppsMap from './AllApssMap';
import SearchApp from './SearchApp';


const Apps = () => {

    return (
        <div className='max-w-xl md:max-w-7xl mx-auto'>
            <div className='text-center my-4 md:my-15'>
                <h1 className='text-2xl md:text-4xl my-3 text-black font-bold'>Our All Applications</h1>
                <p className='text-gray-600'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <h1 className='font-semibold text-lg'>
                (15)Apps Found
            </h1>
            <SearchApp></SearchApp>
        </div>
    );
};

export default Apps;