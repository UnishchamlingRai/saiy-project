import Wrapper from "@/app/_components/UI/Wrapper";
import Head from "@/app/_components/UI/Head";

import CreateStoreForm from "@/app/_components/Features/Member/stores/CreateStoreForm";

export default async function Page() {
  return (
    <Wrapper>
      <Head title="Create Store" />
      <CreateStoreForm />
    </Wrapper>
  );
}
