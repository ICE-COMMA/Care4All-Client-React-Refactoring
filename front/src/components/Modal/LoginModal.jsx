import React, { useState, useRef } from "react";
import Modal from "./Modal";
import axios from "axios";
// import styled from "styled-components";

// const loginInput = styled.input``;

const LoginModal = ({ isOpen, closeModal }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const idInput = useRef();
  let username = null;
  function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  const csrftoken = getCookie("csrftoken");
  const handleLogin = () => {
    if (!id) {
      return alert("ID를 입력하세요.");
    } else if (!password) {
      return alert("Password를 입력하세요.");
    } else {
      let body = {
        id,
        password,
      };
      console.log(body);
      axios
        .post("/api/login/", body, {
          headers: {
            "X-CSRFToken": csrftoken,
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            username = res.data.username;
            alert(`${username}님 반갑습니다!`);
            closeModal();
            localStorage.setItem("username", username);
            localStorage.setItem("id", body.id);
          } else {
            console.log("something errror");
          }
        })
        .catch((e) => {
          alert("아이디나 비밀번호를 확인해주세요!");
          closeModal();
        });
    }
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <input
        type="text"
        id="id"
        value={id}
        placeholder="아이디"
        onChange={(e) => setId(e.target.value)}
        ref={idInput}
        required
      />
      <input
        type="password"
        value={password}
        placeholder="비밀번호"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div className="form-btn">
        <div onClick={closeModal}>이전</div>
        <div onClick={handleLogin}>로그인</div>
      </div>
    </Modal>
  );
};

export default LoginModal;
