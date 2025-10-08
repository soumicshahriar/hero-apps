import React from "react";
import { Link } from "react-router";
import error from "../../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-[#0b002b] via-[#160046] to-[#1f003d] text-center px-4 text-white">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-[#9F62F2] to-[#632EE3] rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></span>
        ))}
      </div>

      {/* Glowing Orb Behind Image */}
      <div className="absolute w-80 h-80 rounded-full bg-[#9F62F2]/30 blur-3xl animate-pulse"></div>

      {/* Error Image */}
      <img
        src={error}
        alt="404 Error"
        className="relative w-64 sm:w-80 md:w-96 z-10 drop-shadow-[0_0_25px_#9F62F2aa]"
      />

      {/* Text Section */}
      <div className="relative z-10 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#E0B3FF] to-[#9F62F2] bg-clip-text text-transparent animate-pulse">
          Lost in the Digital Realm
        </h2>
        <p className="text-gray-300 max-w-md mx-auto leading-relaxed">
          The page you seek has vanished into the mist... or perhaps it never
          existed at all. 🌀
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] shadow-[0_0_15px_#9F62F2aa] hover:shadow-[0_0_30px_#9F62F2cc] transition-all duration-500 hover:scale-105"
        >
          Return to the Portal
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
