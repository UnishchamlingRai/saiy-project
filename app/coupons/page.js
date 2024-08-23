import { GrUserAdmin } from "react-icons/gr";
import Wrapper from "@/app/_components/UI/Wrapper";

import Head from "@/app/_components/UI/Head";
import MonthlyProfitChart from "../_components/Features/dashboard/MonthlyProfitChart";
import StatCard from "../_components/Features/dashboard/StatCard";
import SearchInput from "../_components/UI/SearchInput";
import Button from "../_components/UI/Button";
import Link from "next/link";
import CouponsList from "../_components/Features/Coupons/CouponsList";
import FilterSearchCreate from "../_components/Features/Coupons/FilterSearchCreate";
import { getAllCoupons } from "../services/couponService";

export const metadata = {
  title: "Coupons",
  description: "Coupons",
};
export default async function page() {
  const { data: coupons } = await getAllCoupons();
  // console.log(data);

  return (
    <Wrapper>
      <Head title={"Coupons"} />
      <div className="flex flex-col gap-8 p-4">
        <div className="shadow">
          <h1 className="ml-16"> Redemption</h1>
          <MonthlyProfitChart />
        </div>

        <div className="flex items-center gap-4">
          <StatCard
            title="Total Redeemtions"
            value="4,321"
            icon={<GrUserAdmin />}
          />
          <StatCard
            title="New Redemptions"
            value="4,321"
            icon={<GrUserAdmin />}
          />
          <StatCard
            title="Redemptions Amounts"
            value="4,321"
            icon={<GrUserAdmin />}
          />
        </div>

        <CouponsList coupons={coupons} />
      </div>
    </Wrapper>
  );
}
