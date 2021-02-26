import React from "react";
import RegForm from "./RegForm";
import { Title } from "../styledComponents/StyledComponents.styled";
import { FormQuestion } from "./RegStyled.styled";
import RegistrationSuccess from "./RegistrationSuccess";

const Registration = (props) => {
  if (props.isRegSuccess) {
    return <RegistrationSuccess />;
  } else {
    return (
      <>
        <Title>Регистрация</Title>
        <RegForm {...props} />
        <FormQuestion to="/logIn">
          Уже есть аккаунт? <span>Войдите</span>
        </FormQuestion>
      </>
    );
  }
};

export default Registration;
