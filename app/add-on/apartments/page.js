import Head from "@/app/_components/UI/Head";
import SearchInput from "@/app/_components/UI/SearchInput";
import MainFeatures from "@/app/_components/Features/Add-on/Apartments/MainFeatures";

export const metadata = {
  title: "Add-on - Apartments",
  description: "Add-on - Apartments",
};

export default function Page() {
  return (
    <div>
      <div className="space-y-4">
        <div>
          <Head title="Add-on - Apartments" />
          <SearchInput />
        </div>
        <MainFeatures />
      </div>
    </div>
  );
}
