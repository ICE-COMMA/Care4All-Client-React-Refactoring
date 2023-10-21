import React, { useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";

function SpeechService() {
  const [value, setValue] = useState("");
  const [micStatus, setMicStatus] = useState("음성인식 서비스 ON");
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      // 자체 제공 콜백함수, 인식이 있을 때만 실행
      // 음성인식 결과가 value 상태값으로 할당됩니다.
      setValue(result);
      console.log(result);
      console.log(value);
    },
  });

  const handleMouseDown = () => {
    setMicStatus("음성인식 서비스 Off");
    listen();
  };

  // 마우스를 뗄 때 'Off'로 상태 변경
  const handleMouseUp = () => {
    setMicStatus("음성인식 서비스 On");
    stop();
  };

  return (
    <div>
      {/* <div>{value}</div> */}

      <button onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        {micStatus}
      </button>
      {listening && (
        <div style={{ fontSize: "0.6rem", color: "pink" }}>
          음성인식 활성화 중
        </div>
      )}
    </div>
  );
}
export default SpeechService;

// 만약 음성인식이 되지 않을 때, 예외처리 부분 넣어야함.
