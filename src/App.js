import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import "./App.css";

function App() {
  return (
    <Router>
      <Home />
      <Routes>
        <Route path="/" />
        <Route path="/servicios" />
        <Route path="/clientes" />
        <Route path="/contacto" />
      </Routes>
    </Router>
  );
}

export default App;
