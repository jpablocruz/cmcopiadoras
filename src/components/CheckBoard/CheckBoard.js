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
  background: grey;
  width: 70%;
  border-radius: 1vh;
  @media screen and (max-width: 768px) {
    width: 70%;
    height: 30vh;
    padding: 10px;
  }
`;
