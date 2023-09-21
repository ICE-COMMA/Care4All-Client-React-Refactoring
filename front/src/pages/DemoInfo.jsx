import React, { useEffect, useState } from "react";
import axios from "axios";
import LeftNav from "../components/LeftNav";
import RightNav from "../components/RightNav";
import "../styles/table.css";
// import styled from "styled-components";

// const CustomButton = styled.button`
//   border: 1px solid black;
//   width: 12vw;
//   border-radius: 10px;
//   padding: 0.2rem;
//   margin-top: 0.15rem;
//   margin-bottom: 0.15rem;
//   cursor: pointer;
//   font-weight: bolder;
// `;

// `
// Array(15)
// 0
// :
// {location: '국회\x1F‧\x1F의사당대로 일대<여의도>', date: '2023. 09. 21', time: '08:00∼18:30', amount: '100'}
// 1
// :
// {location: '국민은행 서관 → 한국경영자총협회<여의도 등>', date: '2023. 09. 21', time: '14:00∼17:00', amount: '500'}
// 2
// :
// {location: '국민은행 동‧서관 앞<여의도>', date: '2023. 09. 21', time: '19:00∼20:00', amount: '500'}
// 3
// :
// {location: '의사당역 5出 앞<여의도>', date: '2023. 09. 21', time: '00:00∼11:00', amount: '1,000'}
// 4
// :
// {location: '산업은행 후문 앞<여의도동>', date: '2023. 09. 21', time: '12:20∼12:50', amount: '1,000'}
// 5
// :
// {location: '세브란스병원 본관 앞<신촌동>', date: '2023. 09. 21', time: '16:00∼17:20', amount: '199'}
// 6
// :
// {location: '대검찰청 정문 앞<서초동>', date: '2023. 09. 21', time: '10:30∼11:00', amount: '299'}
// 7
// :
// {location: '국민의힘 당사 앞<여의도동>', date: '2023. 09. 21', time: '16:00∼18:00', amount: '300'}
// 8
// :
// {location: '마로니에공원 內<동숭동>', date: '2023. 09. 21', time: '14:00∼16:00', amount: '500'}
// 9
// :
// {location: '건영섬유 앞 인도 → 경문고교차로<사당동>', date: '2023. 09. 21', time: '08:30∼10:00', amount: '100'}
// 10
// :
// {location: '신영와코루 본사 ⇄\x1F가산디지털 단지역<가산동>', date: '2023. 09. 21', time: '11:00∼14:00', amount: '150'}
// 11
// :
// {location: '하늘공원<상계동>', date: '2023. 09. 21', time: '15:00∼17:00', amount: '80'}
// 12
// :
// {location: '평강성서유물박물관 앞 이면도로 <오류동>', date: '2023. 09. 21', time: '10:00∼11:00', amount: '500'}
// 13
// :
// {location: 'SSI아트앤디자인학원 앞 인도 및 하위 1개차로<서초동>', date: '2023. 09. 21', time: '14:00∼15:30', amount: '120'}
// 14
// :
// {location: 'SSI아트앤디자인학원 앞 인도 및 하위 1개차로<서초동>', date: '2023. 09. 21', time: '14:00∼15:30', amount: '120'}

const DemoInfo = (props) => {
  const [info, setInfo] = useState([]);
  function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  const csrftoken = getCookie("csrftoken");
  useEffect(() => {
    // Django 서버에서 사용자 이름을 가져오는 요청
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
