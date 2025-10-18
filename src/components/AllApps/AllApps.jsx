import React from 'react';
import AllAppsMap from './AllApssMap';


const Apps = () => {
   
    return (
        <div>
            <div className='text-center my-4 md:my-15'>
                <h1 className='text-2xl md:text-4xl my-3 text-black font-bold'>Our All Applications</h1>
                <p className='text-gray-600'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <AllAppsMap></AllAppsMap>
        </div>
    );
};

export default Apps;