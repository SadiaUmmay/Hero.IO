import React from 'react';
import Nav from '../header/nav';
import { Outlet } from 'react-router';
import Footer from '../footer/Footer';

const Root = () => {
    return (
        <div className=''>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;