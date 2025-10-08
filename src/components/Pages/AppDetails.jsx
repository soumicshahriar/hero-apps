import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useApp } from "../Hooks/useApp";
import { formatDownloads, formatReviews } from "../utils/Average";
import { FaDownload } from "react-icons/fa6";
import { FcRating } from "react-icons/fc";
import { AiFillLike } from "react-icons/ai";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import toast, { Toaster } from "react-hot-toast";
import { getDataFromLs, saveDataToLs } from "../utils/LocalStorage";

const AppDetails = () => {
  const params = useParams();
  const appId = parseInt(params.id);
  const { appsData, loading } = useApp();
  const [installed, setInstalled] = useState(false);

  //   useEffect
  useEffect(() => {
    const installedApps = getDataFromLs();
    if (installedApps.includes(appId)) {
      setInstalled(true);
    }
  }, [appId]);

  if (loading) return <p className="text-center py-10 text-lg">Loading...</p>;

  const appDetails = appsData.find((app) => app.id === appId);
  if (!appDetails)
    return <p className="text-center py-10 text-lg">App not found.</p>;

  const {
    id,
    title,
    companyName,
    image,
    ratingAvg,
    downloads,
    reviews,
    ratings,
    description,
    size,
  } = appDetails;

  const totalDownloads = formatDownloads(downloads);
  const totalReviews = formatReviews(reviews);

  const handleInstall = (id) => {
    setInstalled(true);
    saveDataToLs(id);
    toast.success(`${title} has been successfully installed!`, {
      duration: 3000,
      position: "top-center",
      style: {
        background: "#001931",
        color: "#fff",
        borderRadius: "10px",
      },
    });
  };

  return (
    <div className="bg-base-200 py-6 px-4 sm:px-6 lg:px-8">
      {/* Toast Container */}
      <Toaster />
      <div className="container mx-auto min-h-screen">
        {/* App Header Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          <img
            src={image}
            alt={title}
            className="w-40 sm:w-56 md:w-64 lg:w-80 rounded-lg shadow-2xl object-cover"
          />

          <div className="flex-1 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-center lg:text-left">
              {title}
            </h1>
            <p className="text-center lg:text-left text-gray-700">
              Developed By:{" "}
              <span className="text-blue-500 font-semibold">{companyName}</span>
            </p>

            <hr className="border-gray-300 my-5" />

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 text-center sm:text-left">
              <div className="flex flex-col items-center sm:items-start">
                <FaDownload className="size-7 sm:size-8 text-pink-500 mb-2" />
                <p className="text-sm sm:text-base">Downloads</p>
                <span className="text-lg sm:text-xl font-bold">
                  {totalDownloads}
                </span>
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <FcRating className="size-7 sm:size-8 mb-2" />
                <p className="text-sm sm:text-base">Average Rating</p>
                <span className="text-lg sm:text-xl font-bold">
                  {ratingAvg}
                </span>
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <AiFillLike className="size-7 sm:size-8 mb-2" />
                <p className="text-sm sm:text-base">Total Reviews</p>
                <span className="text-lg sm:text-xl font-bold">
                  {totalReviews}
                </span>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <button
                onClick={() => handleInstall(id)}
                disabled={installed}
                className={`btn mt-6 px-6 py-2 text-base sm:text-lg font-semibold transition-all duration-200 
                  ${
                    installed
                      ? "bg-gray-400 cursor-not-allowed text-white"
                      : "btn-primary hover:opacity-90"
                  }`}
              >
                {installed ? "Installed" : `Install Now (${size} MB)`}
              </button>
            </div>
          </div>
        </div>

        {/* Ratings Chart */}
        <hr className="border-gray-300 my-8" />
        <h2 className="text-center lg:text-left font-semibold text-[#FF8C00] mb-4 text-lg sm:text-xl">
          Ratings Overview
        </h2>
        <div className="w-full h-64 sm:h-80 md:h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              layout="vertical"
              data={ratings}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis type="number" stroke="#FF8C00" />
              <YAxis
                dataKey="name"
                type="category"
                scale="band"
                stroke="#FF8C00"
              />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="count"
                barSize={20}
                fill="#FF8C00"
                radius={[5, 5, 5, 5]}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Description Section */}
        <hr className="border-gray-300 my-8" />
        <div>
          <h2 className="font-semibold text-lg sm:text-xl mb-3 text-center lg:text-left">
            Description
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
