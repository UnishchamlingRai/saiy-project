import Link from "next/link";
import React from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const Icons = ({ iconName, link, onClick }) => {
  if (iconName == "details") {
    return (
      <button
        onClick={onClick}
        className="rounded-lg border border-primary-500 p-2 text-primary-500 transition-all duration-500 hover:bg-blue-200"
      >
        <Link href={link}>
          <FaEye />
        </Link>
      </button>
    );
  }

  if (iconName == "edit") {
    return (
      <button className="rounded-lg border border-warning-500 p-2 text-warning-500 transition-all duration-500 hover:bg-warning-200">
        <Link href={link}>
          <FaEdit />
        </Link>
      </button>
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
