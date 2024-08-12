import Neighborhoods from "@/app/_components/Features/CityDetails/Neighborhoods";
import Wrapper from "@/app/_components/UI/Wrapper";
import Head from "@/app/_components/UI/Head";
import React from "react";
import { getOneCity } from "@/app/services/cityService";
import StatusRow from "@/app/_components/UI/Status";
import Row from "@/app/_components/UI/Row";
import SideImage from "@/app/_components/UI/SideImage";

export async function generateMetadata({ params }) {
  const cityId = params.cityId;
  const { data: city } = await getOneCity(cityId);

  return {
    title: `${city?.city_name}- City Details`,
  };
}

const neighborhoods = [
  "شارع الامام سوكوكو رقم 12 المدينة المنورة",
  "جالان نور إيمان رقم 1",
  // Add more neighborhood names here
];

export default async function Page({ params }) {
  const cityId = params.cityId;
  const { data: city } = await getOneCity(cityId);

  return (
    <Wrapper>
      <Head title={"City Details"} />
      <div className="rounded-lg border border-gray-400 bg-white p-6">
        <div className="mb-4 flex flex-col items-start justify-between">
          <h2 className="text-xl font-bold">
            {city?.city_name} ({city?.city_name_arabic})
          </h2>

          <span
            className={`rounded-md px-2 py-1 ${city?.city_status === "active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
          >
            {city?.city_status}
          </span>
        </div>

        <div className="flex flex-col justify-between gap-4 sm:flex-row">
          <div className="flex flex-1 flex-col gap-2 p-2">
            <Row title={"City Name (English)"} value={city?.city_name} />
            <Row title={"City Name (Arabic)"} value={city?.city_name_arabic} />
            <Row title={"Territory Area"} value={city?.city_territory_area} />
            <Row title={"Country"} value={city?.city_country} />
            <StatusRow status={city?.city_status} />

            <Neighborhoods neighborhoods={neighborhoods} />
          </div>
          <SideImage image={city?.city_image} />
        </div>
      </div>
    </Wrapper>
  );
}
