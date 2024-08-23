"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import InputField from "../../UI/InputField";
import { useForm } from "react-hook-form";
import SelectLocationOnMaps from "./SelectLocationOnMaps";
import { createNeighborhood } from "@/app/services/neighborhoodService";
import { useRouter } from "next/navigation";
const AddNeigborhoodForm = ({ closeModal, cityId }) => {
  const [isOpenSelectLocationOnMaps, setIsOpenSelectLocationOnMaps] =
    useState(false);
  const [neighborhoodData, setNeighborhoodData] = useState({});
  const router = useRouter();
  // console.log("neighborhoodData:", neighborhoodData);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      neighborhoodName: neighborhoodData.city,
      location: neighborhoodData.city,
    },
  });

  const onSubmit = async (data) => {
    const newNeighborhood = {
      city_id: cityId,
      neighborhood_name: data.neighborhoodName,
      neighborhood_latitude: neighborhoodData.latitude,
      neighborhood_longitude: neighborhoodData.longitude,
      arabic_name: data.neighborhoodNameArabic,
    };
    const res = await createNeighborhood(newNeighborhood);
    // console.log("res:", res);
    if (res.status === 201) {
      {
        toast.success(res.message);
        router.refresh();
        closeModal();
      }
    }
    // console.log(newNeighborhood);
  };
  return isOpenSelectLocationOnMaps ? (
    <SelectLocationOnMaps
      neighborhoodData={neighborhoodData}
      setNeighborhoodData={setNeighborhoodData}
      closeSelectLocationOnMaps={() => setIsOpenSelectLocationOnMaps(false)}
    />
  ) : (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-full max-w-md space-y-4 rounded-md bg-white p-4"
    >
      <h2 className="text-xl font-semibold text-gray-700">Add Neighborhoods</h2>
      {/* <InputField label="Neighborhood name"  /> */}
      <InputField
        defaultValue={neighborhoodData.city}
        label="Neighborhood name"
        type="text"
        name="neighborhoodName"
        register={register}
        errors={errors}
      />
      <InputField
        defaultValue={neighborhoodData.city}
        label="Neighborhood Name (Arabic)"
        type="text"
        name="neighborhoodNameArabic"
        register={register}
        errors={errors}
      />
      <div>
        <label className="block text-sm font-medium text-gray-900">
          Select Location On Maps
        </label>
        <input
          defaultValue={neighborhoodData.city}
          onClick={() => setIsOpenSelectLocationOnMaps(true)}
          placeholder="Select Location On Maps"
          type="text"
          className="mt-1 block w-full rounded-md border border-gray-400 bg-white px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500"
        />
        <span>hkd</span>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          className="mr-2 rounded-md bg-gray-200 px-4 py-2 text-gray-700"
          onClick={closeModal}
        >
          Cancel
        </button>
        <button
          disabled={isSubmitting}
          // onClick={closeModal}
          type="submit"
          className="rounded-md bg-blue-600 px-4 py-2 text-white"
        >
          {isSubmitting ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  );
};

export default AddNeigborhoodForm;
