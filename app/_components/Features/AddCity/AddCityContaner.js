"use client";
// components/CityForm.js

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import InputField from "../../UI/InputField";
import FileUpload from "./FileUpload";
import SelectCityAndCountry from "./SelectCityAndCountry";
import { useAddCity } from "./AddCityContext";

import { createCity, updateCity } from "@/app/services/cityService";
import { useRouter } from "next/navigation";
import Switch from "../../UI/Swithch";

const AddCityContainer = ({ editcityData }) => {
  const {
    setCountryName,
    setCityName,
    countryName,
    setlatlng,
    cityName,
    image,
    latlng,
    setImage,
  } = useAddCity();
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      cityNameArabic: editcityData?.city_name_arabic || "",
      territoryArea: editcityData?.city_territory_area || "",
    },
  });

  useEffect(() => {
    if (editcityData) {
      setCountryName(editcityData.city_country);
      setCityName(editcityData.city_name);
      setlatlng([editcityData.city_latitude, editcityData.city_longitude]);
      // setImage(editcityData.city_image);
      setIsActive(editcityData.city_status === "active");
    }
  }, [editcityData]);

  async function onSubmit(data) {
    try {
      const formData = new FormData();
      formData.append("city_country", countryName);
      formData.append("city_name", cityName);
      formData.append("city_latitude", latlng[0]);
      formData.append("city_longitude", latlng[1]);
      formData.append("city_name_arabic", data.cityNameArabic);
      formData.append("city_territory_area", data.territoryArea);
      if (isActive) {
        formData.append("city_status", "active");
      }
      // formData.append("city_image", image);

      // console.log("FormData entries:", formData.entries());

      if (editcityData?.id) {
        // For update city
        console.log("FromData:", formData);
        formData.append("_method", "PUT");
        const res = await updateCity(editcityData.id, formData);
        if (res.error) {
          return toast.error(res.error);
        }
        console.log("Update response:", res);
        toast.success("City updated successfully");
      } else {
        const res = await createCity(formData);
        console.log("Create response:", res);
        toast.success("City created successfully");
      }

      router.push("/cities");
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to save the city. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col justify-between gap-10 rounded-md bg-white p-6 shadow sm:flex-row"
    >
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex items-center justify-center gap-2">
          <div className="flex-1">
            <SelectCityAndCountry editcityData={editcityData} />
          </div>
        </div>
        <InputField
          label="City Name (Arabic)"
          type="text"
          name="cityNameArabic"
          register={register}
          errors={errors}
        />

        <InputField
          label="Territory Area (Km²)"
          type="text"
          name="territoryArea"
          register={register}
          errors={errors}
        />
      </div>
      <div className="flex-1">
        <FileUpload editImage={editcityData?.city_image} />
        <div className="mt-2 space-y-1">
          <p>Status</p>
          <Switch isActive={isActive} setIsActive={setIsActive} />
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={() => router.push("/cities")}
            className="mr-4 rounded-md border-2 border-primary-500 px-4 py-2 text-primary-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-md bg-primary-500 px-4 py-2 text-white"
          >
            {editcityData?.id
              ? isSubmitting
                ? "Updating..."
                : "Update"
              : isSubmitting
                ? "Creating..."
                : "Create"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddCityContainer;
