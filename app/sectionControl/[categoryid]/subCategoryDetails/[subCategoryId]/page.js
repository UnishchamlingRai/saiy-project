import Head from "@/app/_components/UI/Head";

import Wrapper from "@/app/_components/UI/Wrapper";

export default async function Page({ params }) {
  console.log(params);
  return (
    <Wrapper>
      <Head title="Main Category -Sub Category Details" />
      <h1>Sub Category Details</h1>
    </Wrapper>
  );
}
