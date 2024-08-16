"use client";
import React, { useState } from "react";
import SearchInput from "@/app/_components/UI/SearchInput";
import CustomSelect from "@/app/_components/UI/CustomSelect";
import Button from "@/app/_components/UI/Button";
import Modal from "@/app/_components/UI/Modal";
import AddNewCarFrom from "./AddNewCarFrom";

const SearchFilterAddCars = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="flex items-center justify-between gap-8">
      <SearchInput />
      <div className="flex items-center gap-2">
        <CustomSelect
          placeholder={"Filter"}
          options={[
            {
              value: "option1",
              label: "Option 1",
            },
          ]}
        />
        <CustomSelect
          placeholder={"Sort"}
          options={[
            {
              value: "option1",
              label: "Option 1",
            },
          ]}
        />
        <Button onClick={() => setIsOpenModal(true)}>+ Add Cars</Button>
        <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
          <AddNewCarFrom onClose={() => setIsOpenModal(false)} />
        </Modal>
      </div>
    </div>
  );
};

export default SearchFilterAddCars;
