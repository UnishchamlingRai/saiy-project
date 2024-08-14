"use client";
import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../../../UI/InputField";
import Switch from "../../../UI/Swithch";
import Button from "../../../UI/Button";

const AddSupportMessageFrom = ({ onClose }) => {
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const watchStatus = watch("status");

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="p-2 text-xl text-primary-500 shadow">
        Add Support Message
      </h1>
      <InputField
        label={"Title"}
        type="text"
        name="title"
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

export default AddSupportMessageFrom;
