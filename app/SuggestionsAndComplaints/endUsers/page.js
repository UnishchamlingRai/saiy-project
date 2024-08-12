import Wrapper from "../../_components/UI/Wrapper";
import Head from "../../_components/UI/Head";
import SearchInput from "../../_components/UI/SearchInput";
import UserSuggestionsAndComplaintsList from "../../_components/Features/SuggestionsAndComplaints/UserSuggestionsAndComplaintsList";

export const metadata = {
  title: "Suggestions And Complaints",
  description: "Suggestions And Complaints",
};

export default function page() {
  return (
    <Wrapper>
      <Head title="Suggestions And Complaints-End Users" />
      <SearchInput />
      <UserSuggestionsAndComplaintsList />
    </Wrapper>
  );
}
