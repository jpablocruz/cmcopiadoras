import { styled } from "styled-components";

export const BoardContainer = styled.div`
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
  display: flex-column;
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

export const CheckRow = styled.div`
  display: flex;
  gap: 2vw;
  height: 5vh;
  width: 100%;
  font-size: 3vh;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
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
