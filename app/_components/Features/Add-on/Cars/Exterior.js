"use client";
import Button from "@/app/_components/UI/Button";
import InputField from "@/app/_components/UI/InputField";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineDelete } from "react-icons/ai";

const Exterior = () => {
  const [isOpenAddName, setIsOpenAddName] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [Exterior, setExterior] = useState([
    "KIA",
    "Toyota",
    "BMW",
    "Chevrolet",
  ]);

  const onSubmit = (data) => {
    if (data.Exterior) {
      setExterior((prevExterior) => [...prevExterior, data.Exterior]);
      reset();
    }
  };

  const removeExterior = (index) => {
    setExterior(Exterior.filter((_, i) => i !== index));
  };

  return (
    <div className="">
      <div className="w-full rounded-lg bg-white p-4 shadow-md">
        <div className="mb-2 flex items-center gap-2 rounded-md bg-gray-300 p-2">
          <div>
            <Button
              onClick={() => setIsOpenAddName((isopen) => !isopen)}
              variant="primary"
            >
              +
            </Button>
          </div>
          <h2 className="text-center font-bold">Exterior Name</h2>
        </div>
        {isOpenAddName && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mb-4 flex items-center gap-2"
          >
            <div className="flex-1">
              <InputField
                type={"text"}
                label="Add Exterior"
                name="Exterior"
                register={register}
                errors={errors}
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
        <ul className="space-y-2">
          {Exterior.map((Exterior, index) => (
            <li
              key={index}
              className="flex items-center justify-between rounded-lg border p-2"
            >
              {Exterior}
              <button
                onClick={() => removeExterior(index)}
                className="text-red-500"
              >
                <AiOutlineDelete size={20} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Exterior;
