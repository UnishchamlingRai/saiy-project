"use client";
import React, { useState } from "react";
import AddPolicesAndTermOfUseForm from "./policesAndTermOfUse/AddPolicesAndTermOfUseForm";
import Button from "../../UI/Button";
import Modal from "../../UI/Modal";
import AddCommunicationToolForm from "./communicationTools/AddCommunicationToolForm";
import AddSupportMessageFrom from "./SupportMessage/AddSupportMessageFrom";

const AddSettingItems = ({ itemName }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpenModal(true)}>Add</Button>
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        {itemName === "policesAndTermOfUse" && (
          <AddPolicesAndTermOfUseForm onClose={() => setIsOpenModal(false)} />
        )}
        {itemName === "communicatoinTools" && (
          <AddCommunicationToolForm onClose={() => setIsOpenModal(false)} />
        )}
        {itemName === "supportMessage" && (
          <AddSupportMessageFrom onClose={() => setIsOpenModal(false)} />
        )}
      </Modal>
    </div>
  );
};

export default AddSettingItems;
