import React from "react";
import {
  BoardContainer,
  CBoard,
  CheckSection,
  PrinterImage,
  CheckRow,
  CheckTitle,
  Image,
} from "./CheckBoard";
import printer from "../../images/printerFront.png";
import { FaRegCheckCircle } from "react-icons/fa";

const CheckBoard = () => {
  return (
    <BoardContainer>
      <CBoard>
        <CheckSection>
          <CheckTitle>Destacamos de la competencia</CheckTitle>
          <CheckRow>
            <FaRegCheckCircle />
            Hola primer punto positivo
          </CheckRow>
          <CheckRow>
            <FaRegCheckCircle />
            Hola primer punto positivo
          </CheckRow>
          <CheckRow>
            <FaRegCheckCircle />
            Hola primer punto positivo
          </CheckRow>
          <CheckRow>
            <FaRegCheckCircle />
            Hola primer punto positivo
          </CheckRow>
          <CheckRow>
            <FaRegCheckCircle />
            Hola primer punto positivo
          </CheckRow>
        </CheckSection>
        <PrinterImage>
          <Image src={printer} />
        </PrinterImage>
      </CBoard>
    </BoardContainer>
  );
};

export default CheckBoard;
