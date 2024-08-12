import Wrapper from "@/app/_components/UI/Wrapper";
import Head from "@/app/_components/UI/Head";

import { Suspense } from "react";
import Spinner from "@/app/_components/UI/Spinner";
import AdvertisementList from "../_components/Features/Advertisement/AdvertisementList";
import SearchCreateFilter from "../_components/Features/Advertisement/SearchCreateFilter";

export const metadata = {
  title: "Advertisement",
  description: "Advertisement",
};
export default async function Page({ params }) {
  // console.log(params);
  return (
    <Wrapper>
      <Head title="Advertisement" />
      <SearchCreateFilter />
      <Suspense fallback={<Spinner />}>
        <AdvertisementList />
      </Suspense>
    </Wrapper>
  );
}
