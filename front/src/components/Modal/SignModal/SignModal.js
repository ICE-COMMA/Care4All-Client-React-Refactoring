import React, { useState, useEffect } from "react";
import Modal from "../Modal";
import axios from "axios";

const SignModal = ({ isOpen, closeModal }) => {
  const [userName, setUserName] = useState(null);
  const [userId, setUserId] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [message, setMessage] = useState("비밀번호가 일치하지 않습니다.");
  const [userIdValid, setUserIdValid] = useState(false);
  const [userPwValid, setUserPwValid] = useState(false);

  function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  const csrftoken = getCookie("csrftoken");

  useEffect(() => {
    if (password === passwordConfirm && password !== "") {
      setUserPwValid(true);
      setMessage("비밀번호가 일치합니다.");
    } else {
      setUserPwValid(false);
      setMessage("비밀번호가 일치하지 않습니다.");
    }
  }, [password, passwordConfirm]);

  const handleCheckID = () => {
    axios
      .post(
        "/api/id_check/",
        { userId },
        {
          headers: {
            "X-CSRFToken": csrftoken,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setUserIdValid(true);
      })
      .catch((error) => {
        // setMessage("서버 오류");
        setUserIdValid(false);
      });
  };

  const handleSubmit = () => {
    if (!userIdValid) {
      alert("아이디 중복을 확인해주세요.");
    }
    if (!userPwValid) {
      alert("비밀번호를 확인해주세요.");
    }
    axios
      .post(
        "/api/sign_up/",
        { userName, userId, password },
        {
          headers: {
            "X-CSRFToken": csrftoken,
          },
        }
      )
      .then((response) => {
        console.log(response);
        alert("회원 가입에 성공했습니다.");
        closeModal();
      })
      .catch((error) => {
        // setMessage("회원가입 실패!");
        console.log(error);
      });
  };
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <p>Sign up</p>
      <input
        type="text"
        id="name"
        className="sign-up-input"
        name="name"
        placeholder="* 이름"
        onChange={(e) => setUserName(e.target.value)}
        required
      />
      <input
        type="text"
        id="ID"
        className="sign-up-input"
        name="ID"
        placeholder="* 아이디"
        onChange={(e) => setUserId(e.target.value)}
        required
      />
      <button id="check-id" className="sign-form-btn" onClick={handleCheckID}>
        중복체크
      </button>
      <input
        type="password"
        id="PW"
        className="sign-up-input"
        name="PW"
        placeholder="* 비밀번호를 입력해주세요."
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        required
      />
      <input
        type="password"
        id="check-pw"
        className="sign-up-input"
        name="check_pw"
        placeholder="* 비밀번호를 한 번 더 입력해주세요."
        onChange={(e) => {
          setPasswordConfirm(e.target.value);
        }}
        required
      />
      <p>{message}</p>
      <input
        type="date"
        id="date"
        className="sign-up-input"
        max="2024-01-01"
        min="1900-01-01"
        name="date"
        placeholder="생년월일"
        onChange={(e) => console.log(e.target.value)}
        required
      />
      <select
        name="gender"
        id="gender"
        className="sign-up-input"
        onChange={(e) => console.log(e.target.value)}
        required
      >
        <option value="gender-init">* 성별</option>
        <option value="male">남성</option>
        <option value="female">여성</option>
      </select>
      <select
        name="impaired"
        id="disabled"
        className="sign-up-input"
        onChange={(e) => console.log(e.target.value)}
        required
      >
        <option value="impaired-init">* 장애여부</option>
        <option value="panic">공황장애</option>
        <option value="visually">시각장애</option>
        <option value="behavior">거동장애</option>
        <option value="normal">없음</option>
      </select>
      <div className="sign-form-btn">
        <div onClick={closeModal}>이전</div>
        <div onClick={handleSubmit}>회원가입</div>
      </div>
    </Modal>
  );
};

export default SignModal;
