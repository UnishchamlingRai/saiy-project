import MainCategoryCreateForm from "@/app/_components/Features/SectionControl/MainCategoryCreateForm";
import Head from "@/app/_components/UI/Head";

import Wrapper from "@/app/_components/UI/Wrapper";
import { getOneCategory } from "@/app/services/categoryService";
export default async function page() {
  return (
    <Wrapper>
      <Head title="Main Category - Update" />
      <div className="border border-gray-300 p-4">
        <MainCategoryCreateForm />
      </div>
    </Wrapper>
  );
}
