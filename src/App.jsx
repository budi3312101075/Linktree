import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Linktree from "./Pages/Linktree";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Modal from "./components/Modal";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Linktree />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
