import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div></div>
            <div>
                <Outlet></Outlet>
            </div>
            <div></div>
        </div>
    );
};

export default MainLayout;