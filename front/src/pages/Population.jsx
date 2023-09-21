import React, { useEffect, useState } from "react";
// import axios from "axios";
import LeftNav from "../components/LeftNav";
import RightNav from "../components/RightNav";
import Content from "../components/Content";

const Main = (props) => {
  const [isLogin, setisLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setisLogin(true);
    } else setisLogin(false);
  }, [localStorage.getItem("username")]);

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
        isLogin={isLogin}
      />
    </div>
  );
};

export default Main;

// 상위에서 설정할 속성에 대해서 props로 넘겨줘야함
