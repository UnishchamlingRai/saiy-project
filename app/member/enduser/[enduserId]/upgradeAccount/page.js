import Wrapper from "@/app/_components/UI/Wrapper";
import Head from "@/app/_components/UI/Head";
import Profile from "@/app/_components/Features/Member/Profile";
import Button from "@/app/_components/UI/Button";
import { MdOutlineUpgrade } from "react-icons/md";
import CustomSelect from "@/app/_components/UI/CustomSelect";
import Plans from "@/app/_components/Features/Member/endUser/Plans";
import Link from "next/link";
const accountType = [
  { value: "shop", label: "shop 1" },
  { value: "house", label: "house 2" },
  { value: "resturent", label: "resturent 3" },
];
export default async function page({ params }) {
  return (
    <Wrapper>
      <Head title="Member - Upgrade Account" />
      <div className="flex flex-col gap-8 rounded-lg border border-gray-300 p-4">
        <Profile />
        <div className="flex items-center justify-between gap-8">
          <div className="flex-1">
            <h2>Select Duration</h2>
            <div className="flex items-center gap-2">
              <Button variant="secondary">Monthly</Button>
              <Button variant="secondary">Yearly</Button>
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <h2>Select Account Type</h2>
            <div className="flex-1">
              <CustomSelect
                options={accountType}
                placeholder={"Select Account Type"}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-start justify-between gap-2">
          <h1>Select Plans</h1>
          <div className="flex gap-2">
            <Plans />
            <Plans />
            <Plans />
          </div>
        </div>
        <div className="flex justify-end gap-2 border-t border-gray-300 pt-4">
          <div className="flex w-2/6 gap-2">
            <Button variant="secondary">Cancel</Button>

            <Button variant="primary">
              <Link href="/member/enduser/1/upgradeAccount/1">Next</Link>
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
