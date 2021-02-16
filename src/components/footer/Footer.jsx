import React from "react";
import { Container } from "../styledComponents/StyledComponents.styled";
import { FooterStyled, Text } from "./FooterStyled.styled";

const Footer = (props) => {
  return (
    <FooterStyled>
      <Container>
        <Text>© SquidWords 2020 - See soon in sea!</Text>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
