import React from "react";
import Modal from "../Modal";

const LocModal = ({ isOpen, closeModal }) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      Test
      <div onClick={closeModal}>이전</div>
    </Modal>
  );
};

export default LocModal;
