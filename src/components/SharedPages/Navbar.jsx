import React from "react";
import { NavLink } from "react-router";
import navLogo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  const links = (
    <>
      {[
        { name: "Home", path: "/" },
        { name: "Apps", path: "/apps" },
        { name: "Installation", path: "/installation" },
      ].map((link) => (
        <li key={link.name}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `relative block px-4 py-2 rounded-md text-sm md:text-base transition-all ${
                isActive
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-full before:bg-gradient-to-r before:from-[#632EE3] before:to-[#9F62F2]"
                  : "text-gray-700 hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-white"
              }`
            }
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </>
  );

  return (
    <nav className="navbar bg-white shadow-sm sticky top-0 z-50 px-4 sm:px-6 md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-lg mt-3 w-52 p-2 shadow-md border border-gray-100"
          >
            {links}
          </ul>
        </div>

        <div className="flex items-center space-x-2">
          <img
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
            src={navLogo}
            alt="HERO.IO logo"
          />
          <a
            href="/"
            className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
          >
            HERO.IO
          </a>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{links}</ul>
      </div>

      <div className="navbar-end">
        <a
          href="https://github.com/soumicshahriar"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold border-none text-sm sm:text-base flex items-center gap-2 hover:opacity-90 transition"
        >
          <FaGithub className="text-lg" />
          <span className="hidden sm:inline">Contribute</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
