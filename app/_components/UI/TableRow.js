// components/TableRow.js

import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { IoIosCheckmarkCircle } from "react-icons/io";
import CitiesActions from "../Features/cities/CitiesActions";

const TableRow = ({ city }) => {
  return (
    <tr className="hover:bg-gray-50">
      <td className="border-b px-4 py-2">{city.city_name}</td>
      <td className="border-b px-4 py-2">{city.city_name_arabic}</td>
      <td className="border-b px-4 py-2">{city.city_territory_area}</td>
      <td className="border-b px-4 py-2">
        <span
          className={`hidden items-center gap-2 rounded-full px-2.5 py-0.5 text-sm font-bold sm:inline-flex ${
            city?.city_status === "active"
              ? "text-success-500"
              : "text-danger-500"
          }`}
        >
          <span>
            {city.city_status === "active" ? (
              <IoIosCheckmarkCircle />
            ) : (
              <RiCloseCircleFill />
            )}{" "}
          </span>{" "}
          {city.city_status}
        </span>
      </td>

      <td className="hidden border-b px-4 py-2 sm:block">
        <CitiesActions cityId={city.id} />
      </td>
    </tr>
  );
};

export default TableRow;
