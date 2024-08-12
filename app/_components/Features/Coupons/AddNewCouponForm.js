"use client";
import React, { useState } from "react";
import InputField from "../../UI/InputField";
import { useForm } from "react-hook-form";
import CustomSelect from "../../UI/CustomSelect";
import Switch from "../../UI/Swithch";
import Button from "../../UI/Button";

const AddNewCouponForm = ({ onClose }) => {
  const {
    handleSubmit,
    register,
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
      <h1 className="p-2 text-xl text-primary-500 shadow">Add New Coupon</h1>
      <InputField
        type={"text"}
        label="Coupon Name"
        name="couponName"
        register={register}
        errors={errors}
      />
      <InputField
        type={"text"}
        label="Discount Code"
        name="discountCode"
        register={register}
        errors={errors}
      />
      <InputField
        type={"number"}
        label="Discount Percentage"
        name="discountPercentage"
        register={register}
        errors={errors}
      />
      <div className="flex gap-4">
        <div className="flex-1">
          <InputField
            type={"date"}
            label="Start Date"
            name="startDate"
            register={register}
            errors={errors}
          />
        </div>
        <div className="flex-1">
          <InputField
            type={"date"}
            label="End Date"
            name="endDate"
            register={register}
            errors={errors}
          />
        </div>
      </div>
      <InputField
        type={"number"}
        label="Numbers of Users"
        name="numberOfUsers"
        register={register}
        errors={errors}
      />

      <div className="space-y-2">
        <p className="text-sm">Type of Users Targeted</p>
        <CustomSelect
          onChange={(e) => setValue("typeOfUsersTargeted", e.target.value)}
          value={watch("typeOfUsersTargeted")}
          placeholder={"Select Type of Users Targeted"}
          options={[
            { value: "all", label: "All" },
            { value: "new", label: "New" },
            { value: "old", label: "Old" },
          ]}
        />
      </div>
      <div className="space-y-1">
        <p>Status</p>
        <Switch
          isActive={watchStatus}
          setIsActive={() => setValue("status", !watchStatus)}
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

export default AddNewCouponForm;
