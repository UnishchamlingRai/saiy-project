"use client";
import React, { createContext, useContext, useState } from "react";

const AddCityContext = createContext();

const AddCityContextProvider = ({ children }) => {
  const [latlng, setlatlng] = useState([28.0, 84.0]);
  const [countryName, setCountryName] = useState("");
  const [stateName, setStateName] = useState("");
  const [cityName, setCityName] = useState("");
  const [image, setImage] = useState({});
  return (
    <AddCityContext.Provider
      value={{
        latlng,
        countryName,
        stateName,
        cityName,
        setlatlng,
        setCityName,
        setCountryName,
        setStateName,
        image,
        setImage,
      }}
    >
      {children}
    </AddCityContext.Provider>
  );
};

export default AddCityContextProvider;

export const useAddCity = () => {
  if (!AddCityContext) {
    throw new Error("useAddCity must be used within a AddCityContextProvider");
  }
  const context = useContext(AddCityContext);
  return context;
};
