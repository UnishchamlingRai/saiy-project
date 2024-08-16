import Wrapper from "@/app/_components/UI/Wrapper";
import Head from "@/app/_components/UI/Head";

import SearchFilterAddApartment from "@/app/_components/Features/Add-ons/Apartments/SearchFilterAddApartment";
import ApartmentCard from "@/app/_components/Features/Add-ons/Apartments/ApartmentCard";

export const metadata = {
  title: "Add-ons - Apartments",
  description: "Apartments",
};
const carData = {
  id: "1",
  brand: "BMW",
  model: "X5",
  image: "/path/to/your/image.jpg",
  interiorAdditions: [
    "Interior lighting",
    "Heated Seats",
    "Air Conditioning",
    "Disk Player",
  ],
  externalAdditions: ["Chrome Tyres", "Powerful Lighting"],
};
export default function Cars() {
  return (
    <Wrapper>
      <Head title="Apartments" />
      <SearchFilterAddApartment />

      <div className="mt-4 grid grid-cols-3 gap-4">
        <ApartmentCard car={carData} />
      </div>
    </Wrapper>
  );
}
