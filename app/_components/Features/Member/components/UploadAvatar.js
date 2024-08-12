import Image from "next/image";
import React, { useEffect, useState } from "react";

const UploadAvatar = ({ register, watchAvatar, errors }) => {
  const [avatarPreview, setAvatarPreview] = useState(null);
  useEffect(() => {
    if (watchAvatar && watchAvatar[0]) {
      const file = watchAvatar[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, [watchAvatar]);

  return (
    <div className="flex-shrink-0">
      <label
        htmlFor="avatar"
        className="flex h-20 w-20 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-200"
      >
        {avatarPreview ? (
          <div className="relative h-full w-full">
            <Image
              fill
              src={avatarPreview}
              alt="Avatar"
              className="h-full w-full rounded-full border-2 border-gray-600 object-cover"
            />
          </div>
        ) : (
          <span className="text-center text-sm text-gray-500">
            <p className={`${errors?.avatar && "text-red-500"}`}>
              {errors?.avatar
                ? ` ${errors?.avatar?.message}`
                : " Upload Avatar"}
            </p>
          </span>
        )}
      </label>
      <input
        id="avatar"
        type="file"
        className="hidden"
        accept="image/png, image/jpeg"
        {...register("avatar", {
          required: "Avatar is required",
        })}
      />
    </div>
  );
};

export default UploadAvatar;
