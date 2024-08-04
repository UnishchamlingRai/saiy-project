"use client";
import React from "react";
const AddNeigborhoodForm = ({ nextStep, closeModal }) => {
  return (
    <div className="mx-auto w-full max-w-md rounded-md bg-white p-4">
      <h2 className="text-xl font-semibold text-gray-700">Add Neighborhoods</h2>
      <div className="mt-4">
        <label className="block text-gray-700">Neighborhood Name</label>
        <input
          type="text"
          className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
          defaultValue="شارع الامام سوكوكو رقم 12 المدينة المنورة"
        />
      </div>
      <div className="mt-4">
        <label className="block text-gray-700">Location on Maps</label>
        <button
          className="mt-2 flex w-full items-center rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
          onClick={nextStep}
        >
          Select location on maps
        </button>
      </div>
      <div className="mt-6 flex justify-end">
        <button
          className="mr-2 rounded-md bg-gray-200 px-4 py-2 text-gray-700"
          onClick={closeModal}
        >
          Cancel
        </button>
        <button className="rounded-md bg-blue-600 px-4 py-2 text-white">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNeigborhoodForm;
