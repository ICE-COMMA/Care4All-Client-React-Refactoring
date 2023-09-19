import React, { useEffect, useState } from "react";
import axios from "axios";
import SpeechService from "../SpeechService";

const { kakao } = window;

function SafetyMap() {
  let tempInfos = [];
  const [x1, setX1] = useState("");
  const [y1, setY1] = useState("");
  const [mInfos, setMInfos] = useState([]);
  const [mapping, setMap] = useState(null);

  useEffect(() => {
    const retrievedX1 = localStorage.getItem("longitude");
    const retrievedY1 = localStorage.getItem("latitude");
    setX1(retrievedX1);
    setY1(retrievedY1);

    // 기본 지도 설정
    const container = document.getElementById("content-display"); // 지도를 담을 영역의 DOM 레퍼런스
    const options = {
      center: new kakao.maps.LatLng(y1, x1), // 지도의 중심좌표.
      level: 3, // 지도의 레벨(확대, 축소 정도)
    };

    const map = new kakao.maps.Map(container, options);

    // 데이터를 가져와 맵을 초기화하는 함수 정의
    const fetchDataAndInitializeMap = async () => {
      try {
        const response = await axios.get("/safety_info/data"); // URL을 서버에 맞게 수정 필요
        const data = response.data.ret;
        tempInfos = data.map((item) => ({
          name: item.name,
          x: item.x,
          y: item.y,
        }));
        setMInfos(tempInfos);

        const positions = mInfos.map((mInfo) => ({
          content: `<div class="ifw"><h5>${mInfo.name}</h5></div>`,
          latlng: new kakao.maps.LatLng(mInfo.y, mInfo.x),
        }));

        let markers = positions.map((position) => {
          const marker = new kakao.maps.Marker({
            map,
            position: position.latlng,
            clickable: true,
          });

          const iwContent = `<div id="iw_con_info"><h5>${position.content}</h5></div>`;
          const iwRemoveable = true;

          const infowindow = new kakao.maps.InfoWindow({
            content: iwContent,
            removable: iwRemoveable,
          });

          kakao.maps.event.addListener(marker, "click", () => {
            infowindow.open(map, marker);
          });

          return marker;
        });
      } catch (error) {
        console.error("데이터 가져오기 오류:", error);
        // const options = {
        //   center: new kakao.maps.LatLng(y1, x1),
        //   level: 3,
        // };
        // map.setOptions(options);
      }
    };

    // 카카오 맵 라이브러리를 로드하고 맵을 초기화
    kakao.maps.load(() => {
      const options = {
        center: new kakao.maps.LatLng(y1, x1), // 초기 좌표를 제공하거나 필요한 대로 조정하세요.
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);
      setMap(map);
      fetchDataAndInitializeMap();
    });
  }, [x1, y1]);

  return (
    <div className="content-box">
      <div
        id="content-display"
        style={{ width: "100%", height: "400px" }}
      ></div>
      <SpeechService />
    </div>
  );
}

export default SafetyMap;
