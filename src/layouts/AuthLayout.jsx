import React from 'react';
import { Outlet } from 'react-router';
import Logo from '../components/Logo';
import loginImg from '../assets/login.png';

const AuthLayout = () => {
  return (
    <div className='bg-base-200 min-h-screen'>
      <div className="max-w-7xl mx-auto p-5">
        <Logo></Logo>

        <div className="md:flex items-center gap-5 mt-10 justify-center">
          <div className="flex-1">
            <Outlet></Outlet>
          </div>
          <div className="flex-1">
            <img src={loginImg} alt="coming soon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;