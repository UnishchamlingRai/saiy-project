"use client";
import React, { useState } from "react";

import SearchInput from "@/app/_components/UI/SearchInput";
import Button from "@/app/_components/UI/Button";
import Modal from "../../UI/Modal";
import CreateAdvertisementForm from "./CreateAdvertisementForm";
const SearchCreateFilter = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex-1">
        <SearchInput />
      </div>
      <div className="flex flex-1 items-center justify-center gap-2">
        <div className="flex-1">
          <Button variant="secondary">Filter</Button>
        </div>
        <div className="flex-1">
          <Button onClick={() => setIsOpenModal(true)} variant="primary">
            + Create Advertisement
          </Button>
          <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
            <CreateAdvertisementForm onClose={() => setIsOpenModal(false)} />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default SearchCreateFilter;
