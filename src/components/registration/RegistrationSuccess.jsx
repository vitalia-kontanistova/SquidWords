import React from "react";
import { Title } from "../styledComponents/StyledComponents.styled";
import { RegSuccessStyled } from "./RegStyled.styled";

const RegistrationSuccess = (props) => {
  return (
    <RegSuccessStyled>
      <Title>Регистрация прошла успешно!</Title>
      <br />
      <Title>Проверье свою почту для верификации аккаунта.</Title>
    </RegSuccessStyled>
  );
};

export default RegistrationSuccess;
