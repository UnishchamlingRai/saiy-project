"use client";
import Icons from "@/app/_components/UI/Icons";
import Modal from "@/app/_components/UI/Modal";
import React, { useState } from "react";
import AddNewCarForm from "./AddNewCarFrom";

const EditCar = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
      <div onClick={() => setIsOpenModal(true)}>
        <Icons iconName={"edit"} />
      </div>
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <AddNewCarForm onClose={() => setIsOpenModal(false)} />
      </Modal>
    </div>
  );
};

export default EditCar;
