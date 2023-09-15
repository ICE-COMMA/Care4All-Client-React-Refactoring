import React, { useState } from "react";
import Modal from "../Modal";
import axios from "axios";
import styled from "styled-components";

const CustomModal = ({ isOpen, closeModal }) => {
  const [select, setSelect] = useState({});

  const onClick = (e) => {
    setSelect({
      ...select,
      [e.target.id]: true,
    });
  };

  const handleSubmit = () => {
    console.log(select);

    axios
      .post("/api/custom/", { select })
      .then((response) => {
        console.log(response);
        alert("커스터마이징 성공");
        closeModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const CustomButton = styled.button`
    border: 1px solid black;
    width: 10vw;
    border-radius: 10px;
    background-color: #fc636b;
    padding: 0.2rem;
    margin-top: 0.15rem;
    margin-bottom: 0.15rem;
    cursor: pointer;
    font-weight: bolder;
  `;

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <CustomButton
        className="custom-info"
        id="custom-demo"
        name="demo"
        onClick={onClick}
      >
        시위 정보
      </CustomButton>
      <CustomButton
        className="custom-info"
        id="custom-elevator"
        name="elevator"
        onClick={onClick}
      >
        지하철 승강기 정보
      </CustomButton>
      <CustomButton
        className="custom-info"
        id="custom-population"
        name="population"
        onClick={onClick}
      >
        인구밀집 정보
      </CustomButton>
      <CustomButton
        className="custom-info"
        id="custom-predict"
        name="predict"
        onClick={onClick}
      >
        혼잡도 예측
      </CustomButton>
      <CustomButton
        className="custom-info"
        id="custom-safety"
        name="safety"
        onClick={onClick}
      >
        치안 정보
      </CustomButton>
      <CustomButton
        className="custom-info"
        id="custom-safey-loc"
        name="safeyLoc"
        onClick={onClick}
      >
        안심 시설 정보
      </CustomButton>
      <CustomButton
        className="custom-info"
        id="custom-low-bus"
        name="lowBus"
        onClick={onClick}
      >
        저상 버스 정보
      </CustomButton>
      <CustomButton
        className="custom-info"
        id="custom-festival"
        name="festival"
        onClick={onClick}
      >
        행사 정보
      </CustomButton>
      <button onClick={closeModal}>이전</button>
      <button onClick={handleSubmit}>저장</button>
    </Modal>
  );
};

export default CustomModal;
