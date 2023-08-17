import React from "react";
import {
  SidebarCont,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SideBtnLink,
  SideBtnWrap,
  SidebarMenu,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarCont isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/servicios" onClick={toggle}>
            Servicios
          </SidebarLink>
          <SidebarLink to="/clientes" onClick={toggle}>
            Clientes
          </SidebarLink>
          <SidebarLink to="/nosotros" onClick={toggle}>
            Nosotros
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SideBtnLink to="/contacto">Contáctanos</SideBtnLink>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarCont>
  );
};

export default Sidebar;
