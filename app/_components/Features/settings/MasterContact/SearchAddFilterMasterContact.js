"use client";
import Button from "@/app/_components/UI/Button";
import CustomSelect from "@/app/_components/UI/CustomSelect";
import React, { useState } from "react";
import AddMasterContactForm from "./AddMasterContactForm";
import Modal from "@/app/_components/UI/Modal";

const SearchAddFilterMasterContact = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
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
        <div>
          <Button variant="primary" onClick={() => setIsOpenModal(true)}>
            Add Master Contact
          </Button>
          <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
            <AddMasterContactForm onClose={() => setIsOpenModal(false)} />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default SearchAddFilterMasterContact;
