"use client";
import React, { useState } from "react";
import InputField from "../../UI/InputField";
import { useForm } from "react-hook-form";
import Button from "../../UI/Button";
import { createCategory, updateCategory } from "@/app/services/categoryService";
import toast from "react-hot-toast";

import { useRouter } from "next/navigation";
import Switch from "../../UI/Swithch";
import UploadImage from "../../UI/UploadImage";

const MainCategoryCreateForm = ({ categoryid }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      main_category_description_english: "Hello",
    },
  });

  const router = useRouter();
  const watchCategoryImage = watch("category_image");
  const watchCategoryStatus = watch("category_status");
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
    formData.append(
      "category_status",
      watchCategoryStatus ? "active" : "inactive",
    );
    if (category_image && category_image[0]) {
      formData.append("category_image", category_image[0]);
    }
    if (categoryid) {
      formData.append("category_parent_id", categoryid);
    }
    const res = categoryid ? "" : await createCategory(formData);
    console.log("res:", res);

    if (res.status === 200) {
      toast.success(res.message);
      router.push("/sectionControl");
    } else {
      toast.error(res.message);
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
          <UploadImage
            register={register}
            errors={errors}
            value={"category_image"}
            label={"Upload Category image"}
            required={true}
            setValue={setValue}
            watchImage={watchCategoryImage}
          />
          {/* <InputField
            type="file"
            name="category_image"
            label="Upload image"
            register={register}
            errors={errors}
          /> */}

          <div>
            <p>Status</p>
            <Switch
              isActive={watchCategoryStatus}
              onClick={() => setValue("category_status", !watchCategoryStatus)}
            />
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

export default MainCategoryCreateForm;
