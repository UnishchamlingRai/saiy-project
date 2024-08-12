"use client";
import { IoIosArrowDown } from "react-icons/io";

export default function CustomSelect({
  value,
  onChange,
  options,
  placeholder,
}) {
  return (
    <div className="relative inline-block w-full sm:w-full">
      <select
        value={value}
        onChange={onChange}
        className="focus:shadow-outline block w-full appearance-none rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight hover:border-gray-500 focus:outline-none"
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <IoIosArrowDown />
      </div>
    </div>
  );
}
