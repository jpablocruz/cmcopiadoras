import styled from "styled-components";
export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 60vh;
  width: 100%;
  background: #dd4141;
  padding-top: 3.5vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    width: 100%;
    background: #dd4141;
    padding-top: 4vh;
  }
`;

export const HeroBillboard = styled.div`
  display: flex-column;
  padding: 2rem;
  padding-left: 5rem;
  padding-right: 2rem;
  background: #dd4141;
  width: 40%;
  z-index: 10;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 0;
    padding-bottom: 5vh;
    text-align: center;
  }
`;
export const HeroImage = styled.div`
  display: flex;
  position: relative;
  background: #dd4141;
  overflow: hidden;
  z-index: 5;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 50vh;
  }
`;

export const Image = styled.img`
  height: 55vh;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const Header = styled.h1`
  color: white;
  font-weight: 600;
  font-size: 4.5vh;
  &.headerB {
    color: white;
  }
`;

export const HeaderDescription = styled.h2`
  font-weight: 400;
  font-size: 2.3vh;
`;

export const HeroCompanies = styled.div`
  font-weight: 400;
  padding-top: 2vh;
`;

export const Buttons = styled.div``;
