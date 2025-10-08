import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";
import heroImg from "../../assets/hero.png";
import { useApp } from "../Hooks/useApp";
import AppData from "../Components/AppData";
import { Link } from "react-router";

const Home = () => {
  const { appsData, loading, error } = useApp();

  const someData = appsData.slice(0, 8);
  //   console.log(someData);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  //   console.log(appsData);
  return (
    <div className="bg-gray-200 min-h-screen text-center py-10 space-y-5">
      <h2 className="font-bold text-2xl">
        We Build <br />
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Productive
        </span>{" "}
        Apps
      </h2>
      <small className="text-gray-500">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br /> Our goal is to turn your
        ideas into digital experiences that truly make an impact.
      </small>
      <div className="font-semibold space-x-5 mt-5">
        <a
          href="https://play.google.com/store/games?hl=en"
          className="btn btn-outline gap-2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get it on Google Play"
        >
          <div className="h-8 w-8 bg-gradient-to-b from-[#00BFFC] to-[#0073F6] flex items-center justify-center rounded-full">
            <FaGooglePlay className="text-white h-5 w-5" />
          </div>
          <span>Google Play</span>
        </a>

        <a
          href="https://www.apple.com/app-store/"
          className="btn btn-outline gap-2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download on the App Store"
        >
          <div className="h-8 w-8 bg-gradient-to-b from-[#00BFFC] to-[#0073F6] flex items-center justify-center rounded-full">
            <FaAppStoreIos className="text-white h-5 w-5" />
          </div>
          <span>App Store</span>
        </a>
      </div>

      {/* hero Image */}
      <div>
        <img className="mx-auto  " src={heroImg} alt="hero" />
        <div className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-5">
          <h2 className="text-xl font-semibold text-white">
            Trusted by Millions, Built for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3  mt-5">
            <div className="text-white">
              <small className="opacity-70">Total Downloads</small>
              <p className="text-xl font-bold">29.6M</p>
              <small className="opacity-70">21% more than last month</small>
            </div>
            <div className="text-white">
              <small className="opacity-70">Total Reviews</small>
              <p className="text-xl font-bold">906K</p>
              <small className="opacity-70">46% more than last month</small>
            </div>
            <div className="text-white">
              <small className="opacity-70">Active Apps</small>
              <p className="text-xl font-bold">132+</p>
              <small className="opacity-70">31 more will Launch</small>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold">Trending Apps</h2>
        <small>Explore All Trending Apps on the Market developed by us</small>
      </div>

      {/* Trending Apps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto">
        {someData.map((appData) => (
          <AppData key={appData.id} appData={appData}></AppData>
        ))}
      </div>

      <Link to="/apps">
        <button className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] px-4 py-2 rounded text-white font-semibold cursor-pointer">
          See All
        </button>
      </Link>
    </div>
  );
};

export default Home;
