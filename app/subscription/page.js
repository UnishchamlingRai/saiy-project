import { Suspense } from "react";
import Link from "next/link";

import Wrapper from "@/app/_components/UI/Wrapper";
import Head from "@/app/_components/UI/Head";
import SearchInput from "@/app/_components/UI/SearchInput";
import Button from "@/app/_components/UI/Button";

import Spinner from "@/app/_components/UI/Spinner";
import SubscriptionList from "../_components/Features/Subscription/SubscriptionList";
export const metadata = {
  title: "Subscription",
  description: "Subscription",
};
export default async function Page({ params }) {
  //   console.log(params);
  return (
    <Wrapper>
      <Head title="Member - Subscription" />
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <SearchInput />
        </div>
        <div className="flex flex-1 items-center justify-center gap-2">
          <div className="flex-1">
            <Button variant="secondary">Filter</Button>
          </div>
          <Link className="linkStyle flex-1" href="/subscription/create">
            + Create Subscription
          </Link>
        </div>
      </div>
      <Suspense fallback={<Spinner />}>
        <SubscriptionList />
      </Suspense>
    </Wrapper>
  );
}
