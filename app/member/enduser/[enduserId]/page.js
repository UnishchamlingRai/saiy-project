import { MdOutlineUpgrade } from "react-icons/md";
import Wrapper from "@/app/_components/UI/Wrapper";
import Head from "@/app/_components/UI/Head";
import Row from "@/app/_components/UI/Row";
import Profile from "@/app/_components/Features/Member/Profile";
import { FaWallet } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import Button from "@/app/_components/UI/Button";
import Link from "next/link";
import { getOneEndUser } from "@/app/services/member/endUserService";

export default async function Page({ params }) {
  const { enduserId } = params;
  // console.log("params:", params);
  const endUser = await getOneEndUser(enduserId);
  console.log("endUser:", endUser);
  return (
    <Wrapper>
      <Head title="Detail End User" />
      <div className="rounded-lg border border-gray-300 p-4">
        <div className="mb-4 flex items-center justify-between rounded-lg bg-gray-100 p-4">
          <Profile />
          <Link href={`/member/enduser/${enduserId}/upgradeAccount`}>
            <Button>
              <MdOutlineUpgrade /> <span>Upgrade</span>
            </Button>
          </Link>
        </div>

        <div className="flex gap-4 rounded-lg border border-gray-300 p-4">
          <div className="flex-1 space-y-4">
            <Row title={"Fullname (English)"} value={"Unish Rai"} />
            <Row title={"Fullname (Arabic)"} value={"Unish Rai"} />
            <Row title={"Gender"} value={"Male"} />
            <Row title={"Age"} value={"19"} />
            <Row title={"Phone Number"} value={"98"} />
            <Row title={"City"} value={"Gaighat"} />
            <Row title={"Neighborhood"} value={"Gaighat"} />
            <Row title={"Email"} value={"example.com"} />
            <Row title={"Password"} value={"example.com"} />
            <Row title={"Re-enter password"} value={"example.com"} />
            <Row title={"Member Status"} value={"End-User"} />
          </div>
          <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-md">
            <div className="border-b p-4">
              <h2 className="text-xl font-bold">Image Verification</h2>
              <div className="mt-2">
                {/* <Image
                  src="/mnt/data/Frame 427321206.png" // Adjust the path as needed
                  alt="ID card"
                  width={300}
                  height={200}
                  className="rounded-md"
                /> */}
              </div>
              <button className="mt-2 text-blue-600 hover:underline">
                Change Image
              </button>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Wallet</h2>
                <Link
                  href={`/member/enduser/${enduserId}/walletDetail`}
                  className="flex items-center text-blue-600"
                >
                  <BiDetail className="mr-1 h-5 w-5" />
                  Wallet Detail
                </Link>
              </div>
              <div className="mt-2 flex items-center">
                <FaWallet className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <div className="text-lg font-semibold">
                    342189-YUEAM-898178
                  </div>
                  <div className="text-gray-600">Balance</div>
                </div>
              </div>
              <div className="mt-2">
                <div className="text-2xl font-bold">$900,00</div>
                <div className="flex items-center text-green-600">
                  <span className="text-lg">↑ 2.5</span>
                  <span className="ml-1 text-gray-600">+100,00 this week</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
