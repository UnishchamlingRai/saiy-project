"use client";
import Button from "@/app/_components/UI/Button";
import InputField from "@/app/_components/UI/InputField";
import Switch from "@/app/_components/UI/Swithch";
import React from "react";
import { useForm } from "react-hook-form";

const AddMasterFAQFrom = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const watchStatus = watch("status");

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="p-2 text-xl text-primary-500 shadow">Add New FAQ</h1>
      <InputField
        label={"Type of FAQ"}
        type="text"
        name="typeOfFAQ"
        register={register}
        errors={errors}
      />
      <InputField
        type={"textarea"}
        label="Content"
        name="content"
        errors={errors}
        register={register}
      />
      <div>
        <h1>Status</h1>
        <Switch
          isActive={watchStatus}
          onClick={() => setValue("status", !watchStatus)}
        />
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

export default AddMasterFAQFrom;
