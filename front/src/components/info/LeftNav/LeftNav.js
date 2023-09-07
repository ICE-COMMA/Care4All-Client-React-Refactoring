import React from "react";

function LeftNav() {
  return (
    <nav id="left-nav">
      <div id="logo">
        <div>
          <a href="/">COMMA</a>
        </div>
      </div>
      <div id="info">
        {/* 메뉴 항목들 */}
        <div>
          <a href="transfer_info">교통정보</a>
        </div>
        <div>
          <a href="/get_demo_today">시위정보</a>
        </div>
        <div>
          <a href="safety_info">안전정보</a>
        </div>
      </div>
      <div id="contact">
        {/* 커스터마이징 및 제보하기 버튼 */}
        <div id="custom-btn">
          <a>커스터마이징</a>
        </div>
        <div id="report-btn">
          <a>제보하기</a>
        </div>
      </div>
    </nav>
  );
}

export default LeftNav;
