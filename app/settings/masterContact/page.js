import Wrapper from "@/app/_components/UI/Wrapper";
import Head from "@/app/_components/UI/Head";
import SearchInput from "@/app/_components/UI/SearchInput";
import MasterContactList from "@/app/_components/Features/settings/MasterContact/MasterContactList";
import SearchAddFilterMasterContact from "@/app/_components/Features/settings/MasterContact/SearchAddFilterMasterContact";

export const metadata = {
  title: "Settings - Master Contact",
  description: "Settings - Master Contact",
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
      <Head title="Settings - Master Contact" />
      <div className="jstify-between flex items-center gap-2">
        <SearchInput />
        <SearchAddFilterMasterContact />
      </div>
      <div className="mt-2">
        <MasterContactList stores={stores} />
      </div>
    </Wrapper>
  );
}
