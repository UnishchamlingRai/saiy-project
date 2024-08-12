"use client";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Button from "@/app/_components/UI/Button";
import InputField from "@/app/_components/UI/InputField";

import { useForm } from "react-hook-form";

import UploadAvatar from "../components/UploadAvatar";
import UploadImage from "../../../UI/UploadImage";

const CreateAdminForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
    setValue,
    watch,
  } = useForm();

  const watchAvatar = watch("avatar");
  const watchImageVerification = watch("imageVerification");

  const onSubmit = async (data) => {
    console.log(data);
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

      <InputField
        label={"City"}
        type="text"
        name="city"
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

export default CreateAdminForm;
