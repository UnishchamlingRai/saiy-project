"use client";
import { useState } from "react";
import Modal from "../../UI/Modal";
import SelectLocationOnMaps from "./SelectLocationOnMaps";
import AddNeigborhoodForm from "./AddNeigborhoodForm";

export default function AddNeigborhoods({ cityId }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <button
        className="rounded bg-blue-600 px-4 py-2 text-white"
        onClick={openModal}
      >
        Add Neighborhood
      </button>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className="max-h-[80%]">
          <AddNeigborhoodForm closeModal={closeModal} cityId={cityId} />
        </div>
      </Modal>
    </div>
  );
}
{
  /* <SelectLocationOnMaps
prevStep={prevStep}
setLocation={setLocation}
location={location}
/> */
}
