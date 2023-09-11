import React from "react";
import LeftNav from "./LeftNav";
import Content from "./Content";
import RightNav from "./RightNav";

const Wrapper = () => {
  const wrapperStyle = {
    height: "80%",
    display: "flex",
    padding: "10vh",
  };

  const rightStyle = {
    flex: 2,
  };
  const contentStyle = {
    flex: 6,
  };
  return (
    <div id="wrapper" style={wrapperStyle}>
      <LeftNav></LeftNav>
      <Content style={contentStyle}></Content>
      <RightNav style={rightStyle}></RightNav>
    </div>
  );
};

export default Wrapper;

// 상위에서 설정할 속성에 대해서 props로 넘겨줘야함
