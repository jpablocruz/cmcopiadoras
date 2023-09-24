import React from "react";
import { Circle } from "./ContactsElements";

const PointerComponent = ({ text }) => {
  return (
    <>
      <Circle></Circle>
      <h4>{text}</h4>
    </>
  );
};

export default PointerComponent;
