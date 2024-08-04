import React from "react";
import { PiBuildings } from "react-icons/pi";
import { GrUserAdmin } from "react-icons/gr";
import { FaUsers } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import StatCard from "./StatCard";

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <StatCard title="Total City" value="4,321" icon={<PiBuildings />} />
      <StatCard title="Total Administrator" value="20" icon={<GrUserAdmin />} />
      <StatCard title="Total Users" value="120" icon={<FaUsers />} />
      <StatCard title="Total Users Login" value="120" icon={<LuUser2 />} />
      <StatCard
        title="Items Available by each country"
        value="120"
        icon={<PiBuildings />}
      />
    </div>
  );
};

export default StatCards;
