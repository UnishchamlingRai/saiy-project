"use client";
import React, { useState } from "react";
import Icons from "../../UI/Icons";
import Modal from "../../UI/Modal";
import RechargeCardDetail from "./RechargeCardDetail";

const ActionRechargeCard = () => {
  const [isOpenDetailModal, setIsOpenDetailModal] = useState(false);
  return (
    <td className="flex space-x-2 border-b px-4 py-2">
      <Icons iconName="edit" />
      <Icons iconName="details" onClick={() => setIsOpenDetailModal(true)} />
      <Modal
        isOpen={isOpenDetailModal}
        onClose={() => setIsOpenDetailModal(false)}
      >
        <RechargeCardDetail onClose={() => setIsOpenDetailModal(false)} />
      </Modal>
      {/* <DeleteEndUser id={id} /> */}
    </td>
  );
};

export default ActionRechargeCard;
