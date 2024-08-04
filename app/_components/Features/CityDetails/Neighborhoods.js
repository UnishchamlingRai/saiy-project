"use client";
// components/Neighborhoods.js

import React, { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import SearchInput from "../../UI/SearchInput";
import AddNeigborhoods from "./AddNeigborhoods";

const Neighborhoods = ({ neighborhoods }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredNeighborhoods = neighborhoods.filter((neighborhood) =>
    neighborhood.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="rounded-lg bg-white">
      <div
        className="flex cursor-pointer items-center justify-between p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-md font-bold">Neighborhoods</h2>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>

      {isOpen && (
        <div className="rounded-lg border border-gray-300 p-2">
          <div className="flex flex-col gap-4 sm:flex-row">
            <SearchInput
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />

            <AddNeigborhoods />
          </div>
          <ul className="mt-4 flex flex-col items-end">
            {filteredNeighborhoods.map((neighborhood, index) => (
              <li key={index} className="flex items-center gap-6 border-b p-2">
                <div className="flex-grow cursor-pointer">{neighborhood}</div>
                <div className="flex flex-shrink-0 items-center">
                  <FaPencilAlt className="mr-4 cursor-pointer text-yellow-500" />
                  <FaTrash className="cursor-pointer text-red-500" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Neighborhoods;
