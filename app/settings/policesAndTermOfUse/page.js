import Wrapper from "@/app/_components/UI/Wrapper";
import Head from "@/app/_components/UI/Head";

import SearchInput from "@/app/_components/UI/SearchInput";
import PolicesAndTermOfUseList from "@/app/_components/Features/policesAndTermOfUse/policesAndTermOfUseList";

import AddSettingItems from "@/app/_components/Features/settings/AddSettingItems";

export const metadata = {
  title: "Settings - Policies and Terms of Use",
  description: "Settings - Policies and Terms of Use",
};

export default function Page() {
  return (
    <Wrapper>
      <Head title="Settings - Policies and Terms of Use" />

      <div className="flex items-center justify-between gap-4">
        <SearchInput />
        <AddSettingItems itemName={"policesAndTermOfUse"} />
      </div>
      <PolicesAndTermOfUseList />
    </Wrapper>
  );
}
