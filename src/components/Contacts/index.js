import React from "react";
import {
  ContactContainer,
  ContactDirection,
  ContactHeadline,
  ContactSection,
  GMapsContainer,
} from "./ContactsElements";
import PointerComponent from "./PointerComponent";
import GoogleMapReact from "google-map-react";
import ContactsBlock from "../ContactsBlock";
import { SectionTitle } from "../Common/CommonElements";

const Contacts = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <ContactContainer>
      <ContactHeadline>
        <SectionTitle>¡Contáctanos Hoy!</SectionTitle>
      </ContactHeadline>
      <ContactSection>
        <ContactsBlock />
        <ContactDirection>
          <SectionTitle>Direcciones</SectionTitle>
          <GMapsContainer>
            <div style={{ height: "100vh", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: process.env.REACT_APP_GOOGLE_API_KEY,
                }}
                center={defaultProps.center}
                zoom={defaultProps.zoom}
              >
                <PointerComponent
                  lat={10.99835602}
                  lng={77.01502627}
                  text="My Marker"
                />
              </GoogleMapReact>
            </div>
          </GMapsContainer>
        </ContactDirection>
      </ContactSection>
    </ContactContainer>
  );
};

export default Contacts;
