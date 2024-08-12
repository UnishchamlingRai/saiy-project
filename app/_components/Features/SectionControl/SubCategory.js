import React from "react";
import SearchInput from "../../UI/SearchInput";
import Button from "../../UI/Button";
import Table from "../../UI/Table";

import Icons from "../../UI/Icons";
import Status from "../../UI/Status";
import Link from "next/link";

const SubCategory = ({ categoryid }) => {
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
            <Button variant="primary">
              <Link href={`/sectionControl/${categoryid}/createSubCategory`}>
                + Create Sub Category
              </Link>
            </Button>
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
            <Icons
              iconName={"edit"}
              link={`/sectionControl/${categoryid}/updateSubCategory/1`}
            />
            <Icons
              iconName={"details"}
              link={`/sectionControl/${categoryid}/subCategoryDetails/1`}
            />
            <Icons iconName={"delete"} />
          </td>
        </tr>
      </Table>
    </div>
  );
};

export default SubCategory;
