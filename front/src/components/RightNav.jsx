import React from "react";
import "../styles/rightNav.css";
import Box from "./Box";

function RightNav(props) {
  const isUserLoggedIn = false;
  return (
    <>
      <nav id="right-nav" className="right-nav">
        <Box id="user" className="box">
          {isUserLoggedIn ? (
            // 로그인한 경우
            <>
              <div id="greeting" className="menu">
                Hello user!
                {/* {user로 나중에 변경하기} */}
              </div>
              <div id="my-page" className="signup-mypage menu">
                마이페이지
              </div>
              <div id="logout" className="login-logout menu">
                로그아웃
              </div>
            </>
          ) : (
            // 로그인하지 않은 경우
            <>
              <div
                id="sign-up"
                className="signup-mypage menu"
                onClick={props.openSignModal}
              >
                회원가입
              </div>
              <div
                id="login"
                className="login-logout menu"
                onClick={props.openLoginModal}
              >
                로그인
              </div>
            </>
          )}
        </Box>
        <Box id="location" className="box">
          <div className="menu" onClick={props.openLocModal}>
            관심 지역 설정
          </div>
        </Box>
      </nav>
    </>
  );
}

export default RightNav;

// 구조
// App
//  Header
//  Wrapper
//    LeftNav
//    Content
//    RightNav
//    Modal
