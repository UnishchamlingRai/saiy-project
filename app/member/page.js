import Link from "next/link";
import { Suspense } from "react";

import Wrapper from "../_components/UI/Wrapper";
import Head from "../_components/UI/Head";
import SearchInput from "../_components/UI/SearchInput";
import Button from "../_components/UI/Button";
import EndUserList from "../_components/Features/Member/endUser/EndUserList";
import Spinner from "../_components/UI/Spinner";
export const metadata = {
  title: "Member - End-User",
  description: "Member - End-User",
};
export default async function Page({ params }) {
  console.log(params);
  return (
    <Wrapper>
      <Head title="Member - End-User" />
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <SearchInput />
        </div>
        <div className="flex flex-1 items-center justify-center gap-2">
          <div className="flex-1">
            <Button variant="secondary">Filter</Button>
          </div>
          <Link className="linkStyle flex-1" href="/member/enduser/create">
            + Create End-User
          </Link>
        </div>
      </div>
      <Suspense fallback={<Spinner />}>
        <EndUserList />
      </Suspense>
    </Wrapper>
  );
}
