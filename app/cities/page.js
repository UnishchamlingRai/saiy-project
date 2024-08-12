import React, { Suspense } from "react";
import Wrapper from "../_components/UI/Wrapper";
import SearchFilterBar from "../_components/UI/SearchFilterBar";
import CitiesHeader from "../_components/Features/cities/CitiesHeader";
import CitiesList from "../_components/Features/cities/CitiesList";
import Spinner from "../_components/UI/Spinner";

export const metadata = {
  title: "Cities",
};
export default async function page() {
  return (
    <Wrapper>
      <div className="flex flex-col gap-4">
        <CitiesHeader />
        <SearchFilterBar />
        <Suspense fallback={<Spinner />}>
          <CitiesList />
        </Suspense>
      </div>
    </Wrapper>
  );
}
