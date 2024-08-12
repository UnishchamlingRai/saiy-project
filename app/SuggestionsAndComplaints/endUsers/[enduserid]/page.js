import Wrapper from "@/app/_components/UI/Wrapper";
import Head from "@/app/_components/UI/Head";
import SearchInput from "@/app/_components/UI/SearchInput";
import Profile from "@/app/_components/Features/Member/Profile";
import Row from "@/app/_components/UI/Row";

export const metadata = {
  title: "Suggestions And Complaints",
  description: "Suggestions And Complaints",
};

export default function page() {
  return (
    <Wrapper>
      <Head title="Suggestions And Complaints-Detail" />
      <SearchInput />
      <div className="flex flex-col gap-4 p-4">
        <Profile />
        <div className="flex flex-col gap-4">
          <Row title={"Phone Number"} value={"081216779999"} />
          <Row
            bold={false}
            title={"Suggestion"}
            value={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
            }
          />
          <Row
            bold={false}
            title={"Complaints"}
            value={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
            }
          />
        </div>
      </div>
    </Wrapper>
  );
}
