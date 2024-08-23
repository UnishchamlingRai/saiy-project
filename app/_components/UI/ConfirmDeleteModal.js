"use client";
import React from "react";
import InputField from "./InputField";
import Button from "./Button";
import { useForm } from "react-hook-form";

const ConfirmDeleteModal = ({ onClick, onConfirmDelete }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(data) {
    onConfirmDelete(data.password);
    onClick();
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="rounded-md p-2 text-lg text-danger-500 shadow">
        Confirm Delete
      </h1>
      <InputField
        label={"Enter Your Password"}
        type="password"
        register={register}
        errors={errors}
        name="password"
      />
      <p>Enter the password if you want to delete the selected data</p>
      <div className="flex gap-2">
        <div className="flex-1 rounded-lg border border-primary-500 text-primary-500">
          <Button onClick={onClick} variant="secondary">
            Cancel
          </Button>
        </div>
        <div className="flex-1">
          <Button disabled={isSubmitting} type="submit">
            {isSubmitting ? "Saving..." : "Save"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ConfirmDeleteModal;
