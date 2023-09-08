// Header.js
import React from "react";
import "./Header.css";

const Header = ({ spw }) => {
  return (
    <header className={!spw ? "no-data" : ""}>
      {spw ? (
        <>
          <span className="spw-action">현재 특보 정보</span>
          <div id="spw-data">
            {spw.map((item, index) => (
              <span key={index}>
                {item.REG_NM} {item.WRN} {item.LVL}
              </span>
            ))}
          </div>
        </>
      ) : (
        <span>발생한 특보가 없습니다.</span>
      )}
    </header>
  );
};

export default Header;
