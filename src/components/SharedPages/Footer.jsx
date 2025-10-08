import React from "react";
import logo from "../../assets/logo.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#001931] text-white py-6 px-4 sm:px-8">
      {/* Container with max width */}
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 border-b border-gray-500 pb-4">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <img className="w-10 h-10" src={logo} alt="Hero.io logo" />
            <h2 className="font-semibold text-lg">HERO.IO</h2>
          </div>

          {/* Social Links */}
          <div className="text-center sm:text-right">
            <h2 className="font-semibold mb-2 text-sm sm:text-base">
              Social Links
            </h2>
            <div className="flex justify-center sm:justify-end gap-4 text-xl">
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-blue-400 transition-colors"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-blue-500 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-blue-600 transition-colors"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <p className="text-center text-gray-300 text-sm mt-4">
          © 2025 HERO.IO — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
