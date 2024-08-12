import Wrapper from "@/app/_components/UI/Wrapper";
import Head from "@/app/_components/UI/Head";

import SendNotificationForm from "@/app/_components/Features/messages/SendNotificationForm";

export default function page() {
  return (
    <Wrapper>
      <Head title="Send Notification" />
      {/* <Tiptap /> */}
      <SendNotificationForm />
    </Wrapper>
  );
}
