import { styled } from "styled-components";

export const BoardContainer = styled.div`
  width: 100%;
  height: auto;
  padding-top: 3vh;
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
  height: auto;
  padding: 30px;
  width: 70%;
  border-radius: 1vh;
  display: flex;
  background: #ddd;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 70%;
    height: auto;
    padding: 10px;
  }
`;

export const CheckSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const CheckTitle = styled.div`
  color: black;
  font-weight: 700;
  font-size: 5vh;
  padding-bottom: 5vh;
`;

export const CheckSentence = styled.h2`
  color: black;
  font-weight: 400;
  font-size: 3vh;
  padding-bottom: 2vh;
`;

export const CheckRow = styled.div`
  display: flex;
  gap: 2vw;
  height: auto;
  width: 100%;
  font-size: 3vh;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const CheckIcon = styled.div`
  width: auto;
  height: 2vh;
`;

export const PrinterImage = styled.div`
  display: flex;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const Image = styled.img`
  height: auto;
  width: 100%;
`;
