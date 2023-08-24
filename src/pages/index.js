import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Companies from "../components/Companies";
import InfoSection from "../components/InfoSection";
import CallToAction from "../components/CallToAction";
import CheckBoard from "../components/CheckBoard";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Companies />
      <InfoSection />
      <CallToAction />
      <CheckBoard />
    </>
  );
};

export default Home;
