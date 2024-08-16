import React from "react";
import { MdOutlineClose } from "react-icons/md";
import Row from "../../UI/Row";
const RechargeCardDetail = ({ onClose }) => {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between border-b border-gray-400 px-2 py-4">
        <h1 className="text-xl text-primary-500">Detail Recharge Card</h1>{" "}
        <button
          onClick={onClose}
          className="cursor-pointer rounded-full bg-primary-50 p-2"
        >
          <MdOutlineClose size={20} />
        </button>
      </div>
      <div>
        <Row title={"Moderator Name"} value={"Nurul Fauziyah"} />
        <Row
          title={"Role"}
          value={
            <h1 className="rounded-lg bg-success-50 p-2 text-success-500">
              Moderator
            </h1>
          }
        />
        <Row title={"Recharge type"} value={"Card Code"} />
        <Row title={"Card Code Number"} value={"UXDA-UYUO-HJAH"} />
        <Row title={"Amount"} value={"$163.94"} />
      </div>
    </div>
  );
};

export default RechargeCardDetail;
