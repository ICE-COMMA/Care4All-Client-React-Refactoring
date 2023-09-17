import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Sub from "./Sub";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={Main}></Route>
        <Route path="/sub" Component={Sub}></Route>
      </Routes>
    </>
  );
};

export default App;

// 조금 더 끌고와서 가운데만 변하도록 구상해야할듯
