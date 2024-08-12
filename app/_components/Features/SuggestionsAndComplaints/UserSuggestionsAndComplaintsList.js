import DeleteButton from "@/app/_components/UI/DeleteButton";
import Icons from "@/app/_components/UI/Icons";
import Table from "@/app/_components/UI/Table";
import React from "react";

const UserSuggestionsAndComplaintsList = async () => {
  const SuggestionsAndComplaints = [
    {
      id: 1,
      name: "store1",
    },
  ];

  return (
    <div className="mt-2">
      <Table
        tableHeaders={[
          "User ID",
          "Phone Number",
          "User Name",
          "Suggestion",
          "Complaints",
          "Action",
        ]}
      >
        {SuggestionsAndComplaints.map((index) => {
          return (
            <tr className="hover:bg-gray-50" key={index}>
              <td className="border-b px-4 py-2">{"NRF1217889"}</td>
              <td className="border-b px-4 py-2">{"081216779999"}</td>
              <td className="border-b px-4 py-2">{"Nurul Fauziyah"}</td>
              <td className="border-b px-4 py-2">
                {
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                }
              </td>
              <td className="border-b px-4 py-2">
                {
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                }
              </td>
              <td className="flex space-x-2 border-b px-4 py-2">
                {/* <Icons link="/member/endUser/update/1" iconName="edit" /> */}
                <Icons
                  link={`/SuggestionsAndComplaints/endUsers/1`}
                  iconName="details"
                />
                {/* <DeleteEndUser id={id} /> */}
              </td>
            </tr>
          );
        })}
      </Table>
    </div>
  );
};

export default UserSuggestionsAndComplaintsList;
