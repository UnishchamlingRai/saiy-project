"use client";
import React, { useState } from "react";
import InputField from "../../UI/InputField";
import { useForm } from "react-hook-form";
import Button from "../../UI/Button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { updateCategory } from "@/app/services/categoryService";
import Switch from "../../UI/Swithch";
import Image from "next/image";

const MainCategoryUpdateForm = ({ category }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      main_category_name_arabic: category?.category_name_arabic || "",
      main_category_name_english: category?.category_name_eng || "",
      main_category_description_arabic:
        category?.category_description_arabic || "",
      main_category_description_english: category?.category_description || "",
      category_image: category?.category_image || "",
    },
  });

  const [isActive, setIsActive] = useState(
    category?.category_status === "active",
  );
  const [isRemoved, setIsRemoved] = useState(false);
  const router = useRouter();

  async function onSubmit(data) {
    const formData = new FormData();
    const {
      category_image,
      main_category_description_arabic,
      main_category_description_english,
      main_category_name_arabic,
      main_category_name_english,
    } = data;

    formData.append("category_name_eng", main_category_name_english);
    formData.append("category_name_arabic", main_category_name_arabic);
    formData.append("category_description", main_category_description_english);
    formData.append(
      "category_description_arabic",
      main_category_description_arabic,
    );
    formData.append("category_status", isActive ? "active" : "inactive");
    console.log("formData:", data);
    console.log("image:", category_image);

    if (isRemoved) {
      formData.append("category_image", category_image[0]);
    }

    formData.append("_method", "PUT");

    try {
      const res = await updateCategory(category.id, formData);
      console.log("res:", res);

      if (res.message === "A category is updated successfully.") {
        toast.success(res.message);
        router.push("/sectionControl");
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("Failed to update category.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <InputField
            type="text"
            name="main_category_name_english"
            label="Main Category Name (English)"
            register={register}
            errors={errors}
            textBold
          />
          <InputField
            type="text"
            name="main_category_name_arabic"
            label="Main Category Name (Arabic)"
            register={register}
            errors={errors}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <InputField
            type="textarea"
            name="main_category_description_english"
            label="Main Category Description (English)"
            register={register}
            errors={errors}
          />
          <InputField
            type="textarea"
            name="main_category_description_arabic"
            label="Main Category Description (Arabic)"
            register={register}
            errors={errors}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {category.category_image && !isRemoved ? (
            <div className="w-full">
              <h1 className="mb-3 text-sm">Main Category Image</h1>
              <div className="relative h-[200px] w-full">
                <Image
                  fill
                  className="h-full w-full rounded-md object-cover"
                  src={`${process.env.NEXT_PUBLIC_API_URL}/${category?.category_image}`}
                  alt={category?.category_name_eng}
                />
              </div>
              <button
                type="button"
                className="rounded-md p-2 font-bold text-danger-600"
                onClick={() => setIsRemoved(true)}
              >
                Remove Image
              </button>
            </div>
          ) : (
            <InputField
              type="file"
              name="category_image"
              label="Upload image"
              register={register}
              errors={errors}
            />
          )}
          <div>
            <p>Status</p>
            <Switch isActive={isActive} setIsActive={setIsActive} />
            <div className="mt-2 flex space-x-2">
              <input type="checkbox" />
              <p>Add Sub Categories to Main Category?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-6 flex w-2/4 gap-2">
        <Button variant="secondary">Cancel</Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default MainCategoryUpdateForm;
