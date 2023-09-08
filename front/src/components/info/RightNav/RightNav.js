import React from "react";
import "./RightNav.css";

function RightNav({ user }) {
  return (
    <nav id="right-nav">
      <div id="user">
        {user ? (
          // 로그인한 경우
          <>
            <div id="greeting">
              <a href="#">Hello {user}!</a>
            </div>
            <div id="my-page" className="signup-mypage">
              <a href={`./my_page/${user}`}>마이페이지</a>
            </div>
            <div id="logout" className="login-logout">
              <a href="./logout">로그아웃</a>
            </div>
          </>
        ) : (
          // 로그인하지 않은 경우
          <>
            <div id="sign-up" className="signup-mypage">
              <a>회원가입</a>
            </div>
            <div id="login" className="login-logout">
              <a>로그인</a>
            </div>
          </>
        )}
      </div>
      <div id="location">
        <div>
          <a>관심지역 설정</a>
        </div>
      </div>
    </nav>
  );
}

export default RightNav;
