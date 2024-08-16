import Icons from "@/app/_components/UI/Icons";
import Status from "@/app/_components/UI/Status";
import Table from "@/app/_components/UI/Table";
import React from "react";

const MasterFAQList = ({ stores }) => {
  return (
    <Table tableHeaders={["Types of FAQs", "Contents", "Status", "Action"]}>
      {stores.map((index) => {
        return (
          <tr className="hover:bg-gray-50" key={index}>
            <td className="border-b px-4 py-2">{"Stores Management"}</td>
            <td className="border-b px-4 py-2">
              {
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,..."
              }
            </td>
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

export default MasterFAQList;
