import React, { useEffect, useState } from "react";
import axios from "axios";
import LeftNav from "../components/LeftNav";
import RightNav from "../components/RightNav";

const { kakao } = window;

const Safety = (props) => {
  const [mInfos, setMInfos] = useState([]);

  useEffect(() => {
    // Axios를 사용하여 데이터 가져오기
    axios
      .get("api/safety_info/data/")
      .then((response) => {
        const data = response.data.ret;

        // 데이터를 mInfos 상태(State)에 저장
        setMInfos(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // 오류 처리 로직 추가
      });
  }, []);

  useEffect(() => {
    // mInfos 상태가 업데이트될 때 실행
    // 마커 및 인포윈도우를 표시하는 로직 추가
    const map = new kakao.maps.Map(document.getElementById("content-display"), {
      center: new kakao.maps.LatLng(
        localStorage.getItem("latitude"),
        localStorage.getItem("longitude")
      ), // 초기 지도 중심 좌표 설정 (서울)
      level: 3,
    });

    mInfos.forEach((mInfo) => {
      const { name, x, y } = mInfo;
      // 마커 생성
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(y, x),
        clickable: true,
      });
      marker.setMap(map);
      // 인포윈도우 생성
      const infowindow = new kakao.maps.InfoWindow({
        content: `<div id="iw_con_info"><h5>${name}</h5></div>`,
        removable: true,
      });

      // 마커 클릭 이벤트 처리
      kakao.maps.event.addListener(marker, "click", () => {
        infowindow.open(map, marker);
      });
    });
  }, [mInfos]);

  const wrapperStyle = {
    height: "80%",
    display: "flex",
    padding: "10vh 15vw",
  };
  return (
    <div id="wrapper" style={wrapperStyle}>
      <LeftNav openCustomModal={props.openCustomModal} />
      <div className="content-box">
        <div id="content-display"></div>
      </div>
      <RightNav
        openSignModal={props.openSignModal}
        openLocModal={props.openLocModal}
        openLoginModal={props.openLoginModal}
      />
    </div>
  );
};

export default Safety;

// 상위에서 설정할 속성에 대해서 props로 넘겨줘야함
