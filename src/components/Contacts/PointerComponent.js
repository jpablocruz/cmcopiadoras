import React from "react";
import { Circle } from "./ContactsElements";

const PointerComponent = ({ text }) => {
  return (
    <Circle>
      <h1>{text}</h1>
    </Circle>
  );
};

export default PointerComponent;
