import React from "react";
import "./LeftNav.css";
import Box from "../Box";

function LeftNav() {
  const menuStyle = {
    padding: "0.5rem",
  };

  return (
    <nav id="left-nav">
      <Box id="home">
        <a href="/">Care4All</a>
      </Box>
      <Box id="info">
        {/* 메뉴 항목들 */}
        <div style={menuStyle}>교통정보</div>
        <div style={menuStyle}>시위정보</div>
        <div style={menuStyle}>안전정보</div>
      </Box>
      <Box id="contact">
        <div style={menuStyle}>커스터마이징</div>
        <div style={menuStyle}>제보하기</div>
      </Box>
    </nav>
  );
}

export default LeftNav;
