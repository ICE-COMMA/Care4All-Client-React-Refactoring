import React, { useEffect } from "react";
import "../Kakao.css";
import SpeechService from "../../SpeechService/SpeechService";

const { kakao } = window;

const KakaoMap = () => {
  useEffect(() => {
    const continer = document.getElementById("content-display");
    const options = {
      center: new kakao.maps.LatLng(
        localStorage.getItem("latitude"),
        localStorage.getItem("longitude")
      ),
      level: 3,
    };
    const map = new kakao.maps.Map(continer, options);
    console.log(map);
  }, []);

  return (
    <>
      <div className="content-box">
        <div id="content-display"></div>
        <SpeechService />
      </div>
    </>
  );
};

export default KakaoMap;
