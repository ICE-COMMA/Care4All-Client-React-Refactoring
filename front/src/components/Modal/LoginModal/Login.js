import React, { useState, useRef } from "react";
import Modal from "../Modal";
import axios from "axios";
import styled from "styled-components";

// const loginInput = styled.input``;

const Login = ({ isOpen, closeModal }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const idInput = useRef();
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
      axios.post("api/login", body).then((res) => {
        console.log(res.data);
        if (res.data.code === 200) {
          console.log("로그인");
        } else {
          console.log("something errror");
        }
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

export default Login;
