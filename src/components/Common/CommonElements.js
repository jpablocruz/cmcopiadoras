import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Btn = styled.nav`
  &.Hero {
    display: flex;
    align-items: center;
    font-size: 2.18vh;
    padding-top: 2vh;
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
