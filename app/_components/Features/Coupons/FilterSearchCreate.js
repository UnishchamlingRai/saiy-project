"use client";
import React from "react";
import SearchInput from "../../UI/SearchInput";
import Button from "../../UI/Button";
import Link from "next/link";

const FilterSearchCreate = ({ onSetSearchTerm }) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <SearchInput onChange={(e) => onSetSearchTerm(e.target.value)} />
      <div className="flex flex-1 items-center justify-center gap-4">
        <div className="flex-1">
          <Button variant="secondary">Filter</Button>
        </div>

        <Link className="linkStyle flex-1 p-2" href="/coupons/create">
          + Create Coupon
        </Link>
      </div>
    </div>
  );
};

export default FilterSearchCreate;
