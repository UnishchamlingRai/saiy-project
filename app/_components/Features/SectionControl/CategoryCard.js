import React from "react";
import Image from "next/image";

import Link from "next/link";
import Icons from "../../UI/Icons";
import Switch from "../../UI/Swithch";
import DeleteButton from "../../UI/DeleteButton";
import { deleteCategory } from "@/app/services/categoryService";

const CategoryCard = ({ category }) => {
  const {
    category_name_eng,
    category_description,
    category_image,
    category_status,
    id,
  } = category;

  const imageUrl = category_image.startsWith("http")
    ? category_image
    : `/${category_image}`;

  return (
    <div className="rounded-lg shadow hover:bg-gray-200">
      <Link href={`/sectionControl/${id}`}>
        <div className="relative h-[50px] w-full flex-1 rounded-lg">
          <Image
            src={`http://saity.yallagai.site${imageUrl}`}
            alt={category_name_eng}
            className="object-cover"
            fill
          />
        </div>

        <div className="p-4">
          <h2 className="text-xl font-semibold">{category_name_eng}</h2>
          <p className="text-gray-600">{category_description}</p>
        </div>
      </Link>

      <div className="flex flex-1 justify-between p-4">
        <Switch isActive={category_status === "active"} />
        <div className="flex space-x-2">
          <Icons
            iconName={"edit"}
            link={`/sectionControl/updatemainCategory/${id}`}
          />
          <DeleteButton id={id} deleteApi={deleteCategory} />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
