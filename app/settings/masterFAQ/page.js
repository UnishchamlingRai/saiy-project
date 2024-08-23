import Wrapper from "@/app/_components/UI/Wrapper";
import Head from "@/app/_components/UI/Head";
import Table from "@/app/_components/UI/Table";
import Icons from "@/app/_components/UI/Icons";
import Button from "@/app/_components/UI/Button";
import SearchInput from "@/app/_components/UI/SearchInput";
import MasterFAQList from "@/app/_components/Features/settings/MasterFAQ/MasterFAQList";

import SearchFilterAddFAQ from "@/app/_components/Features/settings/MasterFAQ/SearchFilterAddFAQ";

export const metadata = {
  title: "Settings - Master FAQ",
  description: "Settings - Master FAQ",
};

export default function Page() {
  const stores = [
    {
      id: 1,
      name: "store1",
    },
  ];
  return (
    <Wrapper>
      <Head title="Settings - Master FAQ" />
      <div className="jstify-between flex items-center gap-2">
        <SearchInput />
        <SearchFilterAddFAQ />
      </div>
      <div className="mt-2">
        <MasterFAQList stores={stores} />
      </div>
    </Wrapper>
  );
}
