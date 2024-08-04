import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Status = ({ status }) => {
  return (
    <p
      className={`flex items-center ${status === "active" ? "text-green-600" : "text-red-600"}`}
    >
      {status === "active" ? (
        <FaCheckCircle className="mr-2" />
      ) : (
        <FaTimesCircle className="mr-2" />
      )}
      {status}
    </p>
  );
};

export default Status;
