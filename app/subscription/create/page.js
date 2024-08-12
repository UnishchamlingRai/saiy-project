import Wrapper from "@/app/_components/UI/Wrapper";
import Head from "@/app/_components/UI/Head";
import CreateSubscriptionFrom from "@/app/_components/Features/Subscription/CreateSubscriptionFrom";

export const metadata = {
  title: "Create Subscription",
  description: "Create Subscription",
};

export default function Page() {
  return (
    <Wrapper>
      <Head title="Create Subscription" />
      <CreateSubscriptionFrom />
    </Wrapper>
  );
}
