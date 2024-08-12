import Image from "next/image";
import React from "react";

const SideImage = ({ image }) => {
  console.log(image);
  return (
    <div className="flex w-full max-w-md flex-col items-start justify-between rounded-md border border-gray-400 p-2 md:w-[300px]">
      <h3 className="mb-2 font-semibold">Image</h3>
      <div className="relative flex h-[200px] w-full flex-col items-center justify-center rounded-md border border-dotted border-gray-900 p-4 md:h-[300px]">
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}/${image}`}
          alt="Image"
          fill
          className="mb-2 rounded-md object-cover"
        />
      </div>
    </div>
  );
};

export default SideImage;
