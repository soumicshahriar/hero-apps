import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";
import heroImg from "../../assets/hero.png";
import { useApp } from "../Hooks/useApp";
import AppData from "../Components/AppData";
import { Link } from "react-router";
import Loading from "../SharedPages/Loading";

const Home = () => {
  const { appsData, loading, error } = useApp();

  const someData = appsData.slice(0, 8);

  // loading start
  if (loading) return <Loading></Loading>;

  if (error)
    return (
      <p className="text-center py-10 text-red-500">Error: {error.message}</p>
    );

  return (
    <div className="bg-gray-100 min-h-screen text-center py-10 px-4 md:px-8 space-y-8">
      {/* Hero Section */}
      <section>
        <h2 className="font-bold text-3xl md:text-4xl leading-snug">
          We Build <br />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h2>
        <p className="text-gray-600 text-sm md:text-base mt-3 max-w-2xl mx-auto">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.{" "}
          <br className="hidden sm:block" />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>

        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          <a
            href="https://play.google.com/store/games?hl=en"
            className="btn btn-outline flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-200 transition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get it on Google Play"
          >
            <div className="h-8 w-8 bg-gradient-to-b from-[#00BFFC] to-[#0073F6] flex items-center justify-center rounded-full">
              <FaGooglePlay className="text-white h-5 w-5" />
            </div>
            <span className="font-semibold text-sm md:text-base">
              Google Play
            </span>
          </a>

          <a
            href="https://www.apple.com/app-store/"
            className="btn btn-outline flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-200 transition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download on the App Store"
          >
            <div className="h-8 w-8 bg-gradient-to-b from-[#00BFFC] to-[#0073F6] flex items-center justify-center rounded-full">
              <FaAppStoreIos className="text-white h-5 w-5" />
            </div>
            <span className="font-semibold text-sm md:text-base">
              App Store
            </span>
          </a>
        </div>
      </section>

      {/* Hero Image */}
      <section>
        <img
          className="mx-auto w-full max-w-md md:max-w-lg lg:max-w-2xl object-contain"
          src={heroImg}
          alt="hero"
        />
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-8 px-4 rounded-lg max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-white">
          Trusted by Millions, Built for You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          <div className="text-white">
            <small className="opacity-70">Total Downloads</small>
            <p className="text-2xl font-bold">29.6M</p>
            <small className="opacity-70">21% more than last month</small>
          </div>
          <div className="text-white">
            <small className="opacity-70">Total Reviews</small>
            <p className="text-2xl font-bold">906K</p>
            <small className="opacity-70">46% more than last month</small>
          </div>
          <div className="text-white">
            <small className="opacity-70">Active Apps</small>
            <p className="text-2xl font-bold">132+</p>
            <small className="opacity-70">31 more will Launch</small>
          </div>
        </div>
      </section>

      {/* Trending Apps Section */}
      <section>
        <h2 className="text-2xl font-bold">Trending Apps</h2>
        <p className="text-gray-600 text-sm md:text-base mb-4">
          Explore all trending apps on the market developed by us
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto">
          {someData.map((appData) => (
            <AppData key={appData.id} appData={appData} />
          ))}
        </div>

        <Link to="/apps">
          <button className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] px-6 py-2 mt-6 rounded-lg text-white font-semibold hover:opacity-90 transition">
            See All
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
