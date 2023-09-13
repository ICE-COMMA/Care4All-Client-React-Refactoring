import React, { useState } from "react";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import SignModal from "./components/Modal/SignModal";
import LocModal from "./components/Modal/LocModal";

export function App() {
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

  return (
    <>
      <Header />
      <Wrapper openSignModal={openSignModal} openLocModal={openLocModal} />
      <Footer />
      <SignModal isOpen={isSignModalOpen} closeModal={closeSignModal} />
      <LocModal isOpen={isLocModalOpen} closeModal={closeLocModal} />
    </>
  );
}
