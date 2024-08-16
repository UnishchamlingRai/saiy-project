import Table from "@/app/_components/UI/Table";
import React from "react";
import ActionRechargeCard from "./ActionRechargeCard";

const RechargeCardList = async () => {
  const stores = [
    {
      id: 1,
      name: "store1",
    },
  ];

  return (
    <div className="mt-2">
      <Table
        tableHeaders={["Moderator Name", "Recharge type", "Amount", "Action"]}
      >
        {stores.map((index) => {
          return (
            <tr className="hover:bg-gray-50" key={index}>
              <td className="border-b px-4 py-2">
                {"Naomi Property (ملكية نعومي)"}
              </td>
              <td className="border-b px-4 py-2">{"Card Code"}</td>
              <td className="border-b px-4 py-2">{"$568.32"}</td>
              <ActionRechargeCard />
            </tr>
          );
        })}
      </Table>
    </div>
  );
};

export default RechargeCardList;
