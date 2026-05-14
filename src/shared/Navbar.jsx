import React from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../components/logo/Logo';
import {
  FaHome,
  FaTrophy,
  FaMedal,
  FaInfoCircle,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import { IoCall } from 'react-icons/io5';

const Navbar = () => {

    const navClass = ({ isActive }) =>
      isActive
        ? "text-primary font-medium bg-primary rounded-2xl text-white px-4"
        : "hover:text-primary hover:underline hover:rounded-2xl";

        const links = (
          <>
            <li>
              <NavLink to="/" className={navClass}>
                <FaHome />
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/contests" className={navClass}>
                <FaTrophy />
                All Contests
              </NavLink>
            </li>

            <li>
              <NavLink to="/leaderboard" className={navClass}>
                <FaMedal />
                Leaderboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navClass}>
                <FaInfoCircle />
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navClass}>
                <IoCall />
                Contact
              </NavLink>
            </li>
          </>
        );

    return (
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-1"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="text-2xl font-bold cursor-pointer flex items-center">
            <Logo></Logo>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/register" className="btn btn-primary btn-outline hidden md:inline-flex">
            <FaUserPlus/>
            Register
          </Link>
          <Link to="/login" className="btn btn-primary ml-2 text-white hover:bg-purple-700">
            <FaSignInAlt></FaSignInAlt>
            Login
          </Link>
        </div>
      </div>
    );
};

export default Navbar;