import MainCategoryCreateForm from "@/app/_components/Features/SectionControl/MainCategoryCreateForm";
import Head from "@/app/_components/UI/Head";

import Wrapper from "@/app/_components/UI/Wrapper";
export const metadata = {
  title: "Create-Main Category",
  description: "Create-Main Category",
};
export default async function page() {
  return (
    <Wrapper>
      <Head title="Main Category - Create" />
      <div className="border border-gray-300 p-4">
        <MainCategoryCreateForm />
      </div>
    </Wrapper>
  );
}
