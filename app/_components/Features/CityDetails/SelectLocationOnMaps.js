"use client";
import React, { useState, useEffect } from "react";
import SearchInput from "../../UI/SearchInput";
import { TbCurrentLocation } from "react-icons/tb";
import MapComponent from "./MapComponent";

const SelectLocationOnMaps = ({ prevStep, setLocation, location }) => {
  const [isOpenMap, setIsOpenMap] = useState(false);

  const handleUseCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation([position.coords.latitude, position.coords.longitude]);
        setIsOpenMap(true);
      },
      (error) => {
        console.error("Error getting current location:", error);
      },
    );
  };

  const handleLocationSelect = (lat, lon) => {
    setLocation([lat, lon]);
    setIsOpenMap(true);
  };

  const handleSearch = (e) => {
    console.log(e.target.value);
    const city = e.target.value;
    // Dummy data, you can integrate with an actual geocoding service
    const locations = {
      "شارع الامام سوكوكو رقم 12 المدينة المنورة": [24.470901, 39.612236],
    };
    if (locations[city]) {
      setLocation(locations[city]);
      setIsOpenMap(true);
    }
  };

  return (
    <div className="overflow-hidden rounded-md bg-white p-4">
      <h2 className="mb-2 divide-y-4 text-xl font-semibold text-primary-500">
        Select Location on Maps
      </h2>

      <SearchInput onChange={handleSearch} />

      {!isOpenMap ? (
        <>
          <button
            onClick={handleUseCurrentLocation}
            className="mt-2 flex w-full items-center gap-2 rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
          >
            <TbCurrentLocation className="text-primary-500" />
            <span>Use current location</span>
          </button>

          <div className="mt-4">
            <ul className="overflow-y-scroll rounded-lg text-gray-700 shadow">
              <li
                onClick={() => handleLocationSelect(24.470901, 39.612236)}
                className="cursor-pointer border-b border-gray-400 p-2 hover:bg-gray-400"
              >
                شارع الامام سوكوكو رقم 12 المدينة المنورة
              </li>
              <li
                onClick={() => handleLocationSelect(24.470901, 39.612236)}
                className="cursor-pointer border-b border-gray-400 p-2 hover:bg-gray-400"
              >
                شارع
              </li>
            </ul>
          </div>
        </>
      ) : (
        <MapComponent location={location} />
      )}

      <div className="mt-6 flex justify-end">
        <button
          className="mr-2 rounded-md bg-gray-200 px-4 py-2 text-gray-700"
          onClick={prevStep}
        >
          Cancel
        </button>
        <button className="rounded-md bg-blue-600 px-4 py-2 text-white">
          Save
        </button>
      </div>
    </div>
  );
};

export default SelectLocationOnMaps;
