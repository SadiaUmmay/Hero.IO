import React from 'react';
import logo from '../../assets/logo.png'
import { Facebook, Linkedin, Twitter } from 'lucide-react';
const Footer = () => {
    return (
        <div className='bg-indigo-950 md:px-20 px-3 '>
            <div className='flex flex-col md:flex-row justify-between py-5'>
            <a href='/' className='flex gap-1 items-center md:ml-0 md:mr-100'>
                <img className='w-10' src={logo} alt="" />
                <h2 className='text-white font-bold'>HERO.IO</h2>
            </a>
            <div>
                <h1 className='text-white font-bold '>Social Links</h1>
                <div className='flex gap-2 items-center text-white'>
                    <Twitter></Twitter>
                    <Linkedin></Linkedin>
                    <Facebook></Facebook>
                </div>
            </div>
            </div>
            <hr className='border-1/2 border-gray-700' />
            <p className='text-center text-white py-5'>Copyright © 2025 - All right reserved</p>
        </div>
    );
};

export default Footer;