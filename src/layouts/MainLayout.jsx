import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const MainLayout = () => {
    return (
      <div className="bg-base-200 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <Navbar></Navbar>
          <div>
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default MainLayout;