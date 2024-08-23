"use client";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useState, useEffect } from "react";
import { useAddCity } from "./AddCityContext";
import { useGeolocation } from "@/app/hooks/useGeoLocation";
// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"
// Fixing default icon issue in React Leaflet

const MapComponent = ({ setIsOpen }) => {
  const {
    latlng,
    setlatlng,
    setCityName,
    setCountryName,
    countryName,
    cityName,
  } = useAddCity();
  const { getPosition, position, isLoading } = useGeolocation();
  console.log("position:", position);

  function handelSave() {
    setIsOpen(false);
  }

  return (
    <div className="z-0 mt-4 rounded-lg">
      <MapContainer
        center={latlng}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "300px", width: "100%", borderRadius: "10px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={latlng}>
          <Popup keepInView={false}>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <ChangeCenter position={latlng} />
        <DetectClick
          setlatlng={setlatlng}
          setCityName={setCityName}
          setCountryName={setCountryName}
        />
      </MapContainer>
      <div>
        <button
          onClick={() => {
            getPosition();
            setlatlng([position.lat, position.lng]);
          }}
        >
          {isLoading ? "Loading..." : "Use Your Location"}
        </button>
      </div>
      <div>
        <p>{countryName && `Country: ${countryName}`}</p>
        <p>{cityName && `City: ${cityName}`}</p>
      </div>
      {/* <div className="mt-4 text-gray-700">
        <strong className="text-primary-500">Selected Location:</strong>
        <p className="text-black">
          {locationInfo ? locationInfo.display_name : "Loading..."}
        </p>
      </div> */}

      <div className="mt-6 flex justify-end">
        <button
          className="mr-2 rounded-md bg-gray-200 px-4 py-2 text-gray-700"
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </button>
        <button
          className="rounded-md bg-blue-600 px-4 py-2 text-white"
          onClick={handelSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);

  return null;
}

function DetectClick({ setlatlng, setCityName, setCountryName }) {
  useMapEvents({
    click: async (e) => {
      console.log(e.latlng);
      const res = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${e.latlng.lat}&longitude=${e.latlng.lng}`,
      );
      const data = await res.json();

      setCountryName(data.countryName);
      setCityName(data.city);

      console.log(data);

      setlatlng([e.latlng.lat, e.latlng.lng]);
    },
  });
}
export default MapComponent;
