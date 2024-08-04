"use client";
// components/DashboardHeader.js
import { useState } from "react";
import CustomSelect from "../../UI/CustomSelect";

export default function DashboardHeader({ title }) {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleCountryChange = (e) => setSelectedCountry(e.target.value);
  const handleCityChange = (e) => setSelectedCity(e.target.value);

  const countryOptions = [
    { value: "country1", label: "Country 1" },
    { value: "country2", label: "Country 2" },
    { value: "country3", label: "Country 3" },
  ];

  const cityOptions = [
    { value: "city1", label: "City 1" },
    { value: "city2", label: "City 2" },
    { value: "city3", label: "City 3" },
  ];

  return (
    <div className="flex flex-1 flex-col items-center justify-between p-2 sm:flex-row">
      <h1 className="mb-4 text-2xl font-bold sm:mb-0">{title}</h1>
      <div className="flex space-x-4">
        <CustomSelect
          value={selectedCountry}
          onChange={handleCountryChange}
          options={countryOptions}
          placeholder="Select Country"
        />
        <CustomSelect
          value={selectedCity}
          onChange={handleCityChange}
          options={cityOptions}
          placeholder="Select City"
        />
      </div>
    </div>
  );
}
