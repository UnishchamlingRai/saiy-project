"use client";
import React, { useState } from "react";
import Image from "next/image";

import Link from "next/link";
import Icons from "../../UI/Icons";
import Switch from "../../UI/Swithch";
import Modal from "../../UI/Modal";
import DeleteItem from "../../UI/DeleteItem";
import { deleteCategory } from "@/app/services/categoryService";

const CategoryCard = ({ category }) => {
  const [isOpenModal, setIsOpenModal] = useState();
  const {
    category_name_eng,
    category_description,
    category_image,
    category_status,
    id,
  } = category;
  console.log(category_status);

  // Ensure the category_image has a valid format
  const imageUrl = category_image.startsWith("http")
    ? category_image
    : `/${category_image}`;
  async function onConfirmDelete(password) {
    const res = await deleteCategory(id, password);
    // console.log("REs:", res);
  }
  return (
    <div className="rounded-lg shadow hover:bg-gray-200">
      <Link href={`/sectionControl/${id}`}>
        <div className="relative h-[50px] w-full flex-1 rounded-lg">
          {/* <Image
            src={imageUrl}
            alt={category_name_eng}
            className="object-cover"
            fill
          /> */}
          <img
            src={`${process.env.BASE_URL}/${imageUrl}`}
            alt=""
            className="h-[100%] w-[100%] object-cover"
          />
        </div>

        <div className="p-4">
          <h2 className="text-xl font-semibold">{category_name_eng}</h2>
          <p className="text-gray-600">{category_description}</p>
        </div>
      </Link>

      <div className="flex flex-1 justify-between p-4">
        <Switch isActive={category_status} />

        <div className="flex space-x-2">
          <Icons
            iconName={"edit"}
            link={`/sectionControl/updatemainCategory/${id}`}
          />
          <Icons iconName={"delete"} onClick={() => setIsOpenModal(true)} />
          <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
            <DeleteItem
              onClick={() => setIsOpenModal(false)}
              onConfirmDelete={onConfirmDelete}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
