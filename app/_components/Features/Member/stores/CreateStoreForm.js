"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdUpload } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import InputField from "@/app/_components/UI/InputField";
import CustomSelect from "@/app/_components/UI/CustomSelect";
import UploadAvatar from "../components/UploadAvatar";
import UploadImage from "../../../UI/UploadImage";
import Button from "@/app/_components/UI/Button";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const CreateStoreForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();
  const watchAvatar = watch("avatar");
  const watchSupportingDocuments = watch("supportingDocuments");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-5/6 flex-col gap-4"
    >
      <div className="flex flex-wrap justify-between gap-4">
        <UploadAvatar
          register={register}
          watchAvatar={watchAvatar}
          errors={errors}
        />

        <div className="flex-1">
          <InputField
            label={" Stores Name (English)"}
            type="text"
            name="storeNameEnglish"
            register={register}
            errors={errors}
          />
        </div>

        <div className="flex-1">
          <InputField
            label={" Stores Name (Arabic)"}
            type="text"
            name="storeNameArabic"
            register={register}
            errors={errors}
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <InputField
            label={"Owner Name"}
            type="text"
            name="ownerName"
            register={register}
            errors={errors}
          />
        </div>

        <div className="flex-1">
          <InputField
            label={"Main Category"}
            type="text"
            name="mainCategory"
            register={register}
            errors={errors}
          />
        </div>
        <div className="flex-1">
          <InputField
            label={"Sub Category"}
            type="text"
            name="subCategory"
            register={register}
            errors={errors}
          />
        </div>
      </div>

      <div className="-mx-3 mb-6 flex flex-wrap gap-4">
        <div className="flex-1">
          <h1>City</h1>
          <CustomSelect options={options} placeholder={"Slect City"} />
        </div>
        <div className="flex-1">
          <h1>Store Addres (On Maps)</h1>
          <CustomSelect options={options} placeholder={"Select store Map"} />
        </div>
      </div>
      <div>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="supportingDocuments"
            className="form-checkbox"
            {...register("supportingDocuments")}
          />
          <span className="ml-2 text-gray-700">
            Attach supporting documents such as owner’s identification,
            professional license, or tax number?
          </span>
        </label>
      </div>
      {watchSupportingDocuments && (
        <div className="flex gap-4">
          <div className="flex-1 space-y-4">
            <InputField
              label={"Number of Owner ID"}
              type="text"
              name="ownerID"
              register={register}
              errors={errors}
            />
            <UploadImage
              register={register}
              watchImage={watch("scanOwnerID")}
              label="Scan Owner ID"
              value="scanOwnerID"
              errors={errors}
              setValue={setValue}
            />
          </div>
          <div className="flex-1 space-y-4">
            <InputField
              label={"Tax Number"}
              type="text"
              name="taxNumber"
              register={register}
              errors={errors}
            />
            <UploadImage
              register={register}
              watchImage={watch("scanTextDocument")}
              label="Scan Tax Document"
              value="scanTextDocument"
              errors={errors}
              setValue={setValue}
            />
          </div>
        </div>
      )}

      <div className="flex justify-end space-x-4">
        <Button variant="secondary">Cancel</Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Create Stores"}
        </Button>
      </div>
    </form>
  );
};

export default CreateStoreForm;
