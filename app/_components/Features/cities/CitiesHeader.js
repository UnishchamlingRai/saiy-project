import React from "react";
import CustomSelect from "../../UI/CustomSelect";
import DashboardHeader from "../dashboard/DashboardHeader";
import DropdownMenu from "../../UI/DropDownMenu";
import Button from "../../UI/Button";
import { FaRegEye } from "react-icons/fa";
import Link from "next/link";
import { MdOutlineEdit } from "react-icons/md";
const CitiesHeader = () => {
  return (
    <div className="flex items-center">
      <DashboardHeader title={"City List"} />
      <div>
        <DropdownMenu>
          <Button variant="secondary">
            <div className="flex items-center gap-2">
              <FaRegEye className="text-primary-500" />{" "}
              <span className="text-sm">
                <Link href="/cities">See All City</Link>
              </span>
            </div>
          </Button>
          <Button variant="secondary">
            <div className="flex items-center gap-2">
              <MdOutlineEdit className="text-warning-500" />{" "}
              <span className="text-sm">Edit City</span>
            </div>
          </Button>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default CitiesHeader;
