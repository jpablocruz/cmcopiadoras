import React from "react";
import {
  BoardContainer,
  CBoard,
  CheckSection,
  PrinterImage,
  CheckRow,
  CheckTitle,
} from "./CheckBoard";

const CheckBoard = () => {
  return (
    <BoardContainer>
      <CBoard>
        <CheckSection>
          <CheckTitle>Title</CheckTitle>
          <CheckRow>info con check</CheckRow>
          <CheckRow>info con check</CheckRow>
          <CheckRow>info con check</CheckRow>
          <CheckRow>info con check</CheckRow>
          <CheckRow>info con check</CheckRow>
        </CheckSection>
        <PrinterImage>Adios</PrinterImage>
      </CBoard>
    </BoardContainer>
  );
};

export default CheckBoard;
