import React, { Suspense } from "react";
import Link from "next/link";

import cardImage from "@/public/image/LoginImage.png"; // Adjust this path as needed
import SearchInput from "../_components/UI/SearchInput";
import Button from "../_components/UI/Button";
import CategoryCard from "../_components/Features/SectionControl/CategoryCard";
import Wrapper from "../_components/UI/Wrapper";
import Head from "../_components/UI/Head";
import CategoriesList from "../_components/Features/SectionControl/CategoriesList";
import Spinner from "../_components/UI/Spinner";

export default function page() {
  return (
    <Wrapper>
      <Head title={"Section Control - Main Category"} />
      <div className="p-1">
        <div className="mb-4 flex items-center justify-between space-x-2 rounded-lg p-2">
          <div>
            <SearchInput />
          </div>
          <div className="flex items-center space-x-2">
            <div>
              <Button variant="secondary" className="text-primary-500">
                Filter
              </Button>
            </div>

            <div>
              <Button>
                <Link href="/sectionControl/createmainCategory">
                  + Create City
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Suspense fallback={<Spinner />}>
          <CategoriesList />
        </Suspense>
      </div>
    </Wrapper>
  );
}
