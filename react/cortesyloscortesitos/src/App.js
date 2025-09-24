import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Template from "./components/template/template";
import QueSabemos from "./components/queSabemos/queSabemos";
import Header from "./components/header/header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/contrato" />} />
        <Route path="/contrato" element={<Template />} />
        <Route path="/competencias" element={<QueSabemos />} />
      </Routes>
    </Router>
  );
}

export default App;
