import Wrapper from "@/app/_components/UI/Wrapper";
import Head from "@/app/_components/UI/Head";
import Row from "@/app/_components/UI/Row";
import { getOneCoupon } from "@/app/services/couponService";
import Status from "@/app/_components/UI/Status";
export default async function page({ params }) {
  const { data: coupon } = await getOneCoupon(params.couponId);

  //   console.log(data);

  return (
    <Wrapper>
      <Head title="Coupons Details" />
      <div className="w-4/6 p-4 shadow">
        <Row title={"Coupon Name"} value={coupon.coupon_name} />
        <Row title={"Discount Code"} value={coupon.discount_code} />
        <Row title={"Discount Percentage"} value={coupon.discount_percentage} />
        <Row title={"Start Date"} value={coupon.start_date} />
        <Row title={"End Date"} value={coupon.end_date} />
        <Row title={"Numbers of Users"} value={coupon.no_of_users} />
        <Row
          title={"Type of Users Targeted"}
          value={coupon.targated_user_type}
        />
        <div className="flex items-center justify-between gap-4 p-4">
          <p className="font-bold">Status</p>
          <Status status={coupon.status} />
        </div>
      </div>
    </Wrapper>
  );
}
