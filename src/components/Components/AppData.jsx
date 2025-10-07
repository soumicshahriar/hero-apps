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
      <figure>
        <img
          className="rounded"
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
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
