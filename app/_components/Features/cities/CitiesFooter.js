"use client";
// pages/index.js

import React, { useState } from "react";
import Pagination from "../../UI/Pagination";
// Correct import for default export

const CitiesFooter = ({ totalCities }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalPages = totalCities / 10; // Assuming we have 10 pages for the example

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (size) => {
    setItemsPerPage(size);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Here you would normally render your paginated items */}

      {totalCities >= 10 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      )}
    </div>
  );
};

export default CitiesFooter;
