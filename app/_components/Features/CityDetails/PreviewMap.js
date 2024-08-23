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

import { useGeolocation } from "@/app/hooks/useGeoLocation";
// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"
// Fixing default icon issue in React Leaflet

const PreviewMap = ({
  location,
  setLocation,
  setNeighborhoodData,
  neighborhoodData,
}) => {
  // console.log("position:", position);

  function handelSave() {}

  return (
    <div className="z-0 mt-4 rounded-lg">
      <MapContainer
        center={location}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "300px", width: "100%", borderRadius: "10px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={location}>
          <Popup keepInView={false}>
            <p>{neighborhoodData.city}</p>
          </Popup>
        </Marker>
        <ChangeCenter position={location} />
        <DetectClick
          setLocation={setLocation}
          setNeighborhoodData={setNeighborhoodData}
        />
      </MapContainer>
      <div></div>
      <div>
        <p>{neighborhoodData.city}</p>
      </div>
    </div>
  );
};

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);

  return null;
}

function DetectClick({ setLocation, setNeighborhoodData }) {
  useMapEvents({
    click: async (e) => {
      // console.log(e.latlng);
      const res = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${e.latlng.lat}&longitude=${e.latlng.lng}`,
      );
      const data = await res.json();
      setLocation([e.latlng.lat, e.latlng.lng]);
      const city = `${data.city}, ${data.countryName}`;
      setNeighborhoodData({
        latitude: data.latitude,
        longitude: data.longitude,
        city: city,
      });
      // console.log(data);
    },
  });
}
export default PreviewMap;
