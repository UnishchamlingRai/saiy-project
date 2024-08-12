"use client";
import React, { useState } from "react";
import Icons from "./Icons";
import Modal from "./Modal";
import DeleteItemModal from "./DeleteItemModal";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const DeleteButton = ({ id, deleteApi }) => {
  const [isOpenModal, setIsOpenModal] = useState();
  const router = useRouter();
  async function onConfirmDelete(password) {
    const res = await deleteApi(id, password);
    console.log("REs:", res);

    if (res.message === "A category is removed.") {
      toast.success(res.message);
      router.refresh();
    } else {
      toast.error(
        "Failed to delete category. Please try again with correct password.",
      );
    }
  }
  return (
    <>
      <Icons iconName={"delete"} onClick={() => setIsOpenModal(true)} />
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <DeleteItemModal
          onClick={() => setIsOpenModal(false)}
          onConfirmDelete={onConfirmDelete}
        />
      </Modal>
    </>
  );
};

export default DeleteButton;
