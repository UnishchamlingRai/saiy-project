"use client";
import Button from "@/app/_components/UI/Button";
// components/AddCarForm.js
import CustomSelect from "@/app/_components/UI/CustomSelect";
import InputField from "@/app/_components/UI/InputField";
import UploadImage from "@/app/_components/UI/UploadImage";
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";

const AddNewCarForm = ({ onClose }) => {
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
      interiorAdditions: [""],
      externalAdditions: [""],
    },
  });

  const {
    fields: interiorFields,
    append: appendInterior,
    remove: removeInterior,
  } = useFieldArray({
    control,
    name: "interiorAdditions",
  });

  const {
    fields: externalFields,
    append: appendExternal,
    remove: removeExternal,
  } = useFieldArray({
    control,
    name: "externalAdditions",
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const handleAddExternalAddition = (e) => {
    const value = e.target.value;
    if (value && !externalFields.find((field) => field.value === value)) {
      appendExternal({ value });
    }
    e.target.value = "";
  };

  const handleAddInteriorAddition = (e) => {
    const value = e.target.value;
    if (value && !interiorFields.find((field) => field.value === value)) {
      appendInterior({ value });
    } else {
      e.target.value = "";
    }
  };

  return (
    <div className="mx-auto max-w-2xl rounded-md bg-white p-2">
      <h2 className="mb-6 text-2xl font-semibold text-primary-500">
        Add New Cars
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium">
            Brand of Cars
          </label>
          <CustomSelect
            value={watch("brand")}
            placeholder={"Brand of Cars"}
            onChange={(e) => setValue("brand", e.target.value)}
            options={[
              { value: "Toyota", label: "Toyota" },
              { value: "BMW", label: "BMW" },
              { value: "Nissan", label: "Nissan" },
            ]}
          />
        </div>
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium">
            Model of Cars
          </label>
          <CustomSelect
            value={watch("model")}
            placeholder={"Model of Cars"}
            onChange={(e) => setValue("model", e.target.value)}
            options={[
              { value: "X5", label: "X5" },
              { value: "X6", label: "X6" },
            ]}
          />
        </div>

        <div className="mb-4 rounded-md border border-gray-500 p-2">
          <div className="flex flex-col">
            <label className="mb-1 block text-sm font-medium">
              External Additions
            </label>
            <CustomSelect
              placeholder={"Choose External Addition"}
              onChange={handleAddExternalAddition}
              options={[
                { value: "Chrome Tyres", label: "Chrome Tyres" },
                { value: "Powerful Lighting", label: "Powerful Lighting" },
                { value: "Roof Rack", label: "Roof Rack" },
                { value: "Spoilers", label: "Spoilers" },
              ]}
            />
          </div>
          {externalFields.map((item, index) => (
            <ul key={item.id} className="flex items-center gap-2 p-1">
              <li className="flex-1 rounded-md border border-gray-500 p-1">
                {item.value}
              </li>
              <button
                type="button"
                className="text-red-500"
                onClick={() => removeExternal(index)}
              >
                <AiOutlineDelete size={24} />
              </button>
            </ul>
          ))}
        </div>
        <div className="mb-4 rounded-md border border-gray-500 p-2">
          <div className="flex flex-col">
            <label className="mb-1 block text-sm font-medium">
              Interior Additions
            </label>
            <CustomSelect
              placeholder={"Choose  Interior Additions"}
              onChange={handleAddInteriorAddition}
              options={[
                { value: "Chrome Tyres", label: "Chrome Tyres" },
                { value: "Powerful Lighting", label: "Powerful Lighting" },
                { value: "Roof Rack", label: "Roof Rack" },
                { value: "Spoilers", label: "Spoilers" },
              ]}
            />
          </div>
          {interiorFields.map((item, index) => (
            <ul key={item.id} className="flex items-center gap-2 p-1">
              <li className="flex-1 rounded-md border border-gray-500 p-1">
                {item.value}
              </li>
              <button
                type="button"
                className="text-red-500"
                onClick={() => removeInterior(index)}
              >
                <AiOutlineDelete size={24} />
              </button>
            </ul>
          ))}
        </div>

        <UploadImage
          register={register}
          errors={errors}
          value={"car_image"}
          label={"Upload Car Image"}
          required={true}
          setValue={setValue}
          watchImage={watch("car_image")}
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

export default AddNewCarForm;
