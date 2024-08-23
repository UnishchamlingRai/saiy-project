"use client";
import React, { useState } from "react";
import Table from "@/app/_components/UI/Table";
import Status from "../../UI/Status";
import Icons from "../../UI/Icons";
import Button from "../../UI/Button";
import SearchInput from "../../UI/SearchInput";
import Link from "next/link";
import DeleteButton from "../../UI/DeleteButton";
import { deleteSubCategory } from "@/app/services/categoryService";

const SubCategoryList = ({ categoryid, SubCategories }) => {
  // const sub_categories = [...SubCategories];
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSubCategories = SubCategories.filter((subcategory) =>
    subcategory.category_name_eng
      .toLowerCase()
      .includes(searchTerm.toLowerCase()),
  );
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="w-2/4">
          <SearchInput
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
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
        {filteredSubCategories.map((subcategory, index) => (
          <tr className="hover:bg-gray-50">
            <td className="border-b px-4 py-2">
              {subcategory.category_name_eng}
            </td>
            <td className="border-b px-4 py-2">
              {subcategory.category_name_arabic}
            </td>

            <td className="border-b px-4 py-2">
              <Status status={subcategory.category_status} />
            </td>

            <td className="hidden space-x-2 border-b px-4 py-2 sm:block">
              <Icons
                iconName={"edit"}
                link={`/sectionControl/${categoryid}/updateSubCategory/${subcategory.id}`}
              />
              <Icons
                iconName={"details"}
                link={`/sectionControl/${categoryid}/subCategoryDetails/${subcategory.id}`}
              />
              {/* <Icons iconName={"delete"} /> */}
              <DeleteButton
                id={subcategory.id}
                withPassword={true}
                deleteApi={deleteSubCategory}
              />
            </td>
          </tr>
        ))}
      </Table>
    </>
  );
};

export default SubCategoryList;
