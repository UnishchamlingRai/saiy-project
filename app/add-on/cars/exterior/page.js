import Exterior from "@/app/_components/Features/Add-on/Cars/Exterior";
import Head from "@/app/_components/UI/Head";
import SearchInput from "@/app/_components/UI/SearchInput";

export const metadata = {
  title: "Add-on - Cars-Exterior",
  description: "Add-on - Cars-Exterior",
};

export default function Page() {
  return (
    <div>
      <div className="space-y-4">
        <div>
          <Head title="Add-ons - Cars-Exterior" />
          <SearchInput />
        </div>
        <Exterior />
      </div>
    </div>
  );
}
