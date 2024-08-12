import React from "react";
import Row from "../../UI/Row";
import Status from "../../UI/Status";
import SideImage from "../../UI/SideImage";

const MainCategory = ({ category }) => {
  const {
    category_name_eng,
    category_name_arabic,
    category_description,
    category_description_arabic,
    category_status,
    category_image,
  } = category;

  return (
    <div className="flex gap-4 rounded-lg border border-gray-300 p-4">
      <div className="flex-1 space-y-4">
        <Row title={" Category Name (English)"} value={category_name_eng} />
        <Row title={" Category Name (Arabic)"} value={category_name_arabic} />
        <Row title={"Description"} value={category_description} />
        <Row
          title={"Description (Arabic)"}
          bold={false}
          value={category_description_arabic}
        />
        <div className="flex justify-between border-b border-gray-200 p-3">
          <h3 className="font-semibold">Status</h3>
          <Status status={category_status} />
        </div>
      </div>

      <SideImage image={category_image} />
    </div>
  );
};

export default MainCategory;
