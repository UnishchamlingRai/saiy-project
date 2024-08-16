import Icons from "@/app/_components/UI/Icons";
import Status from "@/app/_components/UI/Status";
import Table from "@/app/_components/UI/Table";
import React from "react";

const MasterContactList = ({ stores }) => {
  return (
    <Table
      tableHeaders={[
        "Contact Name",
        "Type of Contacts",
        "Number/Link",
        "Status",
        "Action",
      ]}
    >
      {stores.map((index) => {
        return (
          <tr className="hover:bg-gray-50" key={index}>
            <td className="border-b px-4 py-2">{"Admn1"}</td>
            <td className="border-b px-4 py-2">{"Email"}</td>
            <td className="border-b px-4 py-2">{"+628123456789"}</td>
            <td className="border-b px-4 py-2">
              <Status status={"active"} />
            </td>
            <td className="flex space-x-2 border-b px-4 py-2">
              <Icons iconName="edit" />
              <Icons iconName="delete" />
            </td>
          </tr>
        );
      })}
    </Table>
  );
};

export default MasterContactList;
