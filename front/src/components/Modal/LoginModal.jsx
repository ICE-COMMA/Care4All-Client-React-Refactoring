import React, { useState, useRef } from "react";
import Modal from "./Modal";
import axios from "axios";
// import styled from "styled-components";

// const loginInput = styled.input``;

const LoginModal = ({ isOpen, closeModal }) => {
  const getCookie = (name) => {
    const cookieString = document.cookie;
    const csrfTokenCookie = cookieString
      .split("; ")
      .find((cookie) => cookie.startsWith("csrftoken="));

    if (csrfTokenCookie) {
      return csrfTokenCookie.split("=")[1];
    }

    return null;
  };

  const [id, setid] = useState("");
  const [password, setPassword] = useState("");
  const idInput = useRef();
  let username = null;

  const csrftoken = getCookie();
  const handleLogin = () => {
    if (!id) {
      return alert("id를 입력하세요.");
    } else if (!password) {
      return alert("Password를 입력하세요.");
    } else {
      let body = {
        ID: id,
        id: id,
        password,
      };
      console.log(body);
      axios
        .post("api/auth/login/", body, {
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
          console.log(e);
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
        onChange={(e) => setid(e.target.value)}
        ref={idInput}
        style={{
          width: "100%",
          height: "20%",
        }}
        required
      />
      <input
        type="password"
        value={password}
        placeholder="비밀번호"
        onChange={(e) => setPassword(e.target.value)}
        style={{
          wth: "100%",
          height: "20%",
        }}
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
