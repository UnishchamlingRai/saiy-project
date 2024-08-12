"use client";
import React, { useState } from "react";
import SearchInput from "../../UI/SearchInput";
import Button from "../../UI/Button";
import Modal from "../../UI/Modal";
import AddNewCouponForm from "./AddNewCouponForm";

const FilterSearchCreate = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="flex items-center gap-4">
      <SearchInput />
      <div className="flex flex-1 items-center justify-center gap-4">
        <div className="flex-1">
          <Button variant="secondary">Filter</Button>
        </div>
        <div className="flex-1">
          <Button variant="primary" onClick={() => setIsOpenModal(true)}>
            + Create Coupon
          </Button>
          <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
            <AddNewCouponForm onClose={() => setIsOpenModal(false)} />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default FilterSearchCreate;
