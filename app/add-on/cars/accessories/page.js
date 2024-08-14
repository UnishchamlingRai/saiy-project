import Head from "@/app/_components/UI/Head";
import SearchInput from "@/app/_components/UI/SearchInput";
import Accessories from "@/app/_components/Features/Add-on/Cars/Accessories";

export const metadata = {
  title: "Add-on - Cars-Accessories",
  description: "Add-on - Cars-Accessories",
};

export default function Page() {
  return (
    <div>
      <div className="space-y-4">
        <div>
          <Head title="Add-ons - Cars-Accessories" />
          <SearchInput />
        </div>
        <Accessories />
      </div>
    </div>
  );
}
