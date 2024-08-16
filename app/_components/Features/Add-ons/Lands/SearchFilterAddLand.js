"use client";
import React, { useState } from "react";
import SearchInput from "@/app/_components/UI/SearchInput";
import CustomSelect from "@/app/_components/UI/CustomSelect";
import Button from "@/app/_components/UI/Button";
import Modal from "@/app/_components/UI/Modal";
import AddLandForm from "./AddLandForm";

const SearchFilterAddLand = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="flex items-center justify-between gap-8">
      <SearchInput />
      <div className="flex flex-1 items-center gap-2">
        <div className="flex-1">
          <CustomSelect
            placeholder={"Filter"}
            options={[
              {
                value: "option1",
                label: "Option 1",
              },
            ]}
          />
        </div>
        <div className="flex-1">
          <CustomSelect
            placeholder={"Sort"}
            options={[
              {
                value: "option1",
                label: "Option 1",
              },
            ]}
          />
        </div>
        <div className="flex-1">
          <Button onClick={() => setIsOpenModal(true)}>+ Add Land</Button>
        </div>
        <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
          <AddLandForm onClose={() => setIsOpenModal(false)} />
          {/* <AddApartmentForm onClose={() => setIsOpenModal(false)} /> */}
        </Modal>
      </div>
    </div>
  );
};

export default SearchFilterAddLand;
