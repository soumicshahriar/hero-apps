import React from "react";
import { formatDownloads } from "../utils/Average";
import { PiDownloadSimpleThin } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const AppData = ({ appData }) => {
  const { id, image, title, downloads, ratingAvg } = appData;
  const formattedDownloads = formatDownloads(downloads);

  return (
    <div className="transition-transform duration-300 hover:scale-[1.02]">
      <Link to={`/apps/${id}`}>
        <div className="bg-white shadow shadow-[#e2d7f1] hover:shadow-lg transition-all duration-300 p-3 sm:p-4 rounded-xl flex flex-col h-full">
          {/* Image */}
          <figure className="h-40 sm:h-48 lg:h-52 overflow-hidden rounded-lg">
            <img
              className="w-full h-full object-cover rounded-lg hover:opacity-90 transition"
              src={image}
              alt={title}
            />
          </figure>

          {/* Title */}
          <div className="text-start mt-3 flex-grow">
            <h2 className="text-lg sm:text-xl font-semibold line-clamp-1">
              {title}
            </h2>
          </div>

          {/* Stats (downloads + rating) */}
          <div className="flex justify-between items-center mt-3 text-sm sm:text-base">
            <span className="flex items-center text-green-600 bg-green-50 px-2 sm:px-3 py-1 rounded-full gap-1 sm:gap-2 font-medium">
              <PiDownloadSimpleThin className="text-lg" />
              {formattedDownloads}
            </span>

            <span className="flex items-center bg-[#FFF0E1] px-2 sm:px-3 py-1 text-[#FF8811] font-medium rounded-full gap-1 sm:gap-2">
              <FaStar className="text-lg" />
              {ratingAvg}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AppData;
