import React from "react";
import { FaDownload } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import { formatDownloads } from "../utils/Average";
import toast from "react-hot-toast";
import { removeDataFromLs } from "../utils/LocalStorage";

const InstalledAppsData = ({ data, onUninstall }) => {
  const downloadFormat = formatDownloads(data.downloads);

  const handleUninstall = () => {
    removeDataFromLs(data.id);
    onUninstall(data.id);
    toast.success(`${data.title} has been uninstalled!`, {
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
    <div className="flex flex-col sm:flex-row justify-between items-center bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-4 sm:p-5 gap-4 sm:gap-6 w-full">
      {/* App Info */}
      <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto">
        <img
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover flex-shrink-0"
          src={data.image}
          alt={data.title}
        />

        <div className="text-start flex flex-col justify-center">
          <h2 className="font-semibold text-base sm:text-lg line-clamp-1">
            {data.title}
          </h2>

          <div className="flex flex-wrap gap-x-3 gap-y-1 items-center text-gray-700 text-sm sm:text-base mt-1">
            <div className="flex items-center gap-1">
              <FaDownload className="text-gray-500" />
              <span>{downloadFormat}</span>
            </div>
            <div className="flex items-center gap-1">
              <FcRating />
              <span>{data.ratingAvg}</span>
            </div>
            <p className="text-gray-500">{data.size} MB</p>
          </div>
        </div>
      </div>

      {/* Uninstall Button */}
      <button
        onClick={handleUninstall}
        className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:scale-105 active:scale-95 transition-transform duration-300"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledAppsData;
