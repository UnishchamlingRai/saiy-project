import Wrapper from "../_components/UI/Wrapper";

import Head from "../_components/UI/Head";
import UserMessageList from "../_components/Features/messages/UserMessageList";
import ChatInterface from "../_components/Features/messages/ChatInterface";
export const metadata = {
  title: "Messages",
  description: "Messages",
};
export default function page() {
  return (
    <Wrapper>
      <div className="flex">
        <UserMessageList />
        <ChatInterface />
      </div>
    </Wrapper>
  );
}
