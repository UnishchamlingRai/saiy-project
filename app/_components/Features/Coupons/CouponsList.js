import DeleteButton from "@/app/_components/UI/DeleteButton";
import Icons from "@/app/_components/UI/Icons";
import Table from "@/app/_components/UI/Table";

import React from "react";
import Status from "../../UI/Status";

const CouponsList = async () => {
  const coupons = [
    {
      id: 1,
      coupon_name: "test",
      coupon_discount_code: "test",
      coupon_dates: "test",
      coupon_discount_percentage: "test",
      coupon_total_redemption: "test",
      coupon_type_of_user_targeted: "test",
      coupon_status: "active",
    },
  ];

  // console.log(endUsers);
  return (
    <div className="mt-2">
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
        {coupons.map((coupons, index) => {
          const {
            id,
            coupon_name,
            coupon_discount_code,
            coupon_dates,
            coupon_discount_percentage,
            coupon_total_redemption,
            coupon_type_of_user_targeted,
            coupon_status,
          } = coupons;
          return (
            <tr className="hover:bg-gray-50" key={index}>
              <td className="border-b px-4 py-2">{coupon_name}</td>
              <td className="border-b px-4 py-2">{coupon_discount_code}</td>
              <td className="border-b px-4 py-2">{coupon_dates}</td>
              <td className="border-b px-4 py-2">
                {coupon_discount_percentage}
              </td>
              <td className="border-b px-4 py-2">{coupon_total_redemption}</td>
              <td className="border-b px-4 py-2">
                {coupon_type_of_user_targeted}
              </td>
              <td className="border-b px-4 py-2">
                <Status status={coupon_status} />
              </td>
              <td className="flex space-x-2 border-b px-4 py-2">
                <Icons link="/member/endUser/update/1" iconName="edit" />
                <Icons link={`/member/enduser/${id}`} iconName="details" />
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
