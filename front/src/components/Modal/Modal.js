import React, { useRef } from "react";
import "./Modal.css";

const Modal = ({ isOpen, closeModal, children }) => {
  const modalRef = useRef(null);
  if (!isOpen) return null;
  return (
    <div
      className="modal-container"
      id="signup-container"
      ref={modalRef}
      onClick={(e) => {
        if (e.target === modalRef.current) {
          closeModal();
        }
      }}
    >
      <div className="modal-content" id="signup-content">
        {children}
      </div>
    </div>
  );
};

export default Modal;
