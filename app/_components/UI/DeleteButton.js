"use client";
import React, { useState } from "react";
import Icons from "./Icons";
import Modal from "./Modal";
import DeleteItemModal from "./DeleteItemModal";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const DeleteButton = ({ id, deleteApi, withPassword = true }) => {
  const [isOpenModal, setIsOpenModal] = useState();
  const router = useRouter();
  async function onConfirmDelete(password) {
    const res = withPassword
      ? await deleteApi(id, password)
      : await deleteApi(id);
    // console.log("response:", res);

    if (res?.status === 200) {
      toast.success(res.message);
      router.refresh();
      setIsOpenModal(false);
    } else {
      toast.error(
        res.message ||
          "Failed to delete This item. Please try again with correct password.",
      );
    }
  }
  return (
    <>
      <Icons iconName={"delete"} onClick={() => setIsOpenModal(true)} />
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <DeleteItemModal
          withPassword={withPassword}
          onClick={() => setIsOpenModal(false)}
          onConfirmDelete={onConfirmDelete}
        />
      </Modal>
    </>
  );
};

export default DeleteButton;
