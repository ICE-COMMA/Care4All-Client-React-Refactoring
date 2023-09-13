import React, { useState } from "react";
import Modal from "../Modal";
import axios from "axios";

const Login = ({ isOpen, closeModal }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
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
        onChange={(e) => setId(e.target.value)}
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div onClick={closeModal}>이전</div>
      <button onClick={handleLogin}>Login</button>
    </Modal>
  );
};

export default Login;
