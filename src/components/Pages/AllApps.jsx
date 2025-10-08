import { useApp } from "../Hooks/useApp";
import AppData from "../Components/AppData";
import { useState } from "react";

const AllApps = () => {
  const [search, setSearch] = useState("");

  const { appsData, loading, error } = useApp();
  if (loading) return <p>Loading....</p>;
  if (error) return <p>{error.message}</p>;
  //   console.log(appsData);
  console.log(search);

  const term = search.trim().toLocaleLowerCase();
  const searchedValue = term
    ? appsData.filter((appData) =>
        appData.title.toLocaleLowerCase().includes(term)
      )
    : appsData;

  return (
    <div className="text-center mt-10 container mx-auto">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold">Our All Applications</h2>
        <small>
          Explore All Apps on the Market developed by us. We code for Millions
        </small>
        <div className="flex justify-between items-center my-4">
          <h2 className="text-xl font-semibold">
            ({searchedValue.length}) Apps Found
          </h2>
          <label className="input flex items-center gap-2 focus-within:outline-[#632EE3] focus-within:ring-0 focus-within:border-none">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="Search Apps"
            />
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {searchedValue.map((appData) => (
          <AppData key={appData.id} appData={appData}></AppData>
        ))}
      </div>
    </div>
  );
};

export default AllApps;
