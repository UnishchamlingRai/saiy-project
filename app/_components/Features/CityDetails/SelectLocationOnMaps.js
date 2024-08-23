"use client";
import React, { useState, useEffect } from "react";
import SearchInput from "../../UI/SearchInput";
import { TbCurrentLocation } from "react-icons/tb";
import MapComponent from "../AddCity/MapComponent";
import PreviewMap from "./PreviewMap";
import { useGeolocation } from "@/app/hooks/useGeoLocation";

const SelectLocationOnMaps = ({
  closeSelectLocationOnMaps,
  setNeighborhoodData,
  neighborhoodData,
}) => {
  const [isOpenMap, setIsOpenMap] = useState(false);
  const [location, setLocation] = useState([24.470901, 39.612236]);
  const { getPosition, position, isLoading } = useGeolocation();
  useEffect(() => {
    if (position) {
      setLocation([position.lat, position.lng]);
    }
  }, [position]);

  function handelCurrentLocation() {
    getPosition();
    setIsOpenMap(true);
  }

  return (
    <div className="overflow-hidden rounded-md bg-white p-4">
      <h2 className="mb-2 divide-y-4 text-xl font-semibold text-primary-500">
        Select Location on Maps
      </h2>

      <SearchInput />

      {!isOpenMap ? (
        <>
          <button className="mt-2 flex w-full items-center gap-2 rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
            <TbCurrentLocation className="text-primary-500" />
            <span onClick={handelCurrentLocation}>Use current location</span>
          </button>

          <div className="mt-4">
            <ul className="overflow-y-scroll rounded-lg text-gray-700 shadow">
              <li
                onClick={() => setIsOpenMap(true)}
                className="cursor-pointer border-b border-gray-400 p-2 hover:bg-gray-400"
              >
                شارع الامام سوكوكو رقم 12 المدينة المنورة
              </li>
              <li
                onClick={() => setIsOpenMap(true)}
                className="cursor-pointer border-b border-gray-400 p-2 hover:bg-gray-400"
              >
                شارع
              </li>
            </ul>
          </div>
        </>
      ) : (
        <PreviewMap
          setNeighborhoodData={setNeighborhoodData}
          neighborhoodData={neighborhoodData}
          location={location}
          setLocation={setLocation}
        />
      )}

      <div className="mt-6 flex justify-end">
        <button
          className="mr-2 rounded-md bg-gray-200 px-4 py-2 text-gray-700"
          onClick={closeSelectLocationOnMaps}
        >
          Cancel
        </button>
        <button
          onClick={closeSelectLocationOnMaps}
          className="rounded-md bg-blue-600 px-4 py-2 text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default SelectLocationOnMaps;
