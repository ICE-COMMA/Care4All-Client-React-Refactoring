import React, { useState, useEffect } from "react";
import "./Header.css";
import axios from "axios"; // axios 라이브러리 import

function Header() {
  const [spw, setSpw] = useState([]); // spw 데이터를 저장할 상태값

  // 컴포넌트가 마운트되면 서버에서 데이터를 가져옴 (useEffect 사용)
  useEffect(() => {
    // AJAX 요청을 통해 서버에서 spw 정보를 가져옴
    axios
      .get("/get_spw_data") // 실제 백엔드 API 엔드포인트에 맞게 수정 필요
      .then((response) => {
        setSpw(response.data);
      })
      .catch((error) => {
        console.error("Error fetching spw data:", error);
      });
  }, []); // 빈 배열을 두번째 인자로 넣어 한 번만 실행되도록 설정

  return (
    <>
      <header className={!spw.length ? "no-data" : ""}>
        {/* 특보 정보 출력 */}
        {spw.length ? (
          <div>
            <span className="spw-action">현재 특보 정보</span>
            <div id="spw-data">
              {spw.map((item, index) => (
                <span key={index}>
                  {item.REG_NM} {item.WRN} {item.LVL}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <span>발생한 특보가 없습니다.</span>
        )}
      </header>
      {/* 나머지 컴포넌트 내용 */}
    </>
  );
}

export default Header;
