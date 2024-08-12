"use client";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Button from "@/app/_components/UI/Button";
import InputField from "@/app/_components/UI/InputField";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaMale, FaFemale } from "react-icons/fa";
import { MdUpload, MdDelete } from "react-icons/md";

import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import toast from "react-hot-toast";
import Image from "next/image";
import { createEndUser } from "@/app/services/member/endUserService";

import UploadAvatar from "../components/UploadAvatar";
import UploadImage from "../../../UI/UploadImage";

const CreateEndUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
    setValue,
    watch,
  } = useForm();

  const watchGender = watch("gender");
  const watchCountry = watch("country");
  const watchState = watch("state");
  const watchAvatar = watch("avatar");
  const watchImageVerification = watch("imageVerification");

  const onSubmit = async (data) => {
    // const formData=new FormData()
    // console.log(data);
    if (!data?.country?.name || !data?.state?.name || !data?.city?.name) {
      {
        toast.error("Please select your country, state and city");
        return;
      }
    }
    // const city = `${data.city.name},${data.state.name},${data.country.name}`;
    const city = 11;

    const formData = new FormData();
    formData.append("user_fullname_eng", data.nameEnglish);
    formData.append("user_fullname_arabic", data.nameArabic);
    formData.append("user_gender", data.gender);
    formData.append("user_age", data.age);
    formData.append("user_phone_number", data.phone);
    formData.append("user_email", data.email);
    formData.append("user_neighborhood", data.neighbourhood);
    formData.append("user_city", city);
    formData.append("user_image", data.avatar[0]);
    formData.append("user_image_verification", data.imageVerification[0]);
    formData.append("user_password", data.password);
    formData.append("user_password_confirmation", data.confirmPassword);

    const res = await createEndUser(formData);
    console.log("res:", res);

    // console.log("formData:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-2/4 flex-col gap-4 rounded-md bg-white p-4"
    >
      <div className="mb-4 flex items-center gap-4">
        <UploadAvatar
          register={register}
          watchAvatar={watchAvatar}
          errors={errors}
        />

        <div className="flex-1">
          <InputField
            label="Name (English)"
            type="text"
            name="nameEnglish"
            register={register}
            errors={errors}
          />
        </div>
      </div>

      <InputField
        label="Name (Arabic)"
        type="text"
        name="nameArabic"
        register={register}
        errors={errors}
      />

      <div className="flex items-center justify-center gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-900">
            Gender
          </label>
          <div className="mt-1 flex space-x-4">
            <button
              type="button"
              className={`flex items-center space-x-2 rounded-md p-2 ${
                watchGender === "male"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setValue("gender", "male")}
            >
              <FaMale className="text-lg" />
              <span>Male</span>
            </button>
            <button
              type="button"
              className={`flex items-center space-x-2 rounded-md p-2 ${
                watchGender === "female"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setValue("gender", "female")}
            >
              <FaFemale className="text-lg" />
              <span>Female</span>
            </button>
          </div>
        </div>

        <div className="flex-1">
          <InputField
            label="Age (Years Old)"
            type="number"
            name="age"
            register={register}
            errors={errors}
          />
        </div>
      </div>

      <UploadImage
        register={register}
        watchImage={watchImageVerification}
        label="Image Verification"
        value="imageVerification"
        errors={errors}
        required={true}
        setValue={setValue}
      />

      <div className="mb-4">
        <label
          htmlFor="phoneNumber"
          className="block text-sm font-medium text-gray-900"
        >
          Phone Number
        </label>
        <PhoneInput
          international
          countryCallingCodeEditable={false}
          defaultCountry="RU"
          //   value={phoneNumber}
          onChange={(e) => {
            setValue("phoneNumber", e);
          }}
        />
      </div>

      <div className="flex items-center gap-2">
        <div className="flex flex-col gap-1">
          <h6>Country</h6>
          <CountrySelect
            showFlag={true}
            onChange={(e) => {
              setValue("country", e);
            }}
            placeHolder={"Select Country"}
            containerClassName="selectCountry"
            style={{ border: "none", padding: "2px", outline: "none" }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h6>State</h6>
          <StateSelect
            disabled={!watchCountry?.id}
            countryid={watchCountry?.id}
            onClick={() => {
              if (!watchCountry?.id) {
                toast.error("Fist Select Country");
              }
            }}
            onChange={(e) => {
              setValue("state", e);
            }}
            placeHolder="Select State"
            style={{ border: "none", padding: "2px", outline: "none" }}
          />
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <h6>City</h6>
          <CitySelect
            disabled={!watchCountry?.id || !watchState?.id}
            countryid={watchCountry?.id}
            stateid={watchState?.id}
            onChange={(e) => {
              setValue("city", e);
            }}
            onClick={() => {
              if (!watchCountry?.id || !watchState?.id) {
                toast.error("Fist Select Country & State");
              }
            }}
            placeHolder={"Select City"}
            style={{ border: "none", padding: "2px", outline: "none" }}
          />
        </div>
      </div>

      <InputField
        label={"Enter the Neighbourhood"}
        type="text"
        name="neighbourhood"
        register={register}
        errors={errors}
      />
      <InputField
        label={"Enter Email"}
        type="email"
        name="email"
        register={register}
        errors={errors}
      />
      <InputField
        label={"Enter Password"}
        type="password"
        name="password"
        register={register}
        errors={errors}
      />
      <InputField
        label={"Confirm Password"}
        type="password"
        name="confirmPassword"
        register={register}
        validation={{
          validate: (value) => {
            if (value !== getValues("password")) {
              return "Passwords do not match!";
            }
          },
        }}
        errors={errors}
      />

      <div className="flex justify-end space-x-4">
        <Button variant="secondary">Cancel</Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default CreateEndUserForm;
