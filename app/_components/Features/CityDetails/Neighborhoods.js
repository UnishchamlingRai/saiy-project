"use client";
// components/Neighborhoods.js

import React, { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import SearchInput from "../../UI/SearchInput";
import AddNeigborhoods from "./AddNeigborhoods";
import DeleteButton from "../../UI/DeleteButton";
import { deleteNeighborhood } from "@/app/services/neighborhoodService";

const Neighborhoods = ({ neighborhoods, cityId }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredNeighborhoods = neighborhoods.filter((neighborhood) =>
    neighborhood.neighborhood_name
      .toLowerCase()
      .includes(searchTerm.toLowerCase()),
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

            <AddNeigborhoods cityId={cityId} />
          </div>
          {neighborhoods.length > 0 ? (
            <ul className="mt-4 flex flex-col items-end">
              {filteredNeighborhoods.length > 0 ? (
                <>
                  {filteredNeighborhoods.map((neighborhood, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-6 border-b p-2"
                    >
                      <div className="flex-grow cursor-pointer">
                        {neighborhood.neighborhood_name}
                      </div>
                      <div className="flex flex-shrink-0 items-center">
                        <FaPencilAlt className="mr-4 cursor-pointer text-yellow-500" />
                        {/* <FaTrash className="cursor-pointer text-red-500" /> */}
                        <DeleteButton
                          id={neighborhood.id}
                          deleteApi={deleteNeighborhood}
                          withPassword={false}
                        />
                      </div>
                    </li>
                  ))}
                </>
              ) : (
                <p className="text-center font-bold">
                  No Neighborhoods Found for{" "}
                  <span className="px-2 text-danger-500">{`" ${searchTerm} "`}</span>{" "}
                  Search
                </p>
              )}
            </ul>
          ) : (
            <p className="p-2 text-center font-bold">
              No Neighborhoods. Add your Fist Neighborhood
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Neighborhoods;
