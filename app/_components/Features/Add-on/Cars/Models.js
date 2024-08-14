"use client";
import Button from "@/app/_components/UI/Button";
import CustomSelect from "@/app/_components/UI/CustomSelect";
import InputField from "@/app/_components/UI/InputField";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";

const Models = () => {
  const [isOpenAddName, setIsOpenAddName] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const [models, setModels] = useState([
    {
      id: "1",
      brandName: "KIA",
      modelName: "Seltos",
    },
  ]);
  const watchBrandName = watch("brandName");

  const onSubmit = (data) => {
    if (data.brandName) {
      setModels((prevModels) => [
        ...prevModels,
        {
          id: Math.random(),
          brandName: data.brandName,
          modelName: data.modelName,
        },
      ]);
      reset();
    }
  };

  const removeBrand = (id) => {
    setModels((prevModels) => prevModels.filter((model) => model.id !== id));
  };

  return (
    <div className="">
      <div className="w-full rounded-lg bg-white p-4 shadow-md">
        <div className="mb-2 flex items-center justify-between gap-2 rounded-md bg-gray-300 p-2">
          <div className="flex items-center gap-2">
            <div>
              <Button
                onClick={() => setIsOpenAddName((isOpen) => !isOpen)}
                variant="primary"
              >
                +
              </Button>
            </div>
            <h2 className="flex-1 text-center font-bold">Models</h2>
          </div>
        </div>
        {isOpenAddName && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mb-4 flex items-center gap-2"
          >
            <div className="flex-1">
              <InputField
                type={"text"}
                label="Model Name"
                name="modelName"
                register={register}
                errors={errors}
              />
            </div>
            <div className="flex-1">
              <h1>Brand Name</h1>
              <CustomSelect
                value={watchBrandName}
                placeholder={"Select Brand"}
                onChange={(e) => setValue("brandName", e.target.value)}
                options={[
                  { value: "Toyota", label: "Toyota" },
                  { value: "Hero Honda", label: "Hero Honda" },
                  { value: "Safari", label: "Safari" },
                ]}
              />
            </div>
            <button
              type="submit"
              className="mt-5 rounded-lg bg-green-500 p-2 px-4 text-white"
            >
              ✓
            </button>
          </form>
        )}
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2 text-start">Model Name</th>
              <th className="border p-2 text-start">Brand Name</th>
              <th className="border p-2 text-start">Delete</th>
            </tr>
          </thead>
          <tbody>
            {models.map((model) => (
              <tr key={model.id}>
                <td className="border p-2">{model.modelName}</td>
                <td className="border p-2">{model.brandName}</td>
                <td className="border p-2">
                  <button
                    onClick={() => removeBrand(model.id)}
                    className="text-red-500"
                  >
                    <AiOutlineDelete size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Models;
