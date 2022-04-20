import React from "react";
import { BrowserRouter as Ektiar, Routes, Route } from "react-router-dom";
import About from "./Component/About";
import Home from "./Component/Home";
import Services from "./Component/Services";
import Navbar from "./Component/Navbar";
function App() {
  return (
    <Ektiar>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
      </Routes>
    </Ektiar>
  );
}

export default App;
