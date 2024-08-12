import { FaRegUser } from "react-icons/fa";
import Wrapper from "@/app/_components/UI/Wrapper";
import Head from "@/app/_components/UI/Head";
import Profile from "@/app/_components/Features/Member/Profile";
import Row from "@/app/_components/UI/Row";
import Button from "@/app/_components/UI/Button";
import Link from "next/link";
export default async function Page({ params }) {
  return (
    <Wrapper>
      <Head title="Detail End User - Upgrade Account Detail" />
      <div className="flex flex-col gap-4 p-4">
        <div className="p-4">
          <Profile />
        </div>
        <div className="font-bold">
          <div className="mb-4 flex items-center gap-2 text-lg">
            <FaRegUser />
            <h1>User Details</h1>
          </div>
          <div>
            <Row title={"Fullname (English)"} value={"Unish Rai"} />
            <Row title={"Fullname (Arabic)"} value={"Unish Rai"} />
            <Row title={"Email"} value={"example.com"} />
            <Row title={"Number of Chats"} value={"100"} />
            <Row title={"Number of Ads"} value={"4.213"} />
          </div>
        </div>
        <div className="font-bold">
          <div className="mb-4 flex items-center gap-2 text-lg">
            <FaRegUser />
            <h1>Upgrade Details</h1>
          </div>
          <div>
            <Row title={"Previous Account"} value={"Default Account"} />
            <Row title={"Upgrade Request"} value={"Shop - Yearly - 2 Years"} />
            <Row title={"Upgrade Fees"} value={"$2.000"} />
          </div>
        </div>
        <div className="flex justify-end gap-2 border-t border-gray-300 pt-4">
          <div className="flex w-2/6 gap-2">
            <Button variant="secondary">Cancel</Button>

            <Button variant="primary">
              <Link href="/member/enduser/1/upgradeAccount/1">Upgrade Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
