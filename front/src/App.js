import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./Test";
import Main from "./Main";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/test/*" element={<Test />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
