import Wrapper from "@/app/_components/UI/Wrapper";
import Head from "@/app/_components/UI/Head";
import Row from "@/app/_components/UI/Row";
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
export default function Car({ params }) {
  return (
    <Wrapper>
      <Head title={"Detail - BMW X5"} />
      <div className="flex gap-4 rounded-lg border border-gray-300 p-4">
        <div className="flex-1 space-y-4">
          <div>
            <Row title={"Brand of Cars"} value={"BMW"} />
            <Row title={"Model"} value={"X5"} />
            <Row
              title={"Interior Additions"}
              value={
                <ul className="mt-1 grid grid-cols-2 justify-items-end text-sm text-gray-600">
                  {carData.interiorAdditions.map((addition, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2 rounded-full text-green-500">
                        &#10003;
                      </span>
                      {addition}
                    </li>
                  ))}
                </ul>
              }
            />
            <Row
              title={"External additions "}
              value={
                <ul className="mt-1 grid grid-cols-2 justify-items-end text-sm text-gray-600">
                  {carData.externalAdditions.map((addition, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2 rounded-full text-green-500">
                        &#10003;
                      </span>
                      {addition}
                    </li>
                  ))}
                </ul>
              }
            />
          </div>
        </div>
        <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-md">
          <div>Image</div>
        </div>
      </div>
    </Wrapper>
  );
}
