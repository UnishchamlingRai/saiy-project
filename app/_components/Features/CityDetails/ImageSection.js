import React from "react";

const ImageSection = ({ cityImage }) => {
  console.log(cityImage);
  return (
    <div className="flex h-[50%] w-[300px] flex-col items-start justify-between rounded-md border border-gray-400 p-2">
      <h3 className="mb-2 font-semibold">Image</h3>
      <div className="flex h-[300px] w-full flex-col items-center justify-center">
        <img
          src={`${process.env.BASe_URL}/${cityImage}`}
          alt={` Image`}
          className="mb-2 h-[80%] w-[100%] rounded-md"
        />
        <button className="rounded-md p-2 font-bold text-danger-600">
          Remove Image
        </button>
      </div>
    </div>
  );
};

export default ImageSection;
