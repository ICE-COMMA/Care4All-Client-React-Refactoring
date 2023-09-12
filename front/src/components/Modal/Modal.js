import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-container" id="signup-container">
      <div className="modal-content" id="signup-content">
        {children}
      </div>
    </div>
  );
};

export default Modal;
