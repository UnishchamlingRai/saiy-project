import Wrapper from "@/app/_components/UI/Wrapper";
import Head from "@/app/_components/UI/Head";
import SearchFilterAddCars from "@/app/_components/Features/Add-ons/Cars/SearchFilterAddCars";
import CarCard from "@/app/_components/Features/Add-ons/Cars/CarCard";

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
      <Head title="Cars" description="Cars" />
      <SearchFilterAddCars />
      <div className="mt-4 grid grid-cols-3 gap-4">
        <CarCard car={carData} />
        <CarCard car={carData} />
        <CarCard car={carData} />
        <CarCard car={carData} />
      </div>
    </Wrapper>
  );
}
