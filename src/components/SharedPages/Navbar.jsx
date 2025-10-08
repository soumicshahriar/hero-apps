import React from "react";
import { NavLink } from "react-router";
import navLogo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa6";
const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative block px-4 py-2 rounded transition-all duration-300 ${
              isActive
                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[1px] before:w-full before:bg-gradient-to-r before:from-[#632EE3] before:to-[#9F62F2]"
                : "hover:bg-pink-500 hover:text-white"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/apps"
          className={({ isActive }) =>
            `relative block px-4 py-2 rounded transition-all duration-300 ${
              isActive
                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[1px] before:w-full before:bg-gradient-to-r before:from-[#632EE3] before:to-[#9F62F2]"
                : "hover:bg-pink-500 hover:text-white"
            }`
          }
        >
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink
          to="installation"
          className={({ isActive }) =>
            `relative block px-4 py-2 rounded transition-all duration-300 ${
              isActive
                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[1px] before:w-full before:bg-gradient-to-r before:from-[#632EE3] before:to-[#9F62F2]"
                : "hover:bg-pink-500 hover:text-white"
            }`
          }
        >
          Installation
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center space-x-2">
          <img className="w-8 h-8 hidden lg:flex" src={navLogo} alt="logo" />
          <a className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            HERO.IO
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
          <FaGithub />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
