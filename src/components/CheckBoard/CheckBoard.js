import { styled } from "styled-components";

export const BoardContainer = styled.div`
  background: white;
  width: 100%;
  height: 80vh;
  align-items: center;
  justify-content: center;
  display: flex;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 0;
    align-items: center;
  }
`;

export const CBoard = styled.div`
  height: 60vh;
  padding: 30px;
  background: blue;
  width: 70%;
  border-radius: 1vh;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    width: 70%;
    height: 30vh;
    padding: 10px;
  }
`;

export const CheckSection = styled.div`
  display: flex-column;
  width: 70%;
  background: #add8e6;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const CheckTitle = styled.div`
  background: red;
  width: 100%;
  height: 5vh;
`;

export const CheckRow = styled.div`
  background: orange;
  width: 100%;
`;

export const PrinterImage = styled.div`
  width: 30%;
  background: green;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
