import React from "react";
import "./Modal.css";

const SignUpModal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  // {
  //   /* CSRF 토큰을 사용하려면 백엔드에서 제공하는 방식으로 처리해야 합니다. */
  // }
  // {
  //   /* <input type="hidden" name="csrfmiddlewaretoken" value="{% csrf_token %}" /> */
  // }

  return (
    <div className="modal-container" id="signup-container">
      <div className="modal-content" id="signup-content">
        <p>Sign up</p>
        <input
          type="text"
          id="name"
          className="sign-up-input"
          name="name"
          placeholder="* 이름"
          required
        />
        <input
          type="text"
          id="ID"
          className="sign-up-input"
          name="ID"
          placeholder="* 아이디"
          required
        />
        <button id="check-id" className="sign-form-btn">
          중복체크
        </button>
        <input
          type="password"
          id="PW"
          className="sign-up-input"
          name="PW"
          placeholder="* 비밀번호를 입력해주세요."
          required
        />
        <input
          type="password"
          id="check-pw"
          className="sign-up-input"
          name="check-pw"
          placeholder="* 비밀번호를 한 번 더 입력해주세요."
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
          required
        />
        <select name="gender" id="gender" className="sign-up-input" required>
          <option value="gender-init">* 성별</option>
          <option value="male">남성</option>
          <option value="female">여성</option>
        </select>
        <select
          name="impaired"
          id="disabled"
          className="sign-up-input"
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
          <div>회원가입</div>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
