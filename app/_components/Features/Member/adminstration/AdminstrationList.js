import React from "react";

import DeleteButton from "@/app/_components/UI/DeleteButton";
import Icons from "@/app/_components/UI/Icons";
import Table from "@/app/_components/UI/Table";

const AdminstrationList = async () => {
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
          "Name",
          "Email",
          "Phone Number",
          "Admin Status",
          "Action",
        ]}
      >
        {stores.map((index) => {
          return (
            <tr className="hover:bg-gray-50" key={index}>
              <td className="border-b px-4 py-2">
                {"Naomi Property (ملكية نعومي)"}
              </td>

              <td className="border-b px-4 py-2">{"tark@gmail.com"}</td>
              <td className="border-b px-4 py-2">{"98411321"}</td>
              <td className="flex space-x-2 border-b px-4 py-2">
                <Icons link="/member/endUser/update/1" iconName="edit" />
                <Icons link={`/member/adminstration/1`} iconName="details" />
                {/* <DeleteEndUser id={id} /> */}
              </td>
            </tr>
          );
        })}
      </Table>
    </div>
  );
};

export default AdminstrationList;
