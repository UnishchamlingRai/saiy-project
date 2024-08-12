import Link from "next/link";
import React from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const Icons = ({ iconName, link, onClick }) => {
  if (iconName == "details") {
    return (
      <Link href={link}>
        <button
          onClick={onClick}
          className="rounded-lg border border-primary-500 p-2 text-primary-500 transition-all duration-500 hover:bg-blue-200"
        >
          <FaEye />
        </button>
      </Link>
    );
  }

  if (iconName == "edit") {
    return (
      <Link href={link}>
        <button className="rounded-lg border border-warning-500 p-2 text-warning-500 transition-all duration-500 hover:bg-warning-200">
          <FaEdit />
        </button>
      </Link>
    );
  }

  if (iconName == "delete") {
    return (
      <button
        onClick={onClick}
        className="rounded-lg border border-danger-500 p-2 text-danger-500 transition-all duration-500 hover:bg-danger-200"
      >
        <FaTrash />
      </button>
    );
  }
};

export default Icons;
