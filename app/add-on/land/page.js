import NearByPlaces from "@/app/_components/Features/Add-on/Land/NearByPlaces";
import Head from "@/app/_components/UI/Head";
import SearchInput from "@/app/_components/UI/SearchInput";

export const metadata = {
  title: "Add-on - Land",
  description: "Add-on - Land",
};

export default function Page() {
  return (
    <div>
      <div className="space-y-4">
        <div>
          <Head title="Add-on - Land" />
          <SearchInput />
        </div>
        <NearByPlaces />
      </div>
    </div>
  );
}
