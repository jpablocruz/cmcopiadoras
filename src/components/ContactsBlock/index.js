import React from "react";
import {
  Container,
  ColorLine,
  ContainerRows,
  RowTable,
  RowInfo,
  RowText,
  RowIcon,
} from "./ContactsBlock";

import { GoMail } from "react-icons/go";
const ContactsBlock = () => {
  return (
    <>
      <Container>
        <ColorLine />
        <ContainerRows>
          <RowTable>
            <RowInfo>
              <RowIcon>
                <GoMail />
              </RowIcon>
              <RowText> mail@mail.com</RowText>
            </RowInfo>
          </RowTable>
        </ContainerRows>
      </Container>
    </>
  );
};

export default ContactsBlock;
