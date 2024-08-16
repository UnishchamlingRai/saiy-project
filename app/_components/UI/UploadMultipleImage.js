"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdDelete, MdUpload } from "react-icons/md";
import { toast } from "react-hot-toast";

const UploadMultipleImage = ({
  errors,
  value,
  label,
  control,
  useFieldArray,
  required = true,
}) => {
  const {
    fields: images,
    append: appendimages,
    remove: removeimages,
  } = useFieldArray({
    control,
    rules: {
      required: {
        value: required,
        message: `${label} is required`,
      },
    },
    name: value, // Bind to the field name passed from parent
  });

  // Handle file input and image preview
  function handleAddimages(e) {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      files.forEach((file) => {
        const previewUrl = URL.createObjectURL(file);
        appendimages({ file, previewUrl });
      });
    }
    e.target.value = ""; // Clear file input
  }

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-900">{label}</label>
      <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 p-2">
        <div className="w-full space-y-1 text-center">
          <div className="grid grid-cols-3 gap-4">
            {images.map((img, index) => (
              <div key={img.id} className="relative h-[100px] w-full">
                <Image
                  fill
                  src={img.previewUrl} // Image preview URL
                  alt={`Uploaded ${index + 1}`}
                  className="object-cover"
                />
                <button
                  type="button"
                  className="absolute right-0 top-0 flex items-center gap-2 p-1 text-red-500"
                  onClick={() => removeimages(index)}
                >
                  <MdDelete />
                </button>
              </div>
            ))}
          </div>

          <>
            <MdUpload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex items-center justify-center text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md border border-primary-500 bg-white p-2 font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>Upload files</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  multiple
                  className="sr-only"
                  accept="image/png, image/jpeg"
                  onChange={handleAddimages}
                />
              </label>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG up to 10MB each</p>
            {errors[value] && (
              <p className="text-sm font-bold text-red-500">
                {errors[value]?.message}
              </p>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default UploadMultipleImage;
