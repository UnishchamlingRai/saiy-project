"use client";
import React, { useState } from "react";
import { FaQuestion } from "react-icons/fa";
import Button from "./Button";
import Modal from "./Modal";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

const DeleteItemModal = ({ onClick, onConfirmDelete, withPassword }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  async function handelYesDelete() {
    if (withPassword) {
      setIsOpenModal(true);
    } else {
      setIsLoading(true);
      await onConfirmDelete();
      setIsLoading(false);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="rounded-full bg-warning-300 p-8">
        <FaQuestion />
      </div>
      <h1>Are You Sure ?</h1>
      <p>Are you sure you want to delete this item?</p>
      <div className="flex items-center justify-center gap-2">
        <div className="rounded-lg border border-primary-500">
          <Button variant="secondary" onClick={onClick}>
            Cancel
          </Button>
        </div>
        <div>
          <Button
            disabled={isLoading}
            variant="danger"
            onClick={handelYesDelete}
          >
            {isLoading ? "Deleting..." : "Yes, Delete"}
          </Button>
        </div>
        <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
          <ConfirmDeleteModal
            onClick={onClick}
            onConfirmDelete={onConfirmDelete}
          />
        </Modal>
      </div>
    </div>
  );
};

export default DeleteItemModal;
