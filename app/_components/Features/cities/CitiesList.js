import React from "react";
import Table from "../../UI/Table";
import TableRow from "../../UI/TableRow";

import { getAllCities } from "@/app/services/cityService";
import CitiesFooter from "./CitiesFooter";

const CitiesList = async () => {
  const {
    data: { items: cities },
  } = await getAllCities();

  return (
    <>
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
      <CitiesFooter totalCities={cities.length} />
    </>
  );
};

export default CitiesList;
