import { useApp } from "../Hooks/useApp";
import AppData from "../Components/AppData";
import { useState, useEffect } from "react";
import Loading from "../SharedPages/Loading";
import { useNavigation } from "react-router";

const AllApps = () => {
  //All hooks
  const navigation = useNavigation();
  const { appsData, loading, error } = useApp();

  const [search, setSearch] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);
  const [searching, setSearching] = useState(false);

  // Filtering with small delay for search loading
  useEffect(() => {
    if (!appsData) return;

    setSearching(true);
    const timeout = setTimeout(() => {
      const term = search.trim().toLowerCase();
      const results = term
        ? appsData.filter((appData) =>
            appData.title.toLowerCase().includes(term)
          )
        : appsData;

      setFilteredApps(results);
      setSearching(false);
    }, 100);

    return () => clearTimeout(timeout);
  }, [search, appsData]);

  //Handle navigation + app loading + errors
  const isNavigating = navigation.state === "loading";

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-10">
      {/* Conditional loading and error display */}
      {(isNavigating || loading) && <Loading />}
      {error && (
        <p className="text-center py-10 text-red-500">{error.message}</p>
      )}

      {/*main content*/}
      {!loading && !isNavigating && !error && (
        <>
          <div className="text-center space-y-1 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Our All Applications
            </h2>
            <small className="text-gray-600 text-sm sm:text-base">
              Explore all the apps on the market developed by us. We code for
              millions.
            </small>
          </div>

          {/* Search & Count */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
              ({filteredApps.length}) Apps Found
            </h2>

            <label className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 w-full sm:w-72 focus-within:border-[#632EE3] transition">
              <svg
                className="h-5 w-5 text-gray-500 opacity-70"
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
                placeholder="Search apps..."
                className="flex-1 outline-none bg-transparent text-sm sm:text-base"
              />
            </label>
          </div>

          {/* Results */}
          {searching ? (
            <Loading />
          ) : filteredApps.length === 0 ? (
            <p className="text-gray-500 text-center text-lg mt-10">
              No apps found matching your search.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredApps.map((appData) => (
                <AppData key={appData.id} appData={appData} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AllApps;
