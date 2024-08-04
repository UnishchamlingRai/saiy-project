import React from "react";
import Head from "@/app/_components/UI/Head";
import Wrapper from "@/app/_components/UI/Wrapper";
import AddCityContaner from "@/app/_components/Features/AddCity/AddCityContaner";
import AddCityContextProvider from "@/app/_components/Features/AddCity/AddCityContext";
export default function Page() {
  return (
    <Wrapper>
      <Head title="CityList- Add City" />
      <AddCityContextProvider>
        <div>
          <AddCityContaner />
        </div>
      </AddCityContextProvider>
    </Wrapper>
  );
}
