import Wrapper from "@/app/_components/UI/Wrapper";
import Head from "@/app/_components/UI/Head";

import CreateAdminForm from "@/app/_components/Features/Member/adminstration/CreateAdminForm";

export default async function Page() {
  return (
    <Wrapper>
      <Head title="Add Admin" />
      <CreateAdminForm />
    </Wrapper>
  );
}
