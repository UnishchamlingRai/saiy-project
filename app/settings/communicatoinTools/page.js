import Wrapper from "@/app/_components/UI/Wrapper";
import Head from "@/app/_components/UI/Head";

import SearchInput from "@/app/_components/UI/SearchInput";

import AddSettingItems from "@/app/_components/Features/settings/AddSettingItems";
import CommunicationToolList from "@/app/_components/Features/settings/communicationTools/CommunicationToolList";

export const metadata = {
  title: "Settings - Communication Tools",
  description: "Settings - Communication Tools",
};

export default function Page() {
  return (
    <Wrapper>
      <Head title="Settings - Communication Tools" />

      <div className="flex items-center justify-between gap-4">
        <SearchInput />
        <AddSettingItems itemName={"communicatoinTools"} />
      </div>
      <CommunicationToolList />
    </Wrapper>
  );
}
