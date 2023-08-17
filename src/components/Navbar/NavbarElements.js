import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0.7rem calc((70vw - 1000px) / 2);
  font-weight: 100;
  background-color: #dd4141;
`;

export const NavLogo = styled(Link)`
  &.home {
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
    font-size: 2vh;
  }
`;

export const NavLink = styled(Link)`
  &.home {
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.7rem;
    height: 100%;
    cursor: pointer;
    font-size: 2vh;
    transition: 0.2s ease-in-out;
  }

  &:hover {
    text-decoration: underline;
    transition: 0.4s ease-in-out;
  }

  // &.others {
  //   color: #01114b;
  //   display: flex;
  //   align-items: center;
  //   text-decoration: none;
  //   padding: 0 2.5rem;
  //   height: 100%;
  //   cursor: pointer;
  //   font-size: 23px;
  //   &.active {
  //     color: #15cdfc;
  //   }
  // }
`;

export const MobileIcon = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(-100%, 120%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  font-size: 2.18vh;
  padding: 0 1rem;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 1vh;
  background: white;
  padding: 0.5rem 1.8vw;
  color: #dd4141;
  cursor: pointer;
  text-decoration: none;
`;
