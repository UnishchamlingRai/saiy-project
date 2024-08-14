import NearByPlaces from "@/app/_components/Features/Add-on/Apartments/NearByPlaces";
import Head from "@/app/_components/UI/Head";
import SearchInput from "@/app/_components/UI/SearchInput";

export const metadata = {
  title: "Add-on - Apartments-Near by Places",
  description: "Add-on - Apartments-Near by Places",
};

export default function Page() {
  return (
    <div>
      <div className="space-y-4">
        <div>
          <Head title="Add-on - Apartments-Near by Places" />
          <SearchInput />
        </div>
        <NearByPlaces />
      </div>
    </div>
  );
}
