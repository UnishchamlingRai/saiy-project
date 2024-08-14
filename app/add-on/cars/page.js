import Head from "@/app/_components/UI/Head";
import SearchInput from "@/app/_components/UI/SearchInput";
import BrandManager from "@/app/_components/Features/Add-on/Cars/Brand";

export const metadata = {
  title: "Add-on - Cars",
  description: "Add-on - Cars",
};

export default function Page() {
  return (
    <div>
      <div className="space-y-4">
        <div>
          <Head title="Add-ons - Cars" />
          <SearchInput />
        </div>
        <BrandManager />
      </div>
    </div>
  );
}
