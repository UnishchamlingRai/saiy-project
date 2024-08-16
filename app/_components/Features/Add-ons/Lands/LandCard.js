// components/CarCard.js
import React from "react";
import Icons from "../../../UI/Icons";
// import EditCar from "./EditCar";

const LandCard = ({ car }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <img
        className="h-40 w-full object-cover"
        src={car.image}
        alt={`${car.brand} ${car.model}`}
      />
      <div className="flex flex-col p-4">
        <div className="flex items-center gap-8">
          <h3 className="text-xl font-bold">{car.brand}</h3>
        </div>
        <div className="flex justify-between">
          <div className="mt-4">
            <h4 className="text-sm font-semibold">Nearby places</h4>
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
        </div>
        <div className="mt-4 flex gap-2 self-end">
          <Icons iconName={"details"} link={`/Add-ons/land/${car.id}`} />
          {/* <EditCar /> */}
          <Icons iconName={"delete"} />
        </div>
      </div>
    </div>
  );
};

export default LandCard;
