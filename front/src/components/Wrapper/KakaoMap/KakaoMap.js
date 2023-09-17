import React, { useEffect } from "react";
import "./Kakao.css";
import SpeechService from "../SpeechService/SpeechService";
// import styled from "styled-components";

const { kakao } = window;

// const InnerContet = styled.div`
//               backgroundSize: "cover",
//               backgroundRepeat: "no-repeat",
//               height: "90%",
//               borderTopLeftRadius: "20px",
//               borderTopRightRadius: "20px",
// `;

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
