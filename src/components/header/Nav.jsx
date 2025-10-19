import React, { useState } from 'react';
import { Github, Menu, MenuIcon, X } from 'lucide-react';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router';
import './Nav.css'
const Nav = () => {
    const [open, setOpen] = useState(true)
    return (
        <div className='flex justify-between mx-2 md:mx-10 mt-6 text-black items-center'>
            
            <span className='flex gap-3 ' onClick={() => setOpen(!open)}>

                {
                    open ?
                        <MenuIcon className='md:hidden '></MenuIcon> :
                        <X className='md:hidden'></X>
                }
                <ul className={`md:hidden absolute duration-1000
            ${open ? "-top-40" : "top-18"}
              `}>
                    <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="apps">Apps</NavLink></li>
                <li><NavLink to="install">Installation</NavLink></li>
                </ul>

            </span>
            {/* logo */}
            <a href='/' className='md:flex gap-1 items-center md:ml-0 md:mr-100  hidden'>
                <img className='w-10' src={logo} alt="" />
                <h2 className='text-indigo-500 font-bold'>HERO.IO</h2>
            </a>
           
            <ul className='md:flex gap-10 hidden mr-100 font-semibold'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="apps">Apps</NavLink></li>
                <li><NavLink to="install">Installation</NavLink></li>
            </ul>


            <button  className="btn bg-linear-to-r from-indigo-500 to-purple-500 text-white">
              <a className='flex items-center gap-1' href="https://github.com/SadiaUmmay">  <Github></Github>
              Contribute</a>
            </button>
        </div>
    );
};

export default Nav;