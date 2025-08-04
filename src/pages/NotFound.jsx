import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-6xl font-bold text-green-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Page Not Found</p>
      <Link
        to="/"
        className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
