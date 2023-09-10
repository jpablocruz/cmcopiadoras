import React from "react";
import {
  BoardContainer,
  CBoard,
  CheckSection,
  PrinterImage,
  CheckRow,
  CheckTitle,
  CheckSentence,
  CheckIcon,
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
            <CheckIcon>
              <FaRegCheckCircle />
            </CheckIcon>
            <CheckSentence>
              Soluciones que se ajustan a tus necesidades.
            </CheckSentence>
          </CheckRow>
          <CheckRow>
            <CheckIcon>
              <FaRegCheckCircle />
            </CheckIcon>
            <CheckSentence>Instalación de equipos</CheckSentence>
          </CheckRow>
          <CheckRow>
            <CheckIcon>
              <FaRegCheckCircle />
            </CheckIcon>
            <CheckSentence>Hola primer punto positivo</CheckSentence>
          </CheckRow>
          <CheckRow>
            <CheckIcon>
              <FaRegCheckCircle />
            </CheckIcon>
            <CheckSentence>Hola primer punto positivo</CheckSentence>
          </CheckRow>
          <CheckRow>
            <CheckIcon>
              <FaRegCheckCircle />
            </CheckIcon>
            <CheckSentence>Hola primer punto positivo</CheckSentence>
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
