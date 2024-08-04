// components/Pagination.js

import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange,
}) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-between space-x-2 p-2">
      <button
        className={`rounded-full p-2 ${currentPage === 1 ? "bg-gray-300" : "bg-primary-500 text-gray-50"}`}
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        <FaChevronLeft />
      </button>

      <div className="flex items-center space-x-2 overflow-x-scroll">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`rounded-md p-2 ${currentPage === index + 1 ? "bg-primary-500 text-gray-50" : "bg-gray-200"}`}
            onClick={() => onPageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <button
        className={`rounded-full p-2 ${currentPage === totalPages ? "bg-gray-300" : "bg-primary-500 text-gray-50"}`}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <FaChevronRight />
      </button>

      <div className="flex items-center space-x-2">
        <label htmlFor="itemsPerPage" className="text-sm">
          Show
        </label>
        <select
          id="itemsPerPage"
          className="rounded-md border p-2"
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
        >
          {[10, 20, 50, 100].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        <span className="text-sm">items per page</span>
      </div>
    </div>
  );
};

export default Pagination;
