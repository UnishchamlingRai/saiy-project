import React from "react";

import { AiOutlineProduct } from "react-icons/ai";
import Wrapper from "../_components/UI/Wrapper";
import StatCard from "@/app/_components/Features/dashboard/StatCard";
import { LuUser2 } from "react-icons/lu";
import ProfitCard from "../_components/Features/dashboard/ProfitCard";
import MonthlyProfitChart from "../_components/Features/dashboard/MonthlyProfitChart";
import CityHeader from "../_components/Features/city/CityHeader";

export const metadata = {
  title: "City-Information",
};
const dailySampleData = [
  { name: "sun", uv: 400 },
  { name: "mon", uv: 300 },
  { name: "tue", uv: 500 },
  { name: "wed", uv: 600 },
  { name: "thu", uv: 700 },
  { name: "fri", uv: 800 },
  { name: "sat", uv: 900 },
];
const WeeklySampleData = [
  { name: "1st week", uv: 400 },
  { name: "2nd week", uv: 300 },
  { name: "3rd week", uv: 500 },
  { name: "4th week", uv: 600 },
];
const Page = () => {
  return (
    <Wrapper>
      <CityHeader />

      <div className="flex flex-col gap-4 p-4 shadow">
        <div className="flex items-center gap-4">
          <div className="h-[30px] border-2 border-warning-500"></div>
          <h1>Jeddah, Saudi Arabia</h1>
        </div>
        <div className="flex gap-4">
          <StatCard
            title="Number of Users Available"
            value="400"
            icon={<LuUser2 />}
          />
          <StatCard
            title="Number of Products For Sale"
            value="4.321"
            icon={<AiOutlineProduct />}
          />
        </div>
        <div className="flex flex-1 gap-4">
          <ProfitCard
            title="Daily profit"
            date="Thursday, 17 Jan 2024"
            value="$9,992.00"
            percentage={16}
            sampleData={dailySampleData}
            link="#"
          />
          <ProfitCard
            title="Weekly profit"
            date="Week 2"
            value="$29,992.00"
            percentage={16}
            sampleData={WeeklySampleData}
            link="#"
          />
        </div>
        <div className="flex flex-col justify-between rounded-lg bg-white p-4 shadow">
          <h2 className="ml-12 text-xl font-bold">Monthly Profit</h2>
          <MonthlyProfitChart />
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
