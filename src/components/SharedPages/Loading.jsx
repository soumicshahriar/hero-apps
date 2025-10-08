import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0b002b] to-[#1a0033] text-white space-y-6">
      {/* Glowing Magic Circle */}
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 rounded-full border-4 border-[#9F62F2] animate-spin-slow blur-sm"></div>
        <div className="absolute inset-2 rounded-full border-2 border-[#632EE3] animate-reverse-spin-slow blur-[1px]"></div>
        <div className="absolute inset-6 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] rounded-full animate-pulse shadow-[0_0_30px_#9F62F2]"></div>
      </div>

      {/* Fantasy Text */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-widest bg-gradient-to-r from-[#9F62F2] to-[#E0B3FF] bg-clip-text text-transparent animate-pulse">
          Loading ...
        </h2>
        <p className="text-sm md:text-base text-gray-300 mt-2 animate-bounce">
          Please keep your patience ✨
        </p>
      </div>
    </div>
  );
};

export default Loading;
