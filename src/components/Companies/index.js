import React from "react";
import {
  CompaniesContainer,
  TitleContainer,
  CompanyLogos,
  Logo,
} from "./CompaniesElements";

const Companies = () => {
  return (
    <CompaniesContainer>
      <TitleContainer>EMPRESAS QUE CONFIÁN EN NOSOTROS</TitleContainer>
      <CompanyLogos>
        <Logo>Hola</Logo>
        <Logo>Hola2</Logo>
        <Logo>Hola3</Logo>
        <Logo>Hola4</Logo>
        <Logo>Hola</Logo>
      </CompanyLogos>
    </CompaniesContainer>
  );
};

export default Companies;
