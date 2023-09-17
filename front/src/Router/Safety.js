import React from "react";
import LeftNav from "../Components/Function/LeftNav";
import RightNav from "../Components/Function/RightNav";
import SafetyMap from "../Components/Function/Map/SafetyMap/SafetyMap";

const Safety = (props) => {
  const wrapperStyle = {
    height: "80%",
    display: "flex",
    padding: "10vh 15vw",
  };
  return (
    <div id="wrapper" style={wrapperStyle}>
      <LeftNav openCustomModal={props.openCustomModal} />
      <SafetyMap></SafetyMap>
      <RightNav
        openSignModal={props.openSignModal}
        openLocModal={props.openLocModal}
        openLoginModal={props.openLoginModal}
      />
    </div>
  );
};

export default Safety;

// 상위에서 설정할 속성에 대해서 props로 넘겨줘야함
