import React from "react";
import { averageRating, formatDownloads } from "../utils/Average";
import { PiDownloadSimpleThin } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";

const AppData = ({ appData }) => {
  console.log(appData);
  const { image, title, downloads, ratings } = appData;

  const average = averageRating(ratings);
  const formattedDownloads = formatDownloads(downloads);

  return (
    <div className=" bg-base-100 shadow-sm p-2 rounded">
      <figure className="h-32 overflow-hidden">
        <img
          className="rounded w-full h-full object-cover"
          src={image}
          alt={title}
        />
      </figure>
      <div className="text-start mt-2">
        <h2 className="text-xl font-semibold mt-4">{title}</h2>
      </div>
      <div className="flex justify-between items-center my-2">
        <button className="flex items-center text-green-500 bg-gray-200 px-2 py-1 rounded  gap-2 font-semibold">
          <PiDownloadSimpleThin />
          {formattedDownloads}
        </button>
        <button className="bg-[#FFF0E1] px-2 py-1 text-[#FF8811] font-semibold flex items-center gap-2 ">
          <FaStar />
          {average}
        </button>
      </div>
    </div>
  );
};

export default AppData;
