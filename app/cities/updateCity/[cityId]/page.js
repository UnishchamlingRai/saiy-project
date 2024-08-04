import React from "react";
import Head from "@/app/_components/UI/Head";
import Wrapper from "@/app/_components/UI/Wrapper";
import AddCityContaner from "@/app/_components/Features/AddCity/AddCityContaner";
import AddCityContextProvider from "@/app/_components/Features/AddCity/AddCityContext";
import { getOneCity } from "@/app/services/cityService";
export default async function Page({ params }) {
  const data = await getOneCity(params.cityId);

  const city = data.data;
  // if()

  return (
    <Wrapper>
      <Head title={`CityList- Update City (${city?.city_name})`} />
      <AddCityContextProvider>
        <div>
          <AddCityContaner editcityData={city} />
        </div>
      </AddCityContextProvider>
    </Wrapper>
  );
}
