"use client";
import DeleteButton from "@/app/_components/UI/DeleteButton";
import Icons from "@/app/_components/UI/Icons";
import Table from "@/app/_components/UI/Table";

import React, { useState } from "react";
import Status from "../../UI/Status";
import FilterSearchCreate from "./FilterSearchCreate";

const CouponsList = ({ coupons }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredCoupons = coupons.filter((coupon) =>
    coupon.coupon_name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <div className="mt-2">
      <div className="mb-4">
        <FilterSearchCreate onSetSearchTerm={setSearchTerm} />
      </div>
      <Table
        tableHeaders={[
          "Coupon Name",
          "Discount Code",
          "Dates",
          "Discount Percentage",
          "Total Redemption",
          "Type of User Targeted",
          "Coupon Status",
          "Action",
        ]}
      >
        {filteredCoupons.map((coupons, index) => {
          const {
            id,
            coupon_name,
            discount_code,
            start_date,
            end_date,
            discount_percentage,
            no_of_users,
            targated_user_type,
            status,
          } = coupons;
          return (
            <tr className="hover:bg-gray-50" key={index}>
              <td className="border-b px-4 py-2">{coupon_name}</td>
              <td className="border-b px-4 py-2">{discount_code}</td>
              <td className="border-b px-4 py-2">{`${start_date} - ${end_date}`}</td>
              <td className="border-b px-4 py-2">{discount_percentage}</td>
              <td className="border-b px-4 py-2">{no_of_users}</td>
              <td className="border-b px-4 py-2">{targated_user_type}</td>
              <td className="border-b px-4 py-2">
                <Status status={status} />
              </td>
              <td className="flex space-x-2 border-b px-4 py-2">
                <Icons iconName="edit" link={`/coupons/update/${id}`} />
                <Icons link={`/coupons/${id}`} iconName="details" />
                {/* <DeleteEndUser id={id} /> */}
              </td>
            </tr>
          );
        })}
      </Table>
    </div>
  );
};

export default CouponsList;
