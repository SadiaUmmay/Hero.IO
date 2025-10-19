import React from 'react';
import { useLoaderData } from 'react-router';
import SingleApp from './SingleApp';

const Apps = () => {
  const apps = useLoaderData();

  
  const visibleApps = apps.slice(0, 8);

  console.log(visibleApps);

  return (
    <div className=" w-3xl md:w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {visibleApps.map((app) => (
          <SingleApp key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default Apps;
