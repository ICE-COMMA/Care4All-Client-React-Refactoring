import React from "react";
import LeftNav from "../Components/Function/LeftNav";
import Content from "../Components/Function/Content";
import RightNav from "../Components/Function/RightNav";

const Main = (props) => {
  const wrapperStyle = {
    height: "80%",
    display: "flex",
    padding: "10vh 15vw",
  };
  return (
    <div id="wrapper" style={wrapperStyle}>
      <LeftNav openCustomModal={props.openCustomModal} />
      <Content></Content>
      <RightNav
        openSignModal={props.openSignModal}
        openLocModal={props.openLocModal}
        openLoginModal={props.openLoginModal}
      />
    </div>
  );
};

export default Main;

// 상위에서 설정할 속성에 대해서 props로 넘겨줘야함
