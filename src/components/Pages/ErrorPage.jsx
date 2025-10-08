import React from "react";
import { Link } from "react-router";
import error from "../../assets/error-404.png";
const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-base-200 text-center px-4">
      <img src={error} alt="" />
      <h2 className="text-2xl font-semibold mb-2">Oops! Page Not Found</h2>
      <p className="text-gray-600 mb-6 max-w-md">
        The page you’re looking for doesn’t exist or was moved.
      </p>
      <Link
        to="/"
        className="btn px-6 py-2 text-lg font-semibold bg-gradient-to-r text-white from-[#632EE3] to-[#9F62F2]"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
