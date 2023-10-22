import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Linktree from "./Pages/Linktree";
import Home from "./Pages/Home";
import Tambah from "./Pages/Tambah";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Linktree />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Tambah" element={<Tambah />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
