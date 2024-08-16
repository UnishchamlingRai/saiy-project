// components/CarCard.js
import React from "react";
import Icons from "../../../UI/Icons";
import EditCar from "./EditCar";

const CarCard = ({ car }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <img
        className="h-40 w-full object-cover"
        src={car.image}
        alt={`${car.brand} ${car.model}`}
      />
      <div className="p-4">
        <div className="flex items-center gap-8">
          <h3 className="text-xl font-bold">{car.brand}</h3>
          <span className="inline-block rounded-md bg-blue-100 p-2 px-4 text-xs font-semibold text-blue-500">
            Model: {car.model}
          </span>
        </div>
        <div className="flex justify-between">
          <div className="mt-4">
            <h4 className="text-sm font-semibold">Internal Additions</h4>
            <ul className="mt-1 text-sm text-gray-600">
              {car.interiorAdditions.map((addition, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2 rounded-full text-green-500">
                    &#10003;
                  </span>
                  {addition}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-semibold">External Additions</h4>
            <ul className="mt-1 text-sm text-gray-600">
              {car.externalAdditions.map((addition, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2 text-green-500">&#10003;</span>
                  {addition}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <Icons iconName={"details"} link={`/Add-ons/cars/${car.id}`} />
          <EditCar />
          <Icons iconName={"delete"} />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
