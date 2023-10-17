import React, { useEffect, useState } from "react";
import axios from "axios";
import SpeechService from "../SpeechService";

function SafetyMap() {
  const apiKey = process.env.REACT_APP_KAKAO_KEY;
  const [x1, setX1] = useState("");
  const [y1, setY1] = useState("");
  const [mInfos, setMInfos] = useState([]);

  useEffect(() => {
    if (apiKey) {
      const script = document.createElement("script");
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}`;
      script.async = true;
      document.head.appendChild(script);
    }
    const { kakao } = window;

    const fetchDataAndInitializeMap = async () => {
      try {
        const retrievedX1 = sessionStorage.getItem("longitude");
        const retrievedY1 = sessionStorage.getItem("latitude");
        setX1(retrievedX1);
        setY1(retrievedY1);
        console.log(x1, y1);

        const response = await axios.get("/safety_info/data"); // URL을 서버에 맞게 수정 필요
        const data = response.data.ret;
        const tempInfos = data.map((item) => ({
          name: item.name,
          x: item.x,
          y: item.y,
        }));
        setMInfos(tempInfos);
        console.log(mInfos);

        const container = document.getElementById("content-display");
        const options = {
          center: new kakao.maps.LatLng(retrievedY1, retrievedX1),
          level: 3,
        };
        script.onload = () => {
          let kakao = { window };
        };

        const map = new kakao.maps.Map(container, options);

        const positions = tempInfos.map((mInfo) => ({
          content: `<div class="ifw"><h5>${mInfo.name}</h5></div>`,
          latlng: new kakao.maps.LatLng(mInfo.y, mInfo.x),
        }));

        const markers = positions.map((position) => {
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
        console.log(markers);
      } catch (error) {
        console.error("데이터 가져오기 오류:", error);
      }
    };

    kakao.maps.load(() => {
      fetchDataAndInitializeMap();
    });
  }, []);

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
