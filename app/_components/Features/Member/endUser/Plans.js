// components/FeatureList.js
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import React from "react";

const Plans = () => {
  return (
    <div className="mx-auto max-w-md cursor-pointer overflow-hidden rounded-lg border border-gray-400 bg-white p-4 transition-all duration-500 hover:bg-gray-200">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-md bg-gray-200 px-2 py-1 text-gray-700">
          1 Years
        </span>
        <button className="rounded-md bg-success-500 px-4 py-1 text-white hover:bg-success-600">
          Shop
        </button>
      </div>
      <ul className="space-y-2">
        <li className="flex items-center">
          <FaCheckCircle className="mr-2 h-5 w-5 text-success-500" />
          <span>Reach million of people</span>
        </li>
        <li className="flex items-center">
          <FaCheckCircle className="mr-2 h-5 w-5 text-success-500" />
          <span>Post Your Listing and sell anything</span>
        </li>
        <li className="flex items-center">
          <FaCheckCircle className="mr-2 h-5 w-5 text-success-500" />
          <span>Sell whatever you want at the best price</span>
        </li>
        <li className="flex items-center">
          <FaTimesCircle className="mr-2 h-5 w-5 text-red-500" />
          <span>Sell whatever you want at the best price</span>
        </li>
        <li className="flex items-center">
          <FaTimesCircle className="mr-2 h-5 w-5 text-red-500" />
          <span>Sell whatever you want at the best price</span>
        </li>
      </ul>
    </div>
  );
};

export default Plans;
