import { createBrowserRouter } from "react-router";
import RootPage from "../Pages/RootPage";
import Home from "../Pages/Home";
import AllApps from "../Pages/AllApps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootPage,
    children: [
      { index: true, Component: Home },
      { path: "/apps", Component: AllApps },
    ],
  },
]);
