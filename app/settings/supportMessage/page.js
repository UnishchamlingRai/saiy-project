import Wrapper from "@/app/_components/UI/Wrapper";
import Head from "@/app/_components/UI/Head";

import SearchInput from "@/app/_components/UI/SearchInput";

import AddSettingItems from "@/app/_components/Features/settings/AddSettingItems";
import SupportMessageList from "@/app/_components/Features/settings/SupportMessage/supportMessageList";

export const metadata = {
  title: "Settings - Support Message",
  description: "Settings - Support Message",
};

export default function Page() {
  return (
    <Wrapper>
      <Head title="Settings - Support Message" />

      <div className="flex items-center justify-between gap-4">
        <SearchInput />
        <AddSettingItems itemName={"policesAndTermOfUse"} />
      </div>
      <SupportMessageList />
    </Wrapper>
  );
}
