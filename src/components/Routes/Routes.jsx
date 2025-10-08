import { createBrowserRouter } from "react-router";
import RootPage from "../Pages/RootPage";
import Home from "../Pages/Home";
import AllApps from "../Pages/AllApps";
import AppDetails from "../Pages/AppDetails";
import ErrorPage from "../Pages/ErrorPage";
import InstalledApps from "../Pages/InstalledApps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootPage,
    children: [
      { index: true, Component: Home },
      { path: "/apps", Component: AllApps },
      { path: "/apps/:id", Component: AppDetails },
      { path: "installation", Component: InstalledApps },
      { path: "*", Component: ErrorPage },
    ],
  },
]);
