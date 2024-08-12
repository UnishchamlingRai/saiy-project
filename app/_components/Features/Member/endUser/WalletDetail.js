"use client";
import { FaWallet, FaArrowUp, FaArrowDown } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", income: 4000, expenditure: 2400 },
  { name: "Feb", income: 3000, expenditure: 1398 },
  { name: "Mar", income: 2000, expenditure: 9800 },
  { name: "Apr", income: 2780, expenditure: 3908 },
  { name: "May", income: 1890, expenditure: 4800 },
  { name: "Jun", income: 2390, expenditure: 3800 },
  { name: "Jul", income: 3490, expenditure: 4300 },
];

const WalletDetail = () => {
  return (
    <div className="min-h-screen p-4 text-white md:p-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col justify-between rounded-lg bg-blue-600 p-6">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">342189-YUEAM-898178</div>
            <FaWallet size={30} />
          </div>
          <div className="mt-4">
            <div className="text-lg">Balance</div>
            <div className="text-3xl font-bold">$900,00</div>
            <div className="mt-2 flex items-center text-green-400">
              <FaArrowUp className="mr-1" />
              <span>2.5 +100,00 this week</span>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-gray-300 p-6">
          <div className="text-lg">Expenditures and Income</div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center text-red-400">
              <FaArrowDown className="mr-1" />
              <span>$9,922.00 Expenditure</span>
            </div>
            <div className="flex items-center text-green-400">
              <FaArrowUp className="mr-1" />
              <span>$1,000,000.00 Income</span>
            </div>
          </div>
          <div className="mt-4 h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="income" stroke="#82ca9d" />
                <Line type="monotone" dataKey="expenditure" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="mt-8 rounded-lg border border-gray-300 p-6">
        <div className="mb-4 text-lg text-black">Transaction History</div>
        <div className="space-y-4">
          {[
            {
              label: "Upgrade Account to Pro",
              date: "Aug 25, 2024",
              amount: "-$100,00",
              color: "text-red-400",
            },
            {
              label: "Upgrade Account to Standard",
              date: "Aug 21, 2024",
              amount: "-$60,00",
              color: "text-red-400",
            },
            {
              label: "Top Up Money",
              date: "Jul 24, 2024",
              amount: "+$200,00",
              color: "text-green-400",
            },
            {
              label: "Top Up Money",
              date: "Jul 24, 2024",
              amount: "+$200,00",
              color: "text-green-400",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <FaArrowDown className={`mr-2 ${item.color}`} />
                <div>
                  <div>{item.label}</div>
                  <div className="text-sm text-gray-900">{item.date}</div>
                </div>
              </div>
              <div className={`font-bold ${item.color}`}>{item.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WalletDetail;
