import MainCategoryDetails from "@/app/_components/Features/SectionControl/MainCategoryDetails";
import Head from "@/app/_components/UI/Head";

import Wrapper from "@/app/_components/UI/Wrapper";
import { getOneSubCategory } from "@/app/services/categoryService";

export default async function Page({ params }) {
  const { data: subCategory } = await getOneSubCategory(params.subCategoryId);

  // console.log(params);
  return (
    <Wrapper>
      <Head title="Main Category -Sub Category Details" />
      <MainCategoryDetails category={subCategory} />
    </Wrapper>
  );
}
