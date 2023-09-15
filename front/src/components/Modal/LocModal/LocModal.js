import React from "react";
import Modal from "../Modal";

const LocModal = ({ isOpen, closeModal }) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div id="gpsLocation" className="location-content">
        현재 위치로 설정
      </div>
      <div id="map-location" className="location-content">
        지도를 통해 설정
      </div>
      <div onClick={closeModal}>이전</div>
    </Modal>
  );
};

export default LocModal;
