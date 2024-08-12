"use client";
import React, { useState } from "react";
import { CitySelect } from "react-country-state-city";

import Modal from "../../UI/Modal";
import SearchInput from "../../UI/SearchInput";
import MapComponent from "../CityDetails/MapComponent";
import { useAddCity } from "./AddCityContext";
import toast from "react-hot-toast";

const SearchOnMap = ({ countryid, stateid }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { latlng, setlatlng, cityName, setCityName } = useAddCity();

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <button
        className="rounded bg-primary-600 px-4 py-2 text-white"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        Search on Map
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div>
          <h2 className="text-md rounded-lg p-2 font-bold text-primary-500 shadow">
            Search City Map
          </h2>

          <div className="mt-4">
            <div className="mb-[100px]">
              <CitySelect
                countryid={countryid}
                stateid={stateid}
                onChange={(e) => {
                  setlatlng([e.latitude, e.longitude]);
                  setCityName(e.name);
                }}
                onClick={() => {
                  if (!stateid) {
                    toast.error(
                      "First Select Country & State to search and select City",
                    );
                  }
                }}
                placeHolder="Select City"
                style={{ border: "none", padding: "2px", outline: "none" }}
              />
            </div>

            {/* MapComponent rendered below CitySelect */}
            <div>
              <MapComponent setIsOpen={setIsOpen} />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SearchOnMap;
