import React, { useRef, useState } from "react";
const LocModal = ({ isOpen, closeModal }) => {
  const modalCanvas = useRef(null);
  const modalRef = useRef(null);
  const [ModalStatus, setModalStatus] = useState(false);
  const [lat, setLat] = useState(37.5582843);
  const [lon, setLon] = useState(126.9978758);
  if (!isOpen) return null;
  const { kakao } = window;
  // 초기 디폴트 위치 정보 임의 설정, 안해도 되는데, 편의상함
  const handleGps = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // 위치 정보가 성공적으로 얻어졌을 때
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
          alert(`위치 설정을 ${lat}, ${lon}로 완료했습니다.`);
          sessionStorage.setItem("latitude", lat);
          sessionStorage.setItem("longitude", lon);
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

  const handleMap = () => {
    setModalStatus(true);
    const continer = modalCanvas.current;
    let mapOption = {
      center: new kakao.maps.LatLng(lat, lon), // 지도의 중심좌표
      level: 4, // 지도의 확대 레벨
    };

    let map = new kakao.maps.Map(continer, mapOption); // 지도를 생성합니다

    // 마커가 표시될 위치입니다
    let markerPosition = new kakao.maps.LatLng(lat, lon);

    // 마커를 생성합니다
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
    // marker.setMap(null);

    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      // 클릭한 위도, 경도 정보를 가져옵니다
      let locationInfo = mouseEvent.latLng;

      // 마커 위치를 클릭한 위치로 옮깁니다
      marker.setPosition(locationInfo);
      setLat(locationInfo.Ma);
      setLon(locationInfo.La);
      // console.log(map.getCenter());
      alert(`지역 설정을 ${lat}, ${lon}로 완료했습니다`);
      sessionStorage.setItem("latitude", lat);
      sessionStorage.setItem("longitude", lon);
      setTimeout(() => {
        setModalStatus(false);
        closeModal();
      }, 1200);
    });
  };

  return (
    <div
      className="modal-container"
      ref={modalRef}
      onClick={(e) => {
        if (e.target === modalRef.current) {
          setModalStatus(false);
          closeModal();
        }
      }}
    >
      <div className="modal-content" ref={modalCanvas}>
        {!ModalStatus && (
          <div
            id="gpsLocation"
            className="location-content"
            onClick={handleGps}
          >
            현재 위치로 설정
          </div>
        )}

        {!ModalStatus && (
          <div
            id="map-location"
            className="location-content"
            onClick={handleMap}
          >
            지도를 통해 설정
          </div>
        )}

        {!ModalStatus && (
          <div
            onClick={() => {
              setModalStatus(false);
              closeModal();
            }}
          >
            이전
          </div>
        )}
      </div>
    </div>
  );
};

export default LocModal;
