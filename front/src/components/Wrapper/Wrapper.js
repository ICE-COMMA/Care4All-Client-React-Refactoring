import React from "react";
import LeftNav from "./LeftNav";
import Content from "./Content";
import RightNav from "./RightNav";

const Wrapper = ({ openModal }) => {
  const wrapperStyle = {
    height: "80%",
    display: "flex",
    padding: "10vh 15vw",
  };
  return (
    <div id="wrapper" style={wrapperStyle}>
      <LeftNav></LeftNav>
      <Content></Content>
      <RightNav openModal={openModal} />
    </div>
  );
};

export default Wrapper;

// 상위에서 설정할 속성에 대해서 props로 넘겨줘야함
