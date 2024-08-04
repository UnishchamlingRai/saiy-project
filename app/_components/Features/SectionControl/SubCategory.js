import React from "react";
import SearchInput from "../../UI/SearchInput";
import Button from "../../UI/Button";
import Table from "../../UI/Table";

import Icons from "../../UI/Icons";
import Status from "../../UI/Status";

const SubCategory = () => {
  return (
    <div className="mt-6 flex flex-col gap-2 rounded-md border border-gray-300 p-4">
      <h1 className="text-lg font-semibold">Management-Sub Categories</h1>
      <div className="flex items-center justify-between">
        <div className="w-2/4">
          <SearchInput />
        </div>
        <div className="flex gap-4">
          <div>
            <Button variant="danger">Delete All Category</Button>
          </div>
          <div>
            <Button variant="primary">+ Create Sub Category</Button>
          </div>
        </div>
      </div>

      <Table
        tableHeaders={[
          "Category name(English)",
          "Category name(Arabic)",
          "Status",
          "Action",
        ]}
      >
        <tr className="hover:bg-gray-50">
          <td className="border-b px-4 py-2">{"hello"}</td>
          <td className="border-b px-4 py-2">{"hello"}</td>

          <td className="border-b px-4 py-2">
            <Status status={"active"} />
          </td>

          <td className="hidden space-x-2 border-b px-4 py-2 sm:block">
            <Icons iconName={"edit"} link={`/sectionControl`} />
            <Icons iconName={"details"} link={`/sectionControl`} />
            <Icons iconName={"delete"} />
          </td>
        </tr>
      </Table>
    </div>
  );
};

export default SubCategory;
