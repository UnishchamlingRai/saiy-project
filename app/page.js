import DashboardHeader from "./_components/Features/dashboard/DashboardHeader";
import MonthlyProfitChart from "./_components/Features/dashboard/MonthlyProfitChart";
import ProfitCard from "./_components/Features/dashboard/ProfitCard";

import StatCards from "./_components/Features/dashboard/StatCards";
import TableCard from "./_components/Features/dashboard/TableCard";
import Wrapper from "./_components/UI/Wrapper";

const tableData = [
  { country: "Saudi Arabia", item: "Property", flag: "" },
  { country: "Indonesia", item: "Cars", flag: "" },
  { country: "Sweden", item: "Property", flag: "" },
  { country: "Thailand", item: "Property", flag: "" },
];
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
export const metadata = {
  title: "Dashboard",
};

export default function Dashboard() {
  return (
    <Wrapper>
      <DashboardHeader title="Dashboard" />
      <StatCards />
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="flex-1 overflow-y-auto rounded-lg p-4 shadow">
          <TableCard
            title="Registered Items In each country"
            data={tableData}
            link="#"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4">
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
      </div>

      <div className="flex flex-col justify-between rounded-lg bg-white shadow">
        <h2 className="ml-12 text-xl font-bold">Monthly Profit</h2>
        <MonthlyProfitChart />
      </div>
    </Wrapper>
  );
}
