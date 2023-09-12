import React, { useState } from "react";
import Modal from "../Modal";

const SignUpModal = ({ isOpen, closeModal }) => {
  const [idFlag, setIdFlag] = useState(false);
  const [pwFlag, setPwFlag] = useState(false);

  const [formData, setFormData] = useState({});
  //   useEffect(() => {
  //     checkPasswords(password, confirmPassword);
  //   }, [password, confirmPassword]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
    if (formData.PW === formData.check_pw) {
      // setMessage('사용 가능한 아이디입니다.');
      setPwFlag(true);
      console.log(pwFlag);
    } else {
      // setMessage('사용 중인 아이디입니다.');
      setPwFlag(false);
      console.log(pwFlag);
    }
  };

  const handleCheckID = async () => {
    const getCSRFToken = () => {
      const csrfCookie = document.cookie.match(/csrftoken=([\w-]+)/);
      if (csrfCookie) {
        return csrfCookie[1];
      }
      return null;
    };
    const userID = formData.id;
    try {
      const response = await fetch("/id_check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": getCSRFToken(),
        },
        body: JSON.stringify({ check_id: userID }),
      });

      if (response.status === 201) {
        const data = await response.json();
        if (data.valid) {
          alert("사용 가능한 아이디입니다.");
          setIdFlag(true);
        } else {
          alert("사용 중인 아이디입니다.");
          setIdFlag(false);
        }
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (idFlag && pwFlag)
      try {
        const response = await fetch("/api/signup/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        //   setMessage(data.message);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
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
        onChange={handleChange}
        required
      />
      <input
        type="text"
        id="ID"
        className="sign-up-input"
        name="ID"
        placeholder="* 아이디"
        onChange={handleChange}
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
        onChange={handleChange}
        required
      />
      <input
        type="password"
        id="check-pw"
        className="sign-up-input"
        name="check_pw"
        placeholder="* 비밀번호를 한 번 더 입력해주세요."
        onChange={handleChange}
        required
      />
      {/* <p id="message" className="hidden">
          비밀번호가 일치하지 않습니다.
        </p> */}
      <input
        type="date"
        id="date"
        className="sign-up-input"
        max="2024-01-01"
        min="1900-01-01"
        name="date"
        placeholder="생년월일"
        onChange={handleChange}
        required
      />
      <select
        name="gender"
        id="gender"
        className="sign-up-input"
        onChange={handleChange}
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
        onChange={handleChange}
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

export default SignUpModal;
