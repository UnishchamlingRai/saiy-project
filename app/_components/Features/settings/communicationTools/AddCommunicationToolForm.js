"use client";
import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../../../UI/InputField";
import Switch from "../../../UI/Swithch";
import Button from "../../../UI/Button";

const AddCommunicationToolForm = ({ onClose }) => {
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
        Add Polices And Term Of Use
      </h1>
      <InputField
        label={"Contact Name"}
        type="text"
        name="contactName"
        register={register}
        errors={errors}
      />
      <InputField
        type={"text"}
        label="Type of Contact"
        name="typeOfContact"
        errors={errors}
        register={register}
      />
      <InputField
        type={"text"}
        label="Number or Link"
        name="numberOrLink"
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

export default AddCommunicationToolForm;
