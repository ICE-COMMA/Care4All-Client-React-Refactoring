import React, { useState } from "react";

function Button(props) {
  const [buttonStyle, setButtonStyle] = useState({
    backgroundColor: "#ffffff", // 밝은 배경색
    color: "#333333", // 글자색
    border: "1px solid #cccccc", // 테두리
    borderRadius: "5px", // 모서리 둥글게
    padding: "10px 20px", // 내부 여백
    fontSize: "16px", // 글자 크기
    cursor: "pointer", // 커서 스타일
    transition: "background-color 0.3s ease-in-out", // 호버 시 부드러운 전환
  });

  // 버튼에 마우스 호버 시 색상 변경
  const buttonHoverStyle = {
    backgroundColor: "#ffffff",
    color: "#333333",
    border: "1px solid #cccccc",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out",
  };

  return (
    <>
      {/* 버튼 */}
      <button
        style={buttonStyle}
        onMouseEnter={() => setButtonStyle(buttonHoverStyle)}
        onMouseLeave={() => setButtonStyle(buttonStyle)}
      >
        {props.children}
      </button>
    </>
  );
}

export default Button;
