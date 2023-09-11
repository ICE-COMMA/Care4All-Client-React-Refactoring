import React from "react";
import "./LeftNav.css";
import Box from "../Box";

function LeftNav() {
  const menuStyle = {
    padding: "0.8rem 0.5rem", // 상하 여백을 늘립니다.
  };
  const LNavStyle = {
    marginLeft: "12.5vw",
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    flexDirection: "column",
  };
  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
    border: "2.5px solid #D9D9D9",
    padding: "0.5rem",
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
  };

  return (
    <nav id="left-nav" style={LNavStyle}>
      <Box id="home" style={boxStyle}>
        <a href="/">Care4All</a>
      </Box>
      <Box id="info" style={boxStyle}>
        {/* 메뉴 항목들 */}
        <div style={menuStyle}>교통정보</div>
        <div style={menuStyle}>시위정보</div>
        <div style={menuStyle}>안전정보</div>
      </Box>
      <Box id="contact" style={boxStyle}>
        <div style={menuStyle}>커스터마이징</div>
        <div style={menuStyle}>제보하기</div>
      </Box>
    </nav>
  );
}

export default LeftNav;
