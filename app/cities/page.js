import React from "react";
import Wrapper from "../_components/UI/Wrapper";

import SearchFilterBar from "../_components/UI/SearchFilterBar";
import Table from "../_components/UI/Table";
import TableRow from "../_components/UI/TableRow";
import CitiesHeader from "../_components/Features/cities/CitiesHeader";
import CitiesFooter from "../_components/Features/cities/CitiesFooter";
import { getAllCities } from "../services/cityService";

export const metadata = {
  title: "Cities",
};

const Page = async () => {
  const { data: cities } = await getAllCities();

  return (
    <Wrapper>
      <div className="flex flex-col gap-4">
        <CitiesHeader />
        <SearchFilterBar />
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
      </div>
    </Wrapper>
  );
};

export default Page;
