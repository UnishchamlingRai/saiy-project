import Wrapper from "@/app/_components/UI/Wrapper";
import React from "react";
import Head from "@/app/_components/UI/Head";

import SubCategory from "@/app/_components/Features/SectionControl/SubCategory";

import MainCategory from "@/app/_components/Features/SectionControl/MainCategory";
import { getOneCategory } from "@/app/services/categoryService";

export default async function Page({ params }) {
  console.log(params.categoryid);
  const { data: category } = await getOneCategory(params.categoryid);

  return (
    <Wrapper>
      <Head title="Main Category - Detail" />
      <MainCategory category={category} />
      <SubCategory />
    </Wrapper>
  );
}
