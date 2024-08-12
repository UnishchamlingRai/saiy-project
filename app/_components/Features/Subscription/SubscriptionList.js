import DeleteButton from "@/app/_components/UI/DeleteButton";
import Icons from "@/app/_components/UI/Icons";
import Table from "@/app/_components/UI/Table";
import React from "react";
import Status from "../../UI/Status";

const SubscriptionList = async () => {
  const stores = [
    {
      id: 1,
      name: "store1",
    },
  ];

  return (
    <div className="mt-2">
      <Table
        tableHeaders={[
          "Subscription Type",
          "Account Type",
          "Length",
          "Payment Type",
          "Status",
          "Price",
          "Action",
        ]}
      >
        {stores.map((index) => {
          return (
            <tr className="hover:bg-gray-50" key={index}>
              <td className="border-b px-4 py-2">
                {"Naomi Property (ملكية نعومي)"}
              </td>
              <td className="border-b px-4 py-2">{"Monthly"}</td>
              <td className="border-b px-4 py-2">{"Pro"}</td>
              <td className="border-b px-4 py-2">{"3 Months"}</td>
              <td className="border-b px-4 py-2">{"Each month"}</td>
              <td className="border-b px-4 py-2">
                <Status status="active" />
              </td>
              <td className="border-b px-4 py-2">{"100"}</td>
              <td className="flex space-x-2 border-b px-4 py-2">
                <Icons link="/subscription/update/1" iconName="edit" />
                <Icons link={`/subscription/1`} iconName="details" />
                {/* <DeleteEndUser id={id} /> */}
              </td>
            </tr>
          );
        })}
      </Table>
    </div>
  );
};

export default SubscriptionList;
