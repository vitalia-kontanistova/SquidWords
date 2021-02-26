import React from "react";
import LoginForm from "./LoginForm";
import { Title } from "../styledComponents/StyledComponents.styled";
import { FormQuestion } from "../registration/RegStyled.styled";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  if (props.isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Title>Вход</Title>
      <LoginForm {...props} />
      <FormQuestion to="/reg">
        Нет аккаунта? <span>Регистрация</span>
      </FormQuestion>
      <FormQuestion to="/">
        {/* поправить */}
        Забыли пароль? <span>Восстановить</span>
      </FormQuestion>
    </>
  );
};

export default Login;
