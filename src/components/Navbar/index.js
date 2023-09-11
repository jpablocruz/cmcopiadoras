import React from "react";
// import { useLocation } from "react-router-dom";
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLogo,
  MobileIcon,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  // const location = useLocation();
  // let active = false;

  // if (location.pathname === "/") {
  //   active = true;
  // }

  return (
    <>
      <Nav>
        <NavLogo className={"home"} to="/">
          <h1>CMCopiadoras</h1>
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavLink className={"home"} to="/servicios">
            Servicios
          </NavLink>
          <NavLink className={"home"} to="/clientes">
            Clientes
          </NavLink>
          <NavLink className={"home"} to="/nosotros">
            Nosotros
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/contacto">Contáctanos</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
