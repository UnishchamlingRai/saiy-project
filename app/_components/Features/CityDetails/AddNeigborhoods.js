"use client";
import { useState } from "react";
import Modal from "../../UI/Modal";
import SelectLocationOnMaps from "./SelectLocationOnMaps";
import AddNeigborhoodForm from "./AddNeigborhoodForm";

export default function AddNeigborhoods() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState([24.470901, 39.612236]);
  const openModal = () => {
    setStep(1);
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  const nextStep = () => setStep(2);
  const prevStep = () => setStep(1);

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <button
        className="rounded bg-blue-600 px-4 py-2 text-white"
        onClick={openModal}
      >
        Add Neighborhood
      </button>

      <Modal isOpen={isOpen} onClose={closeModal}>
        {step === 1 ? (
          <div className="max-h-[80%]">
            <AddNeigborhoodForm nextStep={nextStep} closeModal={closeModal} />
          </div>
        ) : (
          <SelectLocationOnMaps
            prevStep={prevStep}
            setLocation={setLocation}
            location={location}
          />
        )}
      </Modal>
    </div>
  );
}
