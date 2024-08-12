import DeleteButton from "@/app/_components/UI/DeleteButton";
import Icons from "@/app/_components/UI/Icons";
import Table from "@/app/_components/UI/Table";
import { getAllEndUsers } from "@/app/services/member/endUserService";
import React from "react";
import DeleteEndUser from "./DeleteEndUser";

const EndUserList = async () => {
  const { data: endUsers } = await getAllEndUsers();
  // console.log(endUsers);
  return (
    <div className="mt-2">
      <Table tableHeaders={["Name", "Email", "Phone Number", "City", "Action"]}>
        {endUsers.map((endUser, index) => {
          const {
            user_fullname_eng,
            user_email,
            user_phone_number,
            user_city,
            id,
          } = endUser;
          return (
            <tr className="hover:bg-gray-50" key={index}>
              <td className="border-b px-4 py-2">{user_fullname_eng}</td>
              <td className="border-b px-4 py-2">{user_email}</td>
              <td className="border-b px-4 py-2">{user_phone_number}</td>
              <td className="border-b px-4 py-2">{user_city}</td>
              <td className="flex space-x-2 border-b px-4 py-2">
                <Icons link="/member/endUser/update/1" iconName="edit" />
                <Icons link={`/member/enduser/${id}`} iconName="details" />
                <DeleteEndUser id={id} />
              </td>
            </tr>
          );
        })}
      </Table>
    </div>
  );
};

export default EndUserList;
