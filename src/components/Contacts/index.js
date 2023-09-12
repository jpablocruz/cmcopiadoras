import React from "react";
import {
  ContactContainer,
  ContactDirection,
  ContactHeadline,
  ContactInfo,
  ContactSection,
} from "./ContactsElements";

import ContactsBlock from "../ContactsBlock";
import { SectionTitle } from "../Common/CommonElements";

const Contacts = () => {
  return (
    <ContactContainer>
      <ContactHeadline>
        <SectionTitle>¡Contáctanos Hoy!</SectionTitle>
      </ContactHeadline>
      <ContactSection>
        <ContactsBlock />
        <ContactDirection>seccion de direcciones</ContactDirection>
      </ContactSection>
    </ContactContainer>
  );
};

export default Contacts;
