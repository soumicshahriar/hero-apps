import React from "react";
import Navbar from "../SharedPages/Navbar";
import Footer from "../SharedPages/Footer";
import { Outlet } from "react-router";

const RootPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RootPage;
