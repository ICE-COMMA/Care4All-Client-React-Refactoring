import React, { useState } from "react";
import "./Content.css";
import SpeechService from "../SpeechService/SpeechService";
import styled from "styled-components";

const InnerContet = styled.div`
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "90%",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
`;

const KakaoMap = () => {
  return (
    <>
      <div className="content-box">
        <div id="content-display">
          <InnerContet>Test</InnerContet>
        </div>
      </div>
      <SpeechService />
    </>
  );
};

export default KakaoMap;
