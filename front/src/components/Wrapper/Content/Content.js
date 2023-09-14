import React, { useState, useEffect } from "react";
import "./Content.css";
import SpeechService from "../SpeechService/SpeechService";

const Content = () => {
  const dataSet = [
    {
      url: "https://data.seoul.go.kr/resources/img/guide/hotspot/구로디지털단지역.jpg",
      text: ["구로디지털단지역", "혼잡"],
      slide: ["●", "○", "○", "○"],
    },
    {
      url: `https://www.smpa.go.kr/common/attachfile/attachfileView.do?attachNo=00232765&imgType=L`,
      text: ["시위정보", null],
      slide: ["○", "●", "○", "○"],
    },
    {
      url: `https://media.istockphoto.com/id/1487359679/ko/벡터/직장에서-제복을-입은-전문-배관공-욕실-세면대를-고치는-배관공.jpg?s=1024x1024&w=is&k=20&c=MQs_FPXdMIm4YqBJ6zclGCWxRXXW3zmeF_fj6IamOro=`,
      text: ["테스트 중", null],
      slide: ["○", "○", "●", "○"],
    },
    {
      url: `https://img.freepik.com/premium-vector/the-man-has-repaired-the-old-house-for-rent_701961-3369.jpg`,
      text: ["테스트중", null],
      slide: ["○", "○", "○", "●"],
    },
  ];
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideInfo, setSlideInfo] = useState(["○", "○", "○", "○"]);
  const [mainText, setMainText] = useState(null);
  const [subText, setSubText] = useState(null);
  const [contentUrl, setContentUrl] = useState(null);

  useEffect(() => {
    handleContent();
  }, []);
  // const len = contentInfo.length;
  const handleContent = () => {
    // 2초마다 slideIndex를 증가시켜 슬라이드 쇼를 진행합니다.
    let currentIndex = 0;
    const interval = setInterval(() => {
      console.log(currentIndex);
      setSlideIndex(currentIndex); // 슬라이드 인덱스 업데이트
      setSlideInfo(dataSet[currentIndex].slide);
      setContentUrl(dataSet[currentIndex].url);
      setMainText(dataSet[currentIndex].text[0]);
      setSubText(dataSet[currentIndex].text[1]);
      currentIndex = (currentIndex + 1) % dataSet.length;
    }, 2000);

    // 컴포넌트가 언마운트될 때 인터벌을 정리합니다.
    return () => clearInterval(interval);
  };

  return (
    <div className="content-box">
      <div id="content-display">
        {/* 여기서 겉면 칠해주는거 */}
        <div
          className="inner-content"
          style={{ backgroundImage: `url("${contentUrl}")` }}
        ></div>
        <div className="explain-content">
          <span>{mainText}</span>
          {subText && <span>{subText}</span>}
        </div>
      </div>
      <div className="slide-box">
        <span className="slide1">{slideInfo[0]}</span>
        <span className="slide2">{slideInfo[1]}</span>
        <span className="slide3">{slideInfo[2]}</span>
        <span className="slide4">{slideInfo[3]}</span>
      </div>
      <SpeechService />
    </div>
  );
};

export default Content;
