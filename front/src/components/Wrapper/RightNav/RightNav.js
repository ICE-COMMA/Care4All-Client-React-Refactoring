import React from "react";
import "./RightNav.css";
import Box from "../Box";

function RightNav({ user }) {
  const RNavStyle = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    // padding: "0 5vw",
  };

  const menuStyle = {
    padding: "0.5rem",
  };
  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
    border: "2.5px solid #D9D9D9",
    padding: "0.5rem",
    marginTop: "1.5rem",
    marginBottom: "2rem",
  };

  return (
    <nav id="right-nav" style={RNavStyle}>
      <Box id="user" style={boxStyle}>
        {user ? (
          // 로그인한 경우
          <>
            <div id="greeting" style={menuStyle}>
              Hello {user}!
            </div>
            <div id="my-page" className="signup-mypage" style={menuStyle}>
              마이페이지
            </div>
            <div id="logout" className="login-logout" style={menuStyle}>
              로그아웃
            </div>
          </>
        ) : (
          // 로그인하지 않은 경우
          <>
            <div id="sign-up" className="signup-mypage" style={menuStyle}>
              회원가입
            </div>
            <div id="login" className="login-logout" style={menuStyle}>
              로그인
            </div>
          </>
        )}
      </Box>
      <Box id="location" style={boxStyle}>
        <div style={menuStyle}>관심 지역 설정</div>
      </Box>
    </nav>
  );
}

export default RightNav;
