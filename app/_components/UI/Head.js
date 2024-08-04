"use client";
import { useRouter } from "next/navigation";

import React from "react";
import { FaArrowLeft } from "react-icons/fa";
const CityDetailHeader = ({ title }) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="flex items-center rounded-md bg-white p-2">
      <FaArrowLeft
        size={40}
        className="mr-8 cursor-pointer rounded-xl p-2 text-xl transition-all duration-500 hover:bg-gray-400"
        onClick={handleBackClick}
      />
      <h1 className="text-lg font-bold">{title}</h1>
    </div>
  );
};

export default CityDetailHeader;
