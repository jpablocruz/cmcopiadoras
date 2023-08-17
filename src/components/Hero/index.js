import React from "react";
import {
  HeroContainer,
  HeroBillboard,
  HeroImage,
  HeaderDescription,
  Buttons,
  Image,
  Header,
} from "./HeroElements";
import heroDesign from "../../images/copiadoras_design.jpg";

import { Btn, BtnLink } from "../Common/CommonElements";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBillboard>
        <Header>Transformamos tu oficina.</Header>
        <Header className="headerB">Elevamos tu productividad.</Header>
        <HeaderDescription>
          Administra tu impresión, gestiona tus documentos y<br />
          optimiza tu oficina. Nuestras soluciones se adaptan
          <br />a las necesidades de tu negocio.
        </HeaderDescription>
        <Buttons>
          <Btn className="Hero">
            <BtnLink className="HeroA">Contáctanos</BtnLink>
            <BtnLink className="HeroB">Servicios</BtnLink>
          </Btn>
        </Buttons>
      </HeroBillboard>
      <HeroImage>
        <Image src={heroDesign} />
      </HeroImage>
    </HeroContainer>
  );
};

export default Hero;
