"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", profit: 200 },
  { month: "Feb", profit: 800 },
  { month: "Mar", profit: 600 },
  { month: "Apr", profit: 1000 },
  { month: "May", profit: 1200 },
  { month: "Jun", profit: 900 },
  { month: "Jul", profit: 1100 },
  { month: "Aug", profit: 950 },
  { month: "Sep", profit: 700 },
  { month: "Oct", profit: 750 },
  { month: "Nov", profit: 500 },
  { month: "Dec", profit: 850 },
];

const MonthlyProfitChart = () => (
  <div className="h-64 w-full">
    <ResponsiveContainer>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="profit"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorProfit)"
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default MonthlyProfitChart;
