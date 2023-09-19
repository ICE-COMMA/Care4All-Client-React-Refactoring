import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Transfer from "./pages/Transfer";
import Safety from "./pages/Safety";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignModal from "./components/Modal/SignModal";
import LocModal from "./components/Modal/LocModal";
import LoginModal from "./components/Modal/LoginModal";
import CustomModal from "./components/Modal/CustomModal";

const App = () => {
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const openCustomModal = () => {
    setIsCustomModalOpen(true);
  };
  const closeCustomModal = () => {
    setIsCustomModalOpen(false);
  };

  const [isSignModalOpen, setIsSignModalOpen] = useState(false);
  const openSignModal = () => {
    setIsSignModalOpen(true);
  };

  const closeSignModal = () => {
    setIsSignModalOpen(false);
  };
  const [isLocModalOpen, setisLocModalOpen] = useState(false);
  const openLocModal = () => {
    setisLocModalOpen(true);
  };

  const closeLocModal = () => {
    setisLocModalOpen(false);
  };

  const [isLoginModalOpen, setisLoginModalOpen] = useState(false);
  const openLoginModal = () => {
    setisLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setisLoginModalOpen(false);
  };
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Main
              openCustomModal={openCustomModal}
              openSignModal={openSignModal}
              openLocModal={openLocModal}
              openLoginModal={openLoginModal}
            />
          }
        ></Route>
        <Route
          path="/transfer"
          element={
            <Transfer
              openCustomModal={openCustomModal}
              openSignModal={openSignModal}
              openLocModal={openLocModal}
              openLoginModal={openLoginModal}
            />
          }
        ></Route>
        <Route
          path="/safety"
          element={
            <Safety
              openCustomModal={openCustomModal}
              openSignModal={openSignModal}
              openLocModal={openLocModal}
              openLoginModal={openLoginModal}
            />
          }
        ></Route>
      </Routes>
      <Footer />
      <CustomModal isOpen={isCustomModalOpen} closeModal={closeCustomModal} />
      <SignModal isOpen={isSignModalOpen} closeModal={closeSignModal} />
      <LocModal isOpen={isLocModalOpen} closeModal={closeLocModal} />
      <LoginModal isOpen={isLoginModalOpen} closeModal={closeLoginModal} />
    </>
  );
};

export default App;

// 조금 더 끌고와서 가운데만 변하도록 구상해야할듯
