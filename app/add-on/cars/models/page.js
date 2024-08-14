import Head from "@/app/_components/UI/Head";
import SearchInput from "@/app/_components/UI/SearchInput";

import Models from "@/app/_components/Features/Add-on/Cars/Models";

export const metadata = {
  title: "Add-on - Cars-Models",
  description: "Add-on - Cars-Models",
};

export default function Page() {
  return (
    <div>
      <div className="space-y-4">
        <div>
          <Head title="Add-on - Cars-Models" />
          <SearchInput />
        </div>
        <Models />
      </div>
    </div>
  );
}
