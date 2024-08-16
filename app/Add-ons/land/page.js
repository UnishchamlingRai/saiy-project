import Wrapper from "@/app/_components/UI/Wrapper";
import Head from "@/app/_components/UI/Head";
import SearchFilterAddLand from "@/app/_components/Features/Add-ons/Lands/SearchFilterAddLand";
import LandCard from "@/app/_components/Features/Add-ons/Lands/LandCard";

export const metadata = {
  title: "Add-ons - Land",
  description: "Land",
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
      <Head title="Land" />
      <SearchFilterAddLand />
      <div className="mt-4 grid grid-cols-3 gap-4">
        <LandCard car={carData} />
      </div>
    </Wrapper>
  );
}
