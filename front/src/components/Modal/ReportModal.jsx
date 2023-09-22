import React, { useState } from "react";
import Modal from "./Modal";
import styled from "styled-components";

const ReportModal = ({ isOpen, closeModal }) => {
  const handleClick = () => {
    alert("제보가 완료됐습니다.");
    window.location.href = "/";
  };
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <input
        type="text"
        id="id"
        placeholder="내용을 입력해주세요."
        style={{
          width: "100%",
          height: "20%",
        }}
        required
      />
      <input
        type="text"
        id="id"
        placeholder="장소를 입력해주세요."
        style={{
          width: "100%",
          height: "20%",
        }}
        required
      />
      <input
        type="text"
        id="id"
        placeholder="시간을 입력해주세요."
        style={{
          width: "100%",
          height: "20%",
        }}
        required
      />

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
          style={{
            width: `5vw`,
          }}
          onClick={handleClick}
        >
          제출하기
        </div>
      </div>
    </Modal>
  );
};

export default ReportModal;
