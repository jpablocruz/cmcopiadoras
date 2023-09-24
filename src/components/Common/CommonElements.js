import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Btn = styled.nav`
  &.Hero {
    display: flex;
    align-items: center;
    font-size: 2.18vh;
    padding-top: 2vh;
    @media screen and (max-width: 768px) {
      justify-content: center;
    }
  }

  &.CTA {
    display: flex;
    align-items: center;
    font-size: 2.18vh;
    padding-top: 4vh;
    padding-bottom: 4vh;
    @media screen and (max-width: 768px) {
      justify-content: center;
    }
  }
`;

export const BtnLink = styled(Link)`
  &.HeroA {
    border-radius: 1vh;
    background: white;
    padding: 0.5rem 4vw;
    color: #dd4141;
    cursor: pointer;
    text-decoration: none;
  }

  &.InfoSection {
    border-radius: 1vh;
    background: #dd4141;
    padding: 0.5rem 4vw;
    color: #f1f1f1;
    cursor: pointer;
    text-decoration: none;
  }

  &.HeroB {
    border: 2px solid #00a4bd;
    border-radius: 1vh;
    border-color: #fff;
    background: #dd4141;
    padding: 0.4rem 5vw;
    color: white;
    cursor: pointer;
    text-decoration: none;
    margin-left: 1.5rem;
  }
`;

export const SectionTitle = styled.h1`
  color: black;
  font-weight: 600;
  font-size: 3.5vh;
  &.Contacts {
    font-weight: 400;
  }
`;

export const StatTitle = styled.h1`
  color: black;
  font-weight: 500;
  font-size: 5vh;
`;

export const StatDesc = styled.h3`
  color: black;
  font-weight: 200;
  font-size: 2vh;
`;

export const SectionDesc = styled.h2`
  font-weight: 400;
  font-size: 2.5vh;
`;

export const Headline = styled.h1`
  font-size: 4.5vh;
  font-weight: 600;
  color: black;
  padding: 1rem;
`;
