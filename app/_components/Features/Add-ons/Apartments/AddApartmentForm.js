"use client";
import Button from "@/app/_components/UI/Button";

import CustomSelect from "@/app/_components/UI/CustomSelect";
import InputField from "@/app/_components/UI/InputField";
import UploadMultipleImage from "@/app/_components/UI/UploadMultipleImage";

import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import toast from "react-hot-toast";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";

const AddApartmentForm = ({ onClose }) => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      brand: "BMW",
      model: "X5",
      mainFeatures: [""],
      nearbyPlaces: [""],
      images: [""],
    },
  });

  const {
    fields: nearbyPlaces,
    append: appendNearbyPlaces,
    remove: removeNearbyPlaces,
  } = useFieldArray({
    control,
    name: "nearbyPlaces",
  });

  const {
    fields: mainFeatures,
    append: appendMainFeatures,
    remove: removeMainFeatures,
  } = useFieldArray({
    control,
    name: "mainFeatures",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleAddMainFeaturesAddition = (e) => {
    const value = e.target.value;
    if (value && !mainFeatures.find((field) => field.value === value)) {
      appendMainFeatures({ value });
    } else {
      toast.error(`${value} already exists`);
      e.target.value = "";
    }
  };

  const handleAddNearbyPlacesAddition = (e) => {
    const value = e.target.value;
    if (value && !nearbyPlaces.find((field) => field.value === value)) {
      appendNearbyPlaces({ value });
    } else {
      toast.error(`${value} already exists`);
      e.target.value = "";
    }
  };

  return (
    <div className="mx-auto max-w-2xl rounded-md bg-white p-2">
      <h2 className="mb-6 text-2xl font-semibold text-primary-500">
        Add New Apartments
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          type="text"
          label="Apartments Name"
          name="apartmentName"
          register={register}
          errors={errors}
        />

        <div className="mb-4 mt-4 rounded-md border border-gray-500 p-2">
          <div className="flex flex-col">
            <label className="mb-1 block text-sm font-medium">
              Main Features
            </label>
            <CustomSelect
              placeholder={"Choose External Addition"}
              onChange={handleAddMainFeaturesAddition}
              options={[
                { value: "Chrome Tyres", label: "Chrome Tyres" },
                { value: "Powerful Lighting", label: "Powerful Lighting" },
                { value: "Roof Rack", label: "Roof Rack" },
                { value: "Spoilers", label: "Spoilers" },
              ]}
            />
          </div>
          {mainFeatures.map((item, index) => (
            <ul key={item.id} className="flex items-center gap-2 p-1">
              <li className="flex-1 rounded-md border border-gray-500 p-1">
                {item.value}
              </li>
              <button
                type="button"
                className="text-red-500"
                onClick={() => removeMainFeatures(item.id)}
              >
                <AiOutlineDelete size={24} />
              </button>
            </ul>
          ))}
        </div>

        <div className="mb-4 rounded-md border border-gray-500 p-2">
          <div className="flex flex-col">
            <label className="mb-1 block text-sm font-medium">
              Near by Places
            </label>
            <CustomSelect
              placeholder={"Choose Near by Places"}
              onChange={handleAddNearbyPlacesAddition}
              options={[
                { value: "Chrome Tyres", label: "Chrome Tyres" },
                { value: "Powerful Lighting", label: "Powerful Lighting" },
                { value: "Roof Rack", label: "Roof Rack" },
                { value: "Spoilers", label: "Spoilers" },
              ]}
            />
          </div>
          {nearbyPlaces.map((item, index) => {
            return (
              <ul key={item.id} className="flex items-center gap-2 p-1">
                <li className="flex-1 rounded-md border border-gray-500 p-1">
                  {item.value}
                </li>
                <button
                  type="button"
                  className="text-red-500"
                  onClick={() => removeNearbyPlaces(item.id)}
                >
                  <AiOutlineDelete size={24} />
                </button>
              </ul>
            );
          })}
        </div>

        <UploadMultipleImage
          useFieldArray={useFieldArray}
          register={register}
          errors={errors}
          value={"apartment_Image"}
          label={"Upload Car Image"}
          required={true}
          setValue={setValue}
          watchImage={watch("apartment_Image")}
          control={control}
        />

        <div className="mt-6 flex justify-end gap-4">
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  );
};

export default AddApartmentForm;
