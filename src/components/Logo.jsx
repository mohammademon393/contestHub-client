import React from 'react';
import logo from '../assets/logo-2.1.png';

const Logo = () => {
    return (
        <div className='flex gap-1 items-center'>
            <img className='w-[40px]' src={logo} alt="Logo" />
            <h2 className='text-2xl font-bold'>Contest<span className='text-primary'>Hub</span></h2>
        </div>
    );
};

export default Logo;