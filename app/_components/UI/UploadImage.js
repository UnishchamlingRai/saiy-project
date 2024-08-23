import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdDelete, MdUpload } from "react-icons/md";

const UploadImage = ({
  register,
  watchImage,
  errors,
  value,
  setValue,
  label,
  required = false,
  defaultImage = null,
}) => {
  const [image, setImage] = useState(null);
  const [showDefaultImage, setShowDefaultImage] = useState(defaultImage);

  useEffect(() => {
    if (watchImage && watchImage[0]) {
      const file = watchImage[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, [watchImage]);

  const removeImage = () => {
    setValue(value, null);
    setImage(null);
    setShowDefaultImage(null);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-900">{label}</label>
      <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 p-2">
        <div className="w-full space-y-1 text-center">
          {image || showDefaultImage ? (
            <div className="flex flex-col items-center gap-2">
              <div className="relative h-[200px] w-full">
                <Image
                  fill
                  // src={image}
                  src={
                    showDefaultImage
                      ? `${process.env.NEXT_PUBLIC_API_URL}/${defaultImage}`
                      : image
                  }
                  alt="Uploaded"
                  className="object-cover"
                />
              </div>

              <button
                type="button"
                className="flex items-center gap-2 text-danger-500"
                onClick={removeImage}
              >
                <MdDelete /> <span>Remove image</span>
              </button>
            </div>
          ) : (
            <>
              <MdUpload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex items-center justify-center text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md border border-primary-500 bg-white p-2 font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    accept="image/png, image/jpeg"
                    {...register(
                      value,
                      required && { required: "This Image is required" },
                    )}
                  />
                </label>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
              {errors[value] && (
                <p className="text-sm font-bold text-red-500">
                  {errors[value]?.message}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
