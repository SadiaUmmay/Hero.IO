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

  const { companyName, title, description, image, downloads, ratingAvg, reviews,  ratings } = singleApp;

  return (
    <div className='md:w-7xl w-2xl mx-auto'>
      <div className="flex flex-col md:flex-row md:gap-15  my-6">
        <img src={image} alt={title} className="w-[275px] bg-gray-200 mt-4 rounded-xl" />
        <div className='md:w-2xl w-md'>
          <h1 className="text-xl font-bold mt-4">{title} : {description}</h1>
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
          <div className=''>
            
            <InstallButton></InstallButton>
          </div>
        </div>
      </div>

      {/* Rechart with ratings */}
      <div>
      <h2 className="font-semibold text-lg mb-2">Ratings</h2>
      <Rechart ratings={ratings} />

      </div>
      {/* Description section */}
      <section className='w-xl md:w-7xl mx-auto'>
        <hr className='my-3 text-gray-400' />
        <h1 className='text-xl font-bold my-2'>Description</h1>
        <p className='mb-10'>This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest. <br /> <br />

A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.
<br /> <br />
For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.</p>
      </section>
    </div>
  );
};

export default AppDetails;
