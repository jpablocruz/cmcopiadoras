import { styled } from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  background: #f1f1f1;
  justify-content: center;
  align-items: center;
  gap: 8vw;
  padding-bottom: 5vh;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    width: 100%;
    background: #f1f1f1;
    padding-top: 4vh;
  }

  &.infoB {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    background: #f1f1f1;
    justify-content: center;
    align-items: center;
    gap: 8vw;
    padding-bottom: 5vh;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      height: auto;
      width: 100%;
      background: #f1f1f1;
      padding-top: 4vh;
    }
  }
`;
export const ProductImage = styled.div`
  position: relative;
  overflow: hidden;
  display: flex-column;
  width: 40%;
  flex-wrap: wrap;
  height: 40vh;
  background: #f1f1f1;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 0;
    text-align: center;
    overflow: hidden;
  }
`;

export const Image = styled.img`
  height: 25rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
`;

export const ProductInfo = styled.div`
  align-items: center;
  padding-top: 3vh;
  justify-content: center;
  background: #f1f1f1;
  width: 30%;
  height: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 0;
    text-align: left;
  }

  &.PIB {
    align-items: center;
    padding-top: 3vh;
    justify-content: center;
    background: #f1f1f1;
    width: 30%;
    height: auto;
    @media screen and (max-width: 768px) {
      width: 100%;
      height: auto;
      padding: 0;
      text-align: right;
    }
  }
`;
