"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import Modal from "../../UI/Modal";
import DeleteItem from "../../UI/DeleteItem";
import Icons from "../../UI/Icons";
import { deleteCity } from "@/app/services/cityService";

const CitiesActions = ({ cityId }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  async function onConfirmDelete(pass) {
    console.log("cityId:", cityId);
    console.log("pass:", pass);
    const res = await deleteCity(cityId, pass);
    console.log("REs:", res);
  }
  return (
    <div className="flex space-x-2">
      <Icons link={`/cities/${cityId}`} iconName={"details"} />
      <Icons link={`/cities/updateCity/${cityId}`} iconName={"edit"} />
      <Icons onClick={() => setIsOpenModal(true)} iconName={"delete"} />

      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <DeleteItem
          onClick={() => setIsOpenModal(false)}
          onConfirmDelete={onConfirmDelete}
        />
      </Modal>
    </div>
  );
};

export default CitiesActions;
