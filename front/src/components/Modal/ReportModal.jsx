import React, { useState } from "react";
import Modal from "./Modal";
import styled from "styled-components";

const CustomButton = styled.button`
  border: 1px solid black;
  width: 12vw;
  border-radius: 10px;
  padding: 0.2rem;
  margin-top: 0.15rem;
  margin-bottom: 0.15rem;
  cursor: pointer;
  font-weight: bolder;
`;

const CustomModal = ({ isOpen, closeModal }) => {
  const [select, setSelect] = useState({
    "custom-demo": false,
    "custom-elevator": false,
    "custom-population": false,
    "custom-predict": false,
    "custom-safety": false,
    "custom-safey-loc": false,
    "custom-low-bus": false,
    "custom-festival": false,
  });

  const [buttonColor, setButtonColor] = useState([
    "pink",
    "pink",
    "pink",
    "pink",
    "pink",
    "pink",
    "pink",
    "pink",
  ]);
  const onClick = (e) => {
    const updatedColors = [...buttonColor];
    updatedColors[parseInt(e.target.name)] = "blue";
    setButtonColor(updatedColors);
    setSelect({
      ...select,
      [e.target.id]: true,
    });
  };
  // const handleSubmit = () => {
  //   console.log(select);

  //   axios
  //     .post("/api/custom/", { select })
  //     .then((response) => {
  //       console.log(response);
  //       alert("커스터마이징 성공");
  //       closeModal();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <CustomButton
        className="custom-info"
        id="custom-demo"
        name="0"
        onClick={onClick}
        style={{
          backgroundColor: `${buttonColor[0]}`,
        }}
      >
        시위 정보
      </CustomButton>
      <CustomButton
        className="custom-info"
        id="custom-elevator"
        name="1"
        onClick={onClick}
        style={{
          backgroundColor: `${buttonColor[1]}`,
        }}
      >
        지하철 승강기 정보
      </CustomButton>
      <CustomButton
        className="custom-info"
        id="custom-population"
        name="2"
        onClick={onClick}
        style={{
          backgroundColor: `${buttonColor[2]}`,
        }}
      >
        인구밀집 정보
      </CustomButton>
      <CustomButton
        className="custom-info"
        id="custom-predict"
        name="3"
        onClick={onClick}
        style={{
          backgroundColor: `${buttonColor[3]}`,
        }}
      >
        혼잡도 예측
      </CustomButton>
      <CustomButton
        className="custom-info"
        id="custom-safety"
        name="4"
        onClick={onClick}
        style={{
          backgroundColor: `${buttonColor[4]}`,
        }}
      >
        치안 정보
      </CustomButton>
      <CustomButton
        className="custom-info"
        id="custom-safey-loc"
        name="5"
        onClick={onClick}
        style={{
          backgroundColor: `${buttonColor[5]}`,
        }}
      >
        안심 시설 정보
      </CustomButton>
      <CustomButton
        className="custom-info"
        id="custom-low-bus"
        name="6"
        onClick={onClick}
        style={{
          backgroundColor: `${buttonColor[6]}`,
        }}
      >
        저상 버스 정보
      </CustomButton>
      <CustomButton
        className="custom-info"
        id="custom-festival"
        name="7"
        onClick={onClick}
        style={{
          backgroundColor: `${buttonColor[7]}`,
        }}
      >
        행사 정보
      </CustomButton>
      <div className="form-btn">
        <div
          onClick={closeModal}
          style={{
            width: `5vw`,
          }}
        >
          이전
        </div>
        <div
          onClick={handleSubmit}
          style={{
            width: `5vw`,
          }}
        >
          저장
        </div>
      </div>
    </Modal>
  );
};

export default CustomModal;
