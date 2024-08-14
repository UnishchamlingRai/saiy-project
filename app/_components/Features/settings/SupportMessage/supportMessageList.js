import React from "react";
import Icons from "@/app/_components/UI/Icons";
import Table from "@/app/_components/UI/Table";

const SupportMessageList = () => {
  const stores = [
    {
      id: 1,
      name: "store1",
    },
  ];
  return (
    <div className="mt-2">
      <Table tableHeaders={["Title", "Content", "Action"]}>
        {stores.map((index) => {
          return (
            <tr className="hover:bg-gray-50" key={index}>
              <td className="border-b px-4 py-2">
                {"Introduction and Acceptance of Terms"}
              </td>
              <td className="border-b px-4 py-2">
                {
                  "Introduction: Explains the name of the company or entity providing the service, Acceptance of Conditions: States that by using the service, the user agrees to comply with the established policies and conditions."
                }
              </td>

              <td className="flex space-x-2 border-b px-4 py-2">
                <Icons iconName="edit" />
                <Icons iconName="details" />
                <Icons iconName="delete" />
              </td>
            </tr>
          );
        })}
      </Table>
    </div>
  );
};

export default SupportMessageList;
