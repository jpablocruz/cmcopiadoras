import React from "react";
import {
  ContactContainer,
  ContactDirection,
  ContactHeadline,
  ContactSection,
  GMapsContainer,
  Direction,
} from "./ContactsElements";
import PointerComponent from "./PointerComponent";
import GoogleMapReact from "google-map-react";
import ContactsBlock from "../ContactsBlock";
import { SectionTitle } from "../Common/CommonElements";

const Contacts = () => {
  const defaultProps = {
    center: {
      lat: 25.684022759799458,
      lng: -100.30640465642604,
    },
    marker: { lat: 25.684022759799458, lng: -100.30640465642604 },
    zoom: 15,
  };
  return (
    <ContactContainer>
      <ContactHeadline>
        <SectionTitle>¡Contáctanos Hoy!</SectionTitle>
      </ContactHeadline>
      <ContactSection>
        <ContactsBlock />
        <ContactDirection>
          <SectionTitle className="Contacts">Direcciones</SectionTitle>
          <GMapsContainer>
            <div style={{ height: "60vh", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: process.env.REACT_APP_GOOGLE_API_KEY,
                }}
                center={defaultProps.center}
                zoom={defaultProps.zoom}
              >
                <PointerComponent
                  lat={defaultProps.marker.lat}
                  lng={defaultProps.marker.lng}
                  text="CM Copiadoras"
                />
              </GoogleMapReact>
            </div>
          </GMapsContainer>
          <Direction>
            <span>Reforma 802, Centro, 64000 Monterrey, N.L.</span>
          </Direction>
        </ContactDirection>
      </ContactSection>
    </ContactContainer>
  );
};

export default Contacts;
