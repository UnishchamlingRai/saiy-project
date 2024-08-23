"use client";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useAddCity } from "./AddCityContext";
import testIMage from "@/public/image/LoginImage.png";

const FileUpload = ({ editImage }) => {
  // console.log("editImage:", editImage);
  const [imageUrl, setImageUrl] = useState(
    editImage ? `http://saity.yallagai.site/${editImage}` : null,
  );
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(editImage ? true : false);
  const { setImage } = useAddCity();

  const onDrop = useCallback(
    (acceptedFiles) => {
      setIsUploading(true);

      // Simulate an upload process
      const file = acceptedFiles[0];
      setImage(file);
      console.log("file:", file);
      const url = URL.createObjectURL(file);

      setTimeout(() => {
        setIsUploading(false);
        setIsUploaded(true);
        setImageUrl(url);
      }, 2000); // Simulate 2 seconds upload time
    },
    [setImage],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*", // Corrected MIME type
  });

  const removeImage = () => {
    setImageUrl(null);
    setIsUploaded(false);
  };

  return (
    <div
      {...getRootProps()}
      className="cursor-pointer rounded-lg border-2 border-dashed border-gray-300 p-6 text-center"
    >
      <input {...getInputProps()} />
      {isUploading ? (
        <div className="animate-pulse text-gray-500">Uploading...</div>
      ) : isUploaded && imageUrl ? (
        <div>
          <img
            src={imageUrl}
            alt="Uploaded"
            className="mx-auto my-4 rounded-lg"
          />

          <button onClick={removeImage} className="text-red-500">
            Remove Image
          </button>
        </div>
      ) : (
        <div>
          <p className="text-gray-500">Upload or drag file here</p>
          <p className="text-gray-400">(PNG, JPG)</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
