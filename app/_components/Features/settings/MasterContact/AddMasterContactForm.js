"use client";
import Button from "@/app/_components/UI/Button";

import InputField from "@/app/_components/UI/InputField";

import Switch from "@/app/_components/UI/Swithch";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddMasterContactForm = ({ onClose }) => {
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
      <h1 className="p-2 text-xl text-primary-500 shadow">
        Add Master Contact
      </h1>
      <InputField
        label={"Contact Name"}
        type="text"
        name="contactName"
        register={register}
        errors={errors}
      />
      <InputField
        label={"Type of Contact"}
        type="text"
        name="typeOfContact"
        register={register}
        errors={errors}
      />
      <InputField
        label={"Number or Link"}
        type="text"
        name="numberOrLink"
        register={register}
        errors={errors}
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

export default AddMasterContactForm;
