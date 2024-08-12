import Wrapper from "@/app/_components/UI/Wrapper";
import React from "react";
import Head from "@/app/_components/UI/Head";
import MainCategoryCreateForm from "@/app/_components/Features/SectionControl/MainCategoryCreateForm";

export default async function Page({ params }) {
  console.log("params:", params.categoryid);

  return (
    <Wrapper>
      <Head title="Main Category - Add Sub Category" />
      <div className="border border-gray-300 p-4">
        <MainCategoryCreateForm categoryid={params.categoryid} />
      </div>
    </Wrapper>
  );
}
