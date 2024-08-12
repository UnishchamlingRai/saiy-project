import Wrapper from "../../_components/UI/Wrapper";
import Head from "../../_components/UI/Head";
import SearchInput from "../../_components/UI/SearchInput";
import StoreSuggestionsAndComplaintsList from "@/app/_components/Features/SuggestionsAndComplaints/StoreSuggestionsAndComplaintsList";

export const metadata = {
  title: "Suggestions And Complaints",
  description: "Suggestions And Complaints",
};

export default function page() {
  return (
    <Wrapper>
      <Head title="Suggestions And Complaints-Stores" />
      <SearchInput />
      <StoreSuggestionsAndComplaintsList />
    </Wrapper>
  );
}
