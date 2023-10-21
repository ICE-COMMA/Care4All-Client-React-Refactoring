import React, { useEffect, useState } from "react";
import LeftNav from "../components/LeftNav";
import RightNav from "../components/RightNav";
import "../styles/ChartComponent.css";
import ChartComponent from "../components/Modal/ChartComponent";
import axios from "axios";

const Main = (props) => {
  const [isLogin, setisLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setisLogin(true);
    } else setisLogin(false);
  }, [localStorage.getItem("username")]);

  useEffect(() => {
    // Axios를 사용하여 데이터 가져오기
    axios
      .get("api/dense_popul_info/real/")
      .then((response) => {
        const real_data = response.data;
        console.log(real_data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // 오류 처리 로직 추가
      });
    axios
      .get("api/dense_popul_info/predict/")
      .then((response) => {
        const predict_data = response.data;
        console.log(predict_data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // 오류 처리 로직 추가
      });
  }, []);

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
