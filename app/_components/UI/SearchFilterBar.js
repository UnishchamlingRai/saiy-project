// components/SearchFilterBar.js

import React from "react";

import Button from "./Button";
import SearchInput from "./SearchInput";
import Link from "next/link";

const SearchFilterBar = ({ onSearch, onFilter, onCreate }) => {
  return (
    <div className="flex flex-col justify-between gap-2 rounded-md bg-gray-100 sm:flex-row">
      <SearchInput onChange={onSearch} />
      <div className="flex items-center space-x-2">
        <div className="rounded-md border border-primary-500">
          <Button onClick={onFilter} variant="secondary">
            <span className="text-primary-500"> Filter</span>
          </Button>
        </div>
        <Button>
          <Link href="/cities/createcity">+ Create City</Link>
        </Button>
      </div>
    </div>
  );
};

export default SearchFilterBar;
