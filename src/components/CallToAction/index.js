import React from "react";
import { Headline, SectionDesc, Btn, BtnLink } from "../Common/CommonElements";
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
            <StatInfo></StatInfo>
          </Stat>
          <Stat>
            <StatInfo></StatInfo>
          </Stat>
          <Stat>
            <StatInfo></StatInfo>
          </Stat>
        </StatsContainer>
      </CTAContainer>
    </>
  );
};

export default CallToAction;
