import React from "react";
import {
  InfoContainer,
  ProductImage,
  ProductInfo,
} from "./InfoSectionElements";
import {
  SectionDesc,
  SectionTitle,
  Btn,
  BtnLink,
} from "../Common/CommonElements";

const InfoSection = () => {
  return (
    <InfoContainer>
      <ProductImage>Imagen</ProductImage>
      <ProductInfo>
        <SectionTitle>Soluciones de Impresion</SectionTitle>
        <SectionDesc>
          Explora nuestros equipos de última tecnología para potenciar las
          tareas y reducir tiempos, en tus negocios y oficinas.
          <Btn className="Hero">
            <BtnLink className="InfoSection">Ver más</BtnLink>
          </Btn>
        </SectionDesc>
      </ProductInfo>
    </InfoContainer>
  );
};

export default InfoSection;
