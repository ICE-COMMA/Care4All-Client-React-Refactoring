import React, { useEffect, useState } from "react";
import LeftNav from "../components/LeftNav";
import RightNav from "../components/RightNav";
import "../styles/ChartComponent.css";
import ChartComponent from "../components/Modal/ChartComponent";

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
    width: "100%",
  };

  return (
    <div id="wrapper" style={wrapperStyle}>
      <LeftNav openCustomModal={props.openCustomModal} />
      <div className="content-box">
        <ChartComponent></ChartComponent>
      </div>
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
