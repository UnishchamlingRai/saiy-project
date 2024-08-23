// components/TableRow.js

import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { IoIosCheckmarkCircle } from "react-icons/io";

import Icons from "./Icons";
import DeleteButton from "./DeleteButton";
import { deleteCity } from "@/app/services/cityService";

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

      <td className="space-x-2 border-b px-4 py-2 sm:block">
        <Icons link={`/cities/${city.id}`} iconName={"details"} />
        <Icons link={`/cities/updateCity/${city.id}`} iconName={"edit"} />
        <DeleteButton id={city.id} deleteApi={deleteCity} withPassword={true} />
      </td>
    </tr>
  );
};

export default TableRow;
