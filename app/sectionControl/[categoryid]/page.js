import Wrapper from "@/app/_components/UI/Wrapper";
import React from "react";
import Head from "@/app/_components/UI/Head";
import MainCategoryDetails from "@/app/_components/Features/SectionControl/MainCategoryDetails";
import { getOneCategory } from "@/app/services/categoryService";
import SubCategoryList from "@/app/_components/Features/SectionControl/SubCategoryList";
export async function generateMetadata({ params }) {
  const { data: category } = await getOneCategory(params.categoryid);
  return {
    title: `${category.category_name_eng} | Category Details`,
  };
}
export default async function Page({ params }) {
  console.log(params.categoryid);
  const { data: category } = await getOneCategory(params.categoryid);

  // console.log(category);

  return (
    <Wrapper>
      <Head title="Main Category - Detail" />
      <MainCategoryDetails category={category} />
      <div className="mt-6 flex flex-col gap-2 rounded-md border border-gray-300 p-4">
        <h1 className="text-lg font-semibold">Management-Sub Categories</h1>
        <SubCategoryList
          categoryid={params.categoryid}
          SubCategories={category.sub_categories}
        />
      </div>
    </Wrapper>
  );
}
