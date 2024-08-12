import MainCategoryUpdateForm from "@/app/_components/Features/SectionControl/MainCategoryUpdateForm";
import Head from "@/app/_components/UI/Head";

import Wrapper from "@/app/_components/UI/Wrapper";

export default async function page({ params }) {
  console.log(params);
  return (
    <Wrapper>
      <Head title="Main Category - Edit Sub Category" />
      <div className="border border-gray-300 p-4">
        <MainCategoryUpdateForm />
      </div>
    </Wrapper>
  );
}
