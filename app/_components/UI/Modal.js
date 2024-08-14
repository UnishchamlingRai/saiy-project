"use client";
import { useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ease-out">
      <div className="absolute inset-0" onClick={onClose}></div>
      <div className="relative z-20 max-h-screen w-2/4 scale-95 transform animate-fade-in overflow-y-auto rounded-lg bg-white p-6 opacity-0 shadow-lg transition-transform duration-300 ease-out">
        {children}
      </div>
    </div>
  );
};

export default Modal;
