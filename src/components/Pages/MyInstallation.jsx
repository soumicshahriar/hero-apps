import React, { useState } from "react";
import { getDataFromLs } from "../utils/LocalStorage";
import { useApp } from "../Hooks/useApp";
import InstalledAppsData from "./InstalledAppsData";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../SharedPages/Loading";

const MyInstallation = () => {
  const { appsData, loading } = useApp();
  const [sortOrder, setSortOrder] = useState("none");
  const [installedApps, setInstalledApps] = useState(getDataFromLs());

  // loading start
  if (loading) return <Loading></Loading>;

  const installedAppsData = appsData.filter((app) =>
    installedApps.includes(app.id)
  );

  const handleUninstall = (id) => {
    setInstalledApps((prev) => prev.filter((appId) => appId !== id));
    toast.success("App uninstalled successfully");
  };

  const sortedApps = [...installedAppsData].sort((a, b) => {
    if (sortOrder === "high-low") return b.downloads - a.downloads;
    if (sortOrder === "low-high") return a.downloads - b.downloads;
    return 0;
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <Toaster position="top-center" />
      <div className="container mx-auto py-10 px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            Your Installed Apps
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Manage and explore all apps you’ve installed from HERO.IO
          </p>
        </div>

        {/* Sorting and Count */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <h2 className="text-lg font-semibold text-gray-700">
            Apps Found:{" "}
            <span className="text-[#632EE3] font-bold">
              {sortedApps.length}
            </span>
          </h2>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="select select-bordered w-full sm:w-auto rounded-lg border-gray-300 focus:ring-2 focus:ring-[#632EE3] transition"
          >
            <option value="none">Sort By</option>
            <option value="high-low">Downloads: High → Low</option>
            <option value="low-high">Downloads: Low → High</option>
          </select>
        </div>

        {/* Installed Apps List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedApps.length > 0 ? (
            sortedApps.map((data) => (
              <InstalledAppsData
                key={data.id}
                data={data}
                onUninstall={handleUninstall}
              />
            ))
          ) : (
            <p className="text-gray-600 text-center col-span-full mt-10 text-sm md:text-base">
              No installed apps found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyInstallation;
