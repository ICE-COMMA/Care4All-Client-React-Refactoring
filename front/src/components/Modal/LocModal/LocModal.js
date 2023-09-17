import React from "react";
import Modal from "../Modal";

const LocModal = ({ isOpen, closeModal }) => {
  let latitude, longitude;
  const handleGps = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // 위치 정보가 성공적으로 얻어졌을 때
          latitude = position.coords.latitude;
          longitude = position.coords.longitude;
          alert(`위치 설정을 ${latitude}, ${longitude}로 완료했습니다.`);
          localStorage.setItem("latitude", latitude);
          localStorage.setItem("longitude", longitude);
          closeModal();
        },
        (error) => {
          // 위치 정보를 가져오는 중 에러가 발생했을 때
          console.log(error);
        }
      );
    } else {
      // 브라우저가 Geolocation API를 지원하지 않을 때
      console.log("test");
    }
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div id="gpsLocation" className="location-content" onClick={handleGps}>
        현재 위치로 설정
      </div>
      <div id="map-location" className="location-content">
        지도를 통해 설정
      </div>
      <div className="form-btn">
        <div onClick={closeModal}>이전</div>
      </div>
    </Modal>
  );
};

export default LocModal;
