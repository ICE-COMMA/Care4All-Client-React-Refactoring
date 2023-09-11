import React from "react";
import "./Content.css";
import Box from "../Box";

const Content = () => {
  const BoxStyle = {
    flex: 7,
  };
  const ContentStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
      'url("https://data.seoul.go.kr/resources/img/guide/hotspot/구로디지털단지역.jpg")',
    backgroundSize: "cover", // 이미지를 컨테이너에 맞게 조절합니다.
    backgroundRepeat: "no-repeat", // 이미지 반복을 비활성화합니다.
    // backgroundPosition: "center", // 이미지를 가운데 정렬합니다.
    width: "80%",
    height: "80%",
  };
  return (
    <>
      <Box id="content-wrapper" style={BoxStyle}>
        <div style={ContentStyle}></div>
      </Box>
    </>
  );
};

export default Content;
