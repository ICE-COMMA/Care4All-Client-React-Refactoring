import React, { useState, useEffect, useCallback, useMemo } from "react";
import "../styles/content.css";

const Content = () => {
  const dataSet = useMemo(
    () => [
      {
        url: "https://mblogthumb-phinf.pstatic.net/MjAyMTAzMTFfNTMg/MDAxNjE1NDU0MjQ3NzIz.w3Ulvz-SK3zJQZSSYw4BeZ0sIdjyXYDoPH4iEKVmrLsg.SCmLTT1b0sMkr_x3kY5DjZYBShJCCMnVw2PXYAAdOfgg.JPEG.karo99/SE-0645ef1a-7a69-467f-8f68-262d6a947081.jpg?type=w800",
        text: ["길동", "보통"],
        slide: ["●", "○", "○", "○"],
      },
      {
        url: `https://www.smpa.go.kr/common/attachfile/attachfileView.do?attachNo=00233493&imgType=L`,
        text: ["시위정보", null],
        slide: ["○", "●", "○", "○"],
      },
      {
        url: "images/safe.png",
        text: ["안전지킴이집 정보", null],
        slide: ["○", "○", "●", "○"],
      },
      {
        url: `images/pop.png`,
        text: ["길동 혼잡도 예측", null],
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
  const [isSetting, setIsSetting] = useState(false);

  const handleContent = useCallback(() => {
    // 2초마다 slideIndex를 증가시켜 슬라이드 쇼를 진행합니다.
    setSlideInfo(dataSet[slideIndex].slide);
    setContentUrl(dataSet[slideIndex].url);
    setMainText(dataSet[slideIndex].text[0]);
    setSubText(dataSet[slideIndex].text[1]);
    setSlideIndex((prevSlideIndex) => (prevSlideIndex + 1) % dataSet.length);
  }, [slideIndex, dataSet]);

  useEffect(() => {
    const interval = setInterval(handleContent, 1500);
    return () => clearInterval(interval);
  }, [handleContent]);

  useEffect(() => {
    setIsSetting(localStorage.getItem("custom"));
  }, []);

  return (
    <div className="content-box">
      <div id="content-display">
        {isSetting ? (
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
        ) : (
          <div
            className="inner-content"
            style={{
              backgroundImage: `url("images/custom.jpg")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "90%",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          ></div>
        )}

        {isSetting ? (
          <div className="explain-content">
            <span>{mainText}</span>
            {subText && <span>{subText}</span>}
          </div>
        ) : (
          <div className="explain-content">커스터마이징을 진행해주세요.</div>
        )}
      </div>
      <div className="slide-box">
        <span className="slide1">{slideInfo[0]}</span>
        <span className="slide2">{slideInfo[1]}</span>
        <span className="slide3">{slideInfo[2]}</span>
        <span className="slide4">{slideInfo[3]}</span>
      </div>
    </div>
  );
};

export default Content;
