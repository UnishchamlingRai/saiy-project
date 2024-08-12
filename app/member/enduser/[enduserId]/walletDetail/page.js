import Wrapper from "@/app/_components/UI/Wrapper";
import Head from "@/app/_components/UI/Head";
import Profile from "@/app/_components/Features/Member/Profile";
import WalletDetail from "@/app/_components/Features/Member/endUser/WalletDetail";

export default async function page({ params }) {
  return (
    <Wrapper>
      <Head title="Wallet Details" />
      <div>
        <Profile />
        <WalletDetail />
      </div>
    </Wrapper>
  );
}
