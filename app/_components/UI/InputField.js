import React from "react";

const InputField = ({
  label,
  type,
  register,
  required = true,
  errors,
  name,
  isTextArea = false,
}) => {
  if (type === "textarea") {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-900">
          {label}
        </label>
        <textarea
          rows="4"
          cols="50"
          placeholder={label}
          type={type}
          {...register(name, required && { required: `${label} is required` })}
          className={`mt-1 block w-full border bg-white px-3 py-2 ${
            errors[name] ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500`}
        />
        {errors[name] && (
          <p className="mt-2 text-sm text-red-600">{errors[name]?.message}</p>
        )}
      </div>
    );
  } else {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-900">
          {label}
        </label>
        <input
          placeholder={label}
          type={type}
          {...register(name, required && { required: `${label} is required` })}
          className={`mt-1 block w-full border bg-white px-3 py-2 ${
            errors[name] ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500`}
        />
        {errors[name] && (
          <p className="mt-2 text-sm text-red-600">{errors[name]?.message}</p>
        )}
      </div>
    );
  }
};

export default InputField;
