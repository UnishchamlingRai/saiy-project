import Wrapper from "@/app/_components/UI/Wrapper";
import Head from "@/app/_components/UI/Head";
import AddNewCouponForm from "@/app/_components/Features/Coupons/AddNewCouponForm";
import { getOneCoupon } from "@/app/services/couponService";

export const metadata = {
  title: "Update Coupon",
  description: "Update Coupon",
};

export default async function page({ params }) {
  console.log(params.couponId);
  const { data: coupon } = await getOneCoupon(params.couponId);
  //   console.log(coupon);
  //   console.log(data);
  return (
    <Wrapper>
      <Head title="Update Coupon" />
      <div className="w-4/6 p-4 shadow">
        <AddNewCouponForm coupon={coupon} />
      </div>
    </Wrapper>
  );
}
