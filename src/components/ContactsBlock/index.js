import React from "react";
import { RowTable, RowInfo, RowText, RowIcon } from "./ContactsBlock";

import { GoMail } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";

const ContactsBlock = () => {
  return (
    <>
      <RowTable>
        <RowInfo>
          <RowIcon>
            <GoMail />
          </RowIcon>
          <RowText> mail@mail.com</RowText>
        </RowInfo>
        <RowInfo>
          <RowIcon>
            <GoMail />
          </RowIcon>
          <RowText> mail@mail.com</RowText>
        </RowInfo>
        <RowInfo>
          <RowIcon>
            <BsTelephone />
          </RowIcon>
          <RowText> +81 17044464</RowText>
        </RowInfo>
        <RowInfo>
          <RowIcon>
            <BsTelephone />
          </RowIcon>
          <RowText> +81 17044464</RowText>
        </RowInfo>
        <RowInfo>
          <RowIcon>
            <BsTelephone />
          </RowIcon>
          <RowText> +81 17044464</RowText>
        </RowInfo>
      </RowTable>
    </>
  );
};

export default ContactsBlock;
