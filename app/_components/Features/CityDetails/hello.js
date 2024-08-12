"use client";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useState, useEffect } from "react";
import { useAddCity } from "../AddCity/AddCityContext";

// Fixing default icon issue in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MapComponent = () => {
  const { latlng, setlatlng } = useAddCity();
  const [markerPosition, setMarkerPosition] = useState(latlng);
  const [locationInfo, setLocationInfo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        if (markerPosition) {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${markerPosition[0]}&lon=${markerPosition[1]}`,
          );
          const data = await response.json();
          setLocationInfo(data);
          console.log(data);
        }
      } catch (error) {
        console.error("Error fetching location info:", error);
      }
    }
    fetchData();
  }, [markerPosition]);

  const MapUpdater = () => {
    const map = useMapEvents({
      click(e) {
        const newLatLng = [e.latlng.lat, e.latlng.lng];
        setMarkerPosition(newLatLng);
        setlatlng(newLatLng); // Update the latlng in AddCityContext
      },
    });

    useEffect(() => {
      if (latlng) {
        map.setView(latlng, 13);
      }
    }, [latlng, map]);

    return null;
  };

  return (
    <div className="z-0 mt-4 rounded-lg">
      <MapContainer
        center={latlng}
        zoom={13}
        style={{ height: "300px", width: "100%", borderRadius: "10px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={markerPosition}></Marker>
        <MapUpdater />
      </MapContainer>
      <div className="mt-4 text-gray-700">
        <strong className="text-primary-500">Selected Location:</strong>
        <p className="text-black">
          {locationInfo ? locationInfo.display_name : "Loading..."}
        </p>
      </div>
    </div>
  );
};

export default MapComponent;
