import Wrapper from "@/app/_components/UI/Wrapper";
import Head from "@/app/_components/UI/Head";
import CreateEndUserForm from "@/app/_components/Features/Member/endUser/CreateEndUserForm";

export default async function Page() {
  return (
    <Wrapper>
      <Head title="Add End User" />
      <CreateEndUserForm />
    </Wrapper>
  );
}
