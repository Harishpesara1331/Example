import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ToyPage from "./components/ToyPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/toys/:ageRange" element={<ToyPage />} />
    </Routes>
  );
};

export default App;
