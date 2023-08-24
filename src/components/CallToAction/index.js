import React from "react";
import {
  Headline,
  SectionDesc,
  Btn,
  BtnLink,
  StatTitle,
  StatDesc,
} from "../Common/CommonElements";
import {
  CTAContainer,
  Stat,
  StatsContainer,
  StatInfo,
} from "./CallToActionElements";

const CallToAction = () => {
  return (
    <>
      <CTAContainer>
        <Headline>Equipos de todos los tamaños confían en nosotros</Headline>
        <SectionDesc>
          Obtén el servicio necesario para tu oficina, empresa o corporativo.
        </SectionDesc>
        <Btn className="CTA">
          <BtnLink className="InfoSection">Contáctanos</BtnLink>
        </Btn>
        <StatsContainer>
          <Stat>
            <StatInfo>
              <StatTitle>99%</StatTitle>
              <StatDesc>Hola es una descripcion</StatDesc>
            </StatInfo>
          </Stat>
          <Stat>
            <StatInfo>
              <StatTitle>99%</StatTitle>
              <StatDesc>Hola es una descripcion</StatDesc>
            </StatInfo>
          </Stat>
          <Stat>
            <StatInfo>
              <StatTitle>99%</StatTitle>
              <StatDesc>Hola es una descripcion</StatDesc>
            </StatInfo>
          </Stat>
        </StatsContainer>
      </CTAContainer>
    </>
  );
};

export default CallToAction;
