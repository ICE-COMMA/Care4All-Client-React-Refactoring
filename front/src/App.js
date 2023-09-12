import React, { useState } from "react";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import SignUpModal from "./components/Modal/SignModal/SignModal";

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true); // 모달 열기
  };

  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  return (
    <>
      <Header />
      <Wrapper openModal={openModal} />
      <Footer />
      <SignUpModal isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
}
