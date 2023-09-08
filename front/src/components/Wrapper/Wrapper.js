import React from "react";
import LeftNav from "./LeftNav";
import Content from "./Content";
import RightNav from "./RightNav";

const Wrapper = () => {
  const wrapperStyle = {
    height: "80%",
    display: "flex",
    marginLeft: "20vw",
    marginRight: "20vw",
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
