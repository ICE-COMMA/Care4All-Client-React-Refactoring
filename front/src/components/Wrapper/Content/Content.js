import React from "react";
import "./Content.css";

const Content = () => {
  const BoxStyle = {
    flex: 6,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "0 8vw",
    paddingTop: "7vh",
  };

  const explainContent = {
    paddingTop: "0.5rem",
    display: "flex",
    justifyContent: "space-around",
  };

  const displayBox = {
    flex: 9,
    borderRadius: "20px",
    border: "2.5px solid #D9D9D9",
    width: "100%",
  };
  const ContentStyle = {
    backgroundImage:
      'url("https://data.seoul.go.kr/resources/img/guide/hotspot/구로디지털단지역.jpg")',
    backgroundSize: "cover", // 이미지를 컨테이너에 맞게 조절합니다.
    backgroundRepeat: "no-repeat", // 이미지 반복을 비활성화합니다.
    height: "90%",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
  };
  const slideStyle = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1rem",
  };
  return (
    <div className="content-box" style={BoxStyle}>
      <div id="content-display" style={displayBox}>
        {/* 여기서 겉면 칠해주는거 */}
        <div style={ContentStyle}></div>
        <div id="explain-content" style={explainContent}>
          <span>구로디지털단지역</span>
          <span>혼잡</span>
        </div>
      </div>
      <div className="slide-box" style={slideStyle}>
        <span className="slide1">○</span>
        <span className="slide2">○</span>
        <span className="slide3">○</span>
        <span className="slide4">○</span>
      </div>
    </div>
  );
};

export default Content;
