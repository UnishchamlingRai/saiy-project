"use client";
import React, { useState } from "react";
import InputField from "../../UI/InputField";
import { useForm } from "react-hook-form";
import CustomSelect from "../../UI/CustomSelect";
import Switch from "../../UI/Swithch";
import Button from "../../UI/Button";
import UploadImage from "../../UI/UploadImage";

const CreateAdvertisementForm = ({ onClose }) => {
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="p-2 text-xl text-primary-500 shadow">Add Advertisement</h1>
      <InputField
        type={"text"}
        label="Advertisement Name"
        name="advertisementName"
        register={register}
        errors={errors}
      />
      <div className="space-y-1">
        <h1>Type</h1>
        <div className="flex gap-4">
          <Button
            onClick={() => setValue("type", "Top Banner")}
            variant="secondary"
          >
            Top Banner
          </Button>
          <Button
            onClick={() => setValue("type", "Pop Up")}
            variant="secondary"
          >
            Pop Up
          </Button>
        </div>
      </div>

      <InputField
        type={"textarea"}
        label="Description"
        name="description"
        register={register}
        errors={errors}
      />
      <InputField
        type={"text"}
        label="Country"
        name="country"
        register={register}
        errors={errors}
      />
      <InputField
        type={"text"}
        label="Link"
        name="link"
        register={register}
        errors={errors}
      />
      <UploadImage
        label="Image"
        watchImage={watch("image")}
        required={true}
        setValue={setValue}
        value="image"
        register={register}
        errors={errors}
      />
      {/* <div className="flex gap-4"></div> */}

      <div className="flex gap-4">
        <div className="flex-1">
          <InputField
            type={"number"}
            label="Duration (second)"
            name="duration"
            register={register}
            errors={errors}
          />
        </div>

        <div className="flex-1 space-y-2">
          <p className="text-sm">Advertising Targets</p>
          <CustomSelect
            onChange={(e) => setValue("advertisingTargets", e.target.value)}
            value={watch("advertisingTargets")}
            placeholder={"Select Type of Users Targeted"}
            options={[
              { value: "all", label: "All" },
              { value: "new", label: "New" },
              { value: "old", label: "Old" },
            ]}
          />
        </div>
      </div>
      <div className="flex gap-2">
        <Button onClick={onClose} variant="secondary">
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          Save
        </Button>
      </div>
    </form>
  );
};

export default CreateAdvertisementForm;
