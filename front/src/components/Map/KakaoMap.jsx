import React, { useEffect } from "react";
import "../../styles/kakao.css";
import SpeechService from "../SpeechService";

const { kakao } = window;

const KakaoMap = () => {
  useEffect(() => {
    const continer = document.getElementById("content-display");
    const options = {
      center: new kakao.maps.LatLng(
        sessionStorage.getItem("latitude"),
        sessionStorage.getItem("longitude")
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
