import React from 'react';
import { useLoaderData } from 'react-router';

import SingleApp from './SingleApp';


const AllAppsMap = () => {
    const apps = useLoaderData()

    console.log(apps)
    return (
        <div>
            
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 w-7xl my-5 mx-auto'>
                {
                    // apps.map(app => <SingleApp app={app}></SingleApp>)
                    apps.map(app => <SingleApp key={app.id} app={app}></SingleApp>)
                }
            </div>
        </div>
    );
};

export default AllAppsMap;