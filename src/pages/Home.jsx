import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center max-w-xl">
        <h1 className="text-5xl font-bold text-green-600 mb-6">Welcome to RecipeHub</h1>
        <p className="text-lg text-gray-700 mb-8">
          Discover, share, and save your favorite recipes all in one place.
        </p>
        <div className="space-x-4">
          <Link
            to="/register"
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
