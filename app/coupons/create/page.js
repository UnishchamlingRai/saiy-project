import Wrapper from "@/app/_components/UI/Wrapper";
import Head from "@/app/_components/UI/Head";
import AddNewCouponForm from "@/app/_components/Features/Coupons/AddNewCouponForm";

export const metadata = {
  title: "Create Coupon",
  description: "Create Coupon",
};

export default async function page() {
  return (
    <Wrapper>
      <Head title="Create Coupon" />
      <div className="w-4/6 p-4 shadow">
        <AddNewCouponForm />
      </div>
    </Wrapper>
  );
}
