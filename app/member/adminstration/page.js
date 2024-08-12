import { Suspense } from "react";
import Link from "next/link";

import Wrapper from "@/app/_components/UI/Wrapper";
import Head from "@/app/_components/UI/Head";
import SearchInput from "@/app/_components/UI/SearchInput";
import Button from "@/app/_components/UI/Button";
import AdminstrationList from "@/app/_components/Features/Member/adminstration/AdminstrationList";
import Spinner from "@/app/_components/UI/Spinner";
export const metadata = {
  title: "Member - Adminstration",
  description: "Member - Adminstration",
};
export default async function Page({ params }) {
  //   console.log(params);
  return (
    <Wrapper>
      <Head title="Member - Adminstration" />
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <SearchInput />
        </div>
        <div className="flex flex-1 items-center justify-center gap-2">
          <div className="flex-1">
            <Button variant="secondary">Filter</Button>
          </div>
          <Link
            className="linkStyle flex-1"
            href="/member/adminstration/create"
          >
            + Create Adminstration
          </Link>
        </div>
      </div>
      <Suspense fallback={<Spinner />}>
        <AdminstrationList />
      </Suspense>
    </Wrapper>
  );
}
