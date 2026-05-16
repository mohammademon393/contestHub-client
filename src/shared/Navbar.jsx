import React from "react";
import { Link, NavLink } from "react-router";

import Logo from "../components/Logo";
import ThemeToggle from "../components/ThemeToggle";

import useAuth from "../hooks/useAuth";

import {
  FaHome,
  FaTrophy,
  FaMedal,
  FaInfoCircle,
  FaSignInAlt,
  FaUserPlus,
  FaUserCircle,
  FaTachometerAlt,
  FaSignOutAlt,
} from "react-icons/fa";

import { IoCall } from "react-icons/io5";

const Navbar = () => {
  const { logOut, user } = useAuth();

  // sign out function
  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  // active nav link class
  const navClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-2xl transition duration-300 ${
      isActive ? "bg-primary text-white font-medium" : "hover:text-primary"
    }`;

  // common nav links
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
    <div className="sticky top-0 z-50 bg-base-100 shadow-sm">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* navbar start */}
        <div className="navbar-start">
          {/* mobile dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56 gap-1"
            >
              {links}
            </ul>
          </div>

          {/* logo */}
          <Link to="/" className="text-2xl font-bold flex items-center">
            <Logo />
          </Link>
        </div>

        {/* navbar center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">{links}</ul>
        </div>

        {/* navbar end */}
        <div className="navbar-end gap-2">
          {/* theme toggle */}
          <ThemeToggle />

          {user ? (
            <div className="dropdown dropdown-end">
              {/* avatar button */}
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full border-2 border-primary">
                  <img
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co.com/4pDNDk1/avatar.png"
                    }
                    alt="user profile"
                  />
                </div>
              </div>

              {/* dropdown menu */}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-60"
              >
                {/* user info */}
                <div className="border-b pb-2 mb-2">
                  <h2 className="font-bold text-base">
                    {user?.displayName || "User"}
                  </h2>

                  <p className="text-sm text-gray-500 truncate">
                    {user?.email}
                  </p>
                </div>

                {/* dashboard */}
                <li>
                  <Link to="/dashboard">
                    <FaTachometerAlt />
                    Dashboard
                  </Link>
                </li>

                {/* profile */}
                <li>
                  <Link to="/profile">
                    <FaUserCircle />
                    My Profile
                  </Link>
                </li>

                {/* logout */}
                <li>
                  <button onClick={handleSignOut}>
                    <FaSignOutAlt />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              {/* register */}
              <Link
                to="/register"
                className="btn btn-outline btn-primary hidden md:flex"
              >
                <FaUserPlus />
                Register
              </Link>

              {/* login */}
              <Link to="/login" className="btn btn-primary text-white">
                <FaSignInAlt />
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
