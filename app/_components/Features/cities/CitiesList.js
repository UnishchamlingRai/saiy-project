import React from "react";
import Table from "../../UI/Table";
import TableRow from "../../UI/TableRow";
import { useGetAllCities } from "@/app/hooks/city/useGetAllCiteis";
import { getAllCities } from "@/app/services/cityService";

const CitiesList = async () => {
  const { data: cities } = await getAllCities();
  console.log("cities:", cities);
  return (
    <Table
      tableHeaders={[
        "City Name(English)",
        "City Name(Arabic)",
        "Territory Area",
        "Status",
        "Action",
      ]}
    >
      {cities.map((city, index) => (
        <TableRow key={index} city={city} />
      ))}
    </Table>
  );
};

export default CitiesList;
