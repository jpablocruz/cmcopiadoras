import React from "react";
import Hero from "../components/Hero";
import Companies from "../components/Companies";
import InfoSection from "../components/InfoSection";
import CallToAction from "../components/CallToAction";
import CheckBoard from "../components/CheckBoard";

const Home = () => {
  return (
    <>
      <Hero />
      <Companies />
      <InfoSection />
      <CallToAction />
      <CheckBoard />
    </>
  );
};

export default Home;
