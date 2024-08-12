import Wrapper from "@/app/_components/UI/Wrapper";
import Head from "@/app/_components/UI/Head";
import Link from "next/link";
import SearchInput from "@/app/_components/UI/SearchInput";
import Button from "@/app/_components/UI/Button";
import { Suspense } from "react";
import Spinner from "@/app/_components/UI/Spinner";
import StoresList from "@/app/_components/Features/Member/stores/StoresList";
export const metadata = {
  title: "Member - Stores",
  description: "Member - Stores",
};
export default async function Page({ params }) {
  // console.log(params);
  return (
    <Wrapper>
      <Head title="Member - Stores" />
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <SearchInput />
        </div>
        <div className="flex flex-1 items-center justify-center gap-2">
          <div className="flex-1">
            <Button variant="secondary">Filter</Button>
          </div>
          <Link className="linkStyle flex-1" href="/member/stores/create">
            + Create Stores
          </Link>
        </div>
      </div>
      <Suspense fallback={<Spinner />}>
        <StoresList />
      </Suspense>
    </Wrapper>
  );
}
