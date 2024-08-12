import DeleteButton from "@/app/_components/UI/DeleteButton";
import Icons from "@/app/_components/UI/Icons";
import Table from "@/app/_components/UI/Table";
import React from "react";
import Status from "../../UI/Status";
import Switch from "../../UI/Swithch";

const AdvertisementList = async () => {
  const advertisements = [
    {
      id: 1,
      name: "store1",
    },
  ];

  return (
    <div className="mt-2">
      <Table
        tableHeaders={[
          "Image",
          "Advertisement Name",
          "Type",
          "Status",
          "Action",
        ]}
      >
        {advertisements.map((index) => {
          return (
            <tr className="hover:bg-gray-50" key={index}>
              <td className="border-b px-4 py-2">
                <img src="" alt="" />
              </td>
              <td className="border-b px-4 py-2">{"Cheap Car Ads"}</td>
              <td className="border-b px-4 py-2">{"Pop Up Screen"}</td>
              <td className="border-b px-4 py-2">
                <Switch isActive={true} />
              </td>
              <td className="flex space-x-2 border-b px-4 py-2">
                <Icons link="/advertisement/update/1" iconName="edit" />
                <Icons link={`/advertisement/1`} iconName="details" />
                {/* <DeleteEndUser id={id} /> */}
              </td>
            </tr>
          );
        })}
      </Table>
    </div>
  );
};

export default AdvertisementList;
