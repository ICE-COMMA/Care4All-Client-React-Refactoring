import React, { useEffect, useState } from "react";
import axios from "axios";
import LeftNav from "../components/LeftNav";
import RightNav from "../components/RightNav";
import "../styles/table.css";
const DemoInfo = (props) => {
  const [info, setInfo] = useState([]);
  function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  const csrftoken = getCookie("csrftoken");
  useEffect(() => {
    axios
      .get(`/api/get_demo_today/`, {
        headers: {
          "X-CSRFToken": csrftoken,
        },
      })
      .then((response) => {
        if (response) {
          setInfo(response.data.demo);
        } else {
          console.log("error");
        }
      })
      .catch((error) => {
        console.error("사용자 이름 가져오기 오류:", error);
      });

    const audio = new Audio(
      "https://papago.naver.com/apis/tts/c_lt_kyuri_2.2.19.0.3.25_343-nvoice_kyuri_2.2.19.0.3.25_953e4f76f045befa0d659afe6b0d0a6e-1695346383929"
    );

    audio.play();
  }, []);
  const wrapperStyle = {
    height: "80%",
    display: "flex",
    padding: "10vh 15vw",
  };
  // const boxStyle = {
  //   display: "flex",
  //   flexDirection: "column",
  //   padding: "0.5rem",
  //   marginLeft: "1.5rem",
  //   marginRight: "1.5rem",
  //   borderRadius: "5%",
  //   border: "2.5px solid #d9d9d9",
  // };
  return (
    <div id="wrapper" style={wrapperStyle}>
      <LeftNav openCustomModal={props.openCustomModal} />
      <div className="content-box">
        <h2>오늘의 시위정보</h2>
        <table>
          <thead>
            <tr>
              <th>지역</th>
              <th>시간</th>
              <th>인원</th>
            </tr>
          </thead>
          <tbody>
            {info.map((item, index) => (
              <tr id={index}>
                <td>{item.location}</td>
                <td>{item.time}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <RightNav
        openSignModal={props.openSignModal}
        openLocModal={props.openLocModal}
        openLoginModal={props.openLoginModal}
      />
    </div>
  );
};

export default DemoInfo;
