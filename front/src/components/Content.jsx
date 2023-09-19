import React, { useState, useEffect, useCallback, useMemo } from "react";
import SpeechService from "./SpeechService";
import "../styles/content.css";

const Content = () => {
  const dataSet = useMemo(
    () => [
      {
        url: "/images/guroDigital.jpg",
        text: ["구로디지털단지역", "혼잡"],
        slide: ["●", "○", "○", "○"],
      },
      {
        url: `https://www.smpa.go.kr/common/attachfile/attachfileView.do?attachNo=00233321&imgType=L`,
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
    ],
    []
  ); // 의존성 배열이 비어 있으므로 한 번만 초기화됩니다

  const [slideIndex, setSlideIndex] = useState(0);
  const [slideInfo, setSlideInfo] = useState(["○", "○", "○", "○"]);
  const [mainText, setMainText] = useState(null);
  const [subText, setSubText] = useState(null);
  const [contentUrl, setContentUrl] = useState(null);

  const handleContent = useCallback(() => {
    // 2초마다 slideIndex를 증가시켜 슬라이드 쇼를 진행합니다.
    setSlideInfo(dataSet[slideIndex].slide);
    setContentUrl(dataSet[slideIndex].url);
    setMainText(dataSet[slideIndex].text[0]);
    setSubText(dataSet[slideIndex].text[1]);
    setSlideIndex((prevSlideIndex) => (prevSlideIndex + 1) % dataSet.length);
  }, [slideIndex, dataSet]);

  useEffect(() => {
    const interval = setInterval(handleContent, 2000);
    return () => clearInterval(interval);
  }, [handleContent]);

  return (
    <div className="content-box">
      <div id="content-display">
        {/* 여기서 겉면 칠해주는거 */}
        {contentUrl && (
          <div
            className="inner-content"
            style={{
              backgroundImage: `url("${contentUrl}")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "90%",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          ></div>
        )}

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
