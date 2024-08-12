import MainCategoryUpdateForm from "@/app/_components/Features/SectionControl/MainCategoryUpdateForm";
import Head from "@/app/_components/UI/Head";

import Wrapper from "@/app/_components/UI/Wrapper";
import { getOneCategory } from "@/app/services/categoryService";

export async function generateMetadata({ params }) {
  const { data: category } = await getOneCategory(params.categoryId);
  return {
    title: `${category.category_name_eng} | Update-Main-Category`,
  };
}
export default async function page({ params }) {
  //   console.log(params.categoryId);
  const { data: category } = await getOneCategory(params.categoryId);

  //   console.log(category);
  return (
    <Wrapper>
      <Head title="Main Category - Update" />
      <div className="border border-gray-300 p-4">
        <MainCategoryUpdateForm category={category} />
      </div>
    </Wrapper>
  );
}
