import React, { useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";

function SpeechService() {
  const [value, setValue] = useState("");
  const [micStatus, setMicStatus] = useState("On");
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
    setMicStatus("Off");
    listen({ interimResults: false });
  };

  // 마우스를 뗄 때 'Off'로 상태 변경
  const handleMouseUp = () => {
    setMicStatus("On");
    stop();
  };

  return (
    <div>
      {/* <div>{value}</div> */}
      <button onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        {micStatus}
      </button>
      {listening && <div>음성인식 활성화 중</div>}
    </div>
  );
}
export default SpeechService;
