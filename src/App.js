import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./pages/index";
import Contact from "./pages/contact";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/servicios" />
        <Route path="/clientes" />
        <Route path="/contacto" Component={Contact} />
      </Routes>
    </Router>
  );
}

export default App;
