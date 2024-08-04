"use client";
import { useState } from "react";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import SearchOnMap from "./SearchOnMap";
import { useAddCity } from "./AddCityContext";
import toast from "react-hot-toast";

export default function SelectCityAndCountry({ editcityData }) {
  // console.log(editcityData.city_country);
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  // const [city,setCity]=useState()
  const { setCountryName, setCityName, countryName, setlatlng, cityName } =
    useAddCity();

  function addCityData(city) {
    setCityName(city.name);
    setlatlng([city.latitude, city.longitude]);
    console.log(city);
  }
  function addCountryData(country) {
    setCountryid(country.id);
    setCountryName(country.name);
  }

  return (
    <div className="flex flex-col gap-2 text-sm font-medium text-gray-700">
      <div className="flex flex-col gap-1">
        <h6>Country</h6>
        <CountrySelect
          showFlag={false}
          // defaultValue={editcityData?.city_country}
          onChange={addCountryData}
          placeHolder={
            editcityData?.city_country
              ? editcityData?.city_country
              : "Select Country"
          }
          containerClassName="selectCountry"
          style={{ border: "none", padding: "2px", outline: "none" }}
        />
      </div>
      <div className="flex flex-col gap-1">
        <h6>State</h6>

        <StateSelect
          // disabled={true}
          countryid={countryid}
          onClick={() => {
            if (!countryid) {
              toast.error("Fist Select Country");
            }
          }}
          onChange={(e) => {
            setstateid(e.id);
            console.log(e);
          }}
          placeHolder="Select State"
          style={{ border: "none", padding: "2px", outline: "none" }}
        />
      </div>
      <div className="flex gap-1">
        <div className="flex flex-1 flex-col gap-1">
          <h6>City</h6>
          <CitySelect
            countryid={countryid}
            stateid={stateid}
            onChange={addCityData}
            onClick={() => {
              if (!stateid) {
                toast.error("Fist Select Country & State");
              }
            }}
            placeHolder={
              editcityData?.city_name ? editcityData?.city_name : "Select City"
            }
            style={{ border: "none", padding: "2px", outline: "none" }}
          />
        </div>
        <div className="mt-6 flex items-center justify-center">
          <SearchOnMap countryid={countryid} stateid={stateid} />
        </div>
      </div>
    </div>
  );
}
