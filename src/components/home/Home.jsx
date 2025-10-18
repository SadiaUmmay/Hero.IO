import { AppWindow } from 'lucide-react';
import React from 'react';
import heroPic from '../../assets/hero.png'
import Apps from './apps';

const Home = () => {
    return (
        <div className='bg-gray-50 md:py-10 py-4 mt-2'>
            {/* banner section  */}
           <div>
           <h2 className='md:text-5xl text-center text-2xl font-bold  pt-5'>We Build <br />
                <span className='text-indigo-500'> Productive</span> Apps</h2>
            <p className='text-center text-gray-600 my-4'>
                At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
            <div className='flex flex-col md:flex-row justify-center gap-5'>
                <a href="https://play.google.com/store/games?hl=en">
                < button  className="btn bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Google Play
                </button>
                </a>
                <a href="https://www.apple.com/app-store/">< button  className="btn bg-white text-black border-[#e5e5e5]"><AppWindow></AppWindow> App Store</button></a>
            </div>
            <div className='flex justify-center my-5'>
                <img className=' w-150' src={heroPic} alt="" />
            </div>
           </div>
           {/* status section  */}
           <div className='bg-linear-to-r from-indigo-500 to-purple-500 text-white py-20 p-5'>
            <h1 className='text-2xl md:text-4xl mb-10 text-center font-semibold'>Trusted by Millions, Built for You</h1>
            <div className='flex flex-col md:flex-row justify-center gap-10 font-semibold my-5'>
                <div className='text-center'>
                    <p className='text-sm font-normal'>Total Downloads</p>
                    <h1 className='text-3xl'>29.6M</h1>
                    <p className='text-sm font-normal'>21% more than last month</p>
                </div>
                <div className='text-center'>
                    <p className='text-sm font-normal'>Total Reviews</p>
                    <h1 className='text-3xl'>906K</h1>
                    <p className='text-sm font-normal'>46% more than last month</p>
                </div>
                <div className='text-center'>
                    <p className='text-sm font-normal'>Active Apps</p>
                    <h1 className='text-3xl'>132+</h1>
                    <p className='text-sm font-normal'>31 more will Launch</p>
                </div>
            </div>
           </div>
           {/* app section  */}
           <section>
            <div className='text-center my-4 md:my-15'>
                <h1 className='text-2xl md:text-4xl my-3 text-black font-bold'>Trending Apps</h1>
                <p className='text-gray-700'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <Apps></Apps>
           </section>
           {/* show all button  */}
           <a  href="apps" className='flex justify-center mt-10'>
          <button  className="btn px-4 bg-linear-to-r from-indigo-500 to-purple-500 text-white">
              
              Show All
            </button>
            </a>
        </div>
    );
};

export default Home;