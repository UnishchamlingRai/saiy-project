import DeleteButton from "@/app/_components/UI/DeleteButton";
import Icons from "@/app/_components/UI/Icons";
import Table from "@/app/_components/UI/Table";
import React from "react";

const StoresList = async () => {
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
          "Stores Name",
          "Owner Name",
          "Main Category",
          "City",
          "Action",
        ]}
      >
        {stores.map((index) => {
          return (
            <tr className="hover:bg-gray-50" key={index}>
              <td className="border-b px-4 py-2">
                {"Naomi Property (ملكية نعومي)"}
              </td>
              <td className="border-b px-4 py-2">{"Tarek Hasan"}</td>
              <td className="border-b px-4 py-2">{"Property"}</td>
              <td className="border-b px-4 py-2">{"Malang, Indonesia"}</td>
              <td className="flex space-x-2 border-b px-4 py-2">
                <Icons link="/member/endUser/update/1" iconName="edit" />
                <Icons link={`/member/stores/1`} iconName="details" />
                {/* <DeleteEndUser id={id} /> */}
              </td>
            </tr>
          );
        })}
      </Table>
    </div>
  );
};

export default StoresList;
