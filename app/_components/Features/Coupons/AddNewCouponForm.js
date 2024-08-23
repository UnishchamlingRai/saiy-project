"use client";
import React, { useState } from "react";
import InputField from "../../UI/InputField";
import { useForm } from "react-hook-form";
import CustomSelect from "../../UI/CustomSelect";
import Switch from "../../UI/Swithch";
import Button from "../../UI/Button";
import { createCoupon, updateCoupon } from "@/app/services/couponService";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const AddNewCouponForm = ({ coupon }) => {
  // console.log("coupon:", coupon);
  const router = useRouter();
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm(
    coupon?.id
      ? {
          defaultValues: {
            couponName: coupon?.coupon_name,
            discountCode: coupon?.discount_code,
            discountPercentage: coupon?.discount_percentage,
            startDate: coupon?.start_date,
            endDate: coupon?.end_date,
            numberOfUsers: coupon?.no_of_users,
            typeOfUsersTargeted: coupon?.targated_user_type,
            status: coupon?.status === "active" ? true : false,
          },
        }
      : {},
  );
  const watchStatus = watch("status");
  async function onSubmit(data) {
    console.log(data);

    const formData = new FormData();
    formData.append("coupon_name", data.couponName);
    formData.append("discount_code", data.discountCode);
    formData.append("discount_percentage", data.discountPercentage);
    formData.append("start_date", data.startDate);
    formData.append("end_date", data.endDate);
    formData.append("no_of_users", data.numberOfUsers);
    formData.append("targated_user_type", data.typeOfUsersTargeted);
    if (data.status) {
      formData.append("status", "active");
    }
    if (coupon?.id) {
      formData.append("_method", "PUT");
    }

    const res = coupon?.id
      ? await updateCoupon(coupon.id, formData)
      : await createCoupon(formData);
    console.log("res:", res);
    if (res.status === 201 || res.status === 200) {
      toast.success(res.message);
      router.refresh("/coupons");
      router.push("/coupons");
    } else {
      toast.error(res.message);
    }
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
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
          onClick={() => setValue("status", !watchStatus)}
        />
      </div>
      <div className="flex gap-2">
        <Button onClick={() => router.back()} variant="secondary">
          Cancel
        </Button>
        <Button disabled={isSubmitting} type="submit" variant="primary">
          {isSubmitting ? "Saving..." : "Save"}
        </Button>
      </div>
    </form>
  );
};

export default AddNewCouponForm;
