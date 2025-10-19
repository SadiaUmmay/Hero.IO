
import React, { useState } from 'react';
import SingleApp from './SingleApp';
import { useLoaderData } from 'react-router';
import { Search } from 'lucide-react';

const SearchApp = () => {
    const apps = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');


    const filteredApps = apps.filter(app =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className="mb-10 relative">
            {/* Search bar */}
            <div className="w-[300px] flex items-center border border-gray-400 px-2 rounded-md my-5 absolute right-0 -top-20">
                <Search className='text-md text-gray-400'></Search>
                <input
                    type="text"
                    placeholder="Search Apps"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="w-full  px-4 py-1 rounded-md outline-none  text-gray-700  
              focus:none "
                />
            </div>


            {filteredApps.length === 0 ? (
                <div className="text-center text-xl text-red-500 font-semibold">
                    No App Found
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-7">
                    {filteredApps.map(app => (
                        <SingleApp key={app.id} app={app} />
                    ))}
                </div>
            )}

        </div>
    );
};

export default SearchApp;