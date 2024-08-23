import React from "react";
// import { getAllSubCategories } from "@/app/services/categoryService";
import SubCategoryList from "./SubCategoryList";

const SubCategory = ({ categoryid, SubCategories }) => {
  // const { data: SubCategories } = await getAllSubCategories(categoryid);

  return (
    <div className="mt-6 flex flex-col gap-2 rounded-md border border-gray-300 p-4">
      <h1 className="text-lg font-semibold">Management-Sub Categories</h1>
      <SubCategoryList categoryid={categoryid} SubCategories={SubCategories} />
    </div>
  );
};

export default SubCategory;
