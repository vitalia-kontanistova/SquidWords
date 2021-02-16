import React from "react";
import logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import {
  HeaderStyled,
  HeaderContainer,
  Menu,
  CompanyAttr,
  Button,
  Buttons,
} from "./HeaderStyled.styled";

let Header = (props) => {
  return (
    <HeaderStyled>
      <HeaderContainer>
        <CompanyAttr to="/">
          <img src={logo} alt="" />
          <span>SquidWords</span>
        </CompanyAttr>

        <Menu>
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/">Словари</NavLink>
          {/* <NavLink to="/">Мои словари</NavLink> */}
          {/* <NavLink to="/">Моё расписание</NavLink> */}
        </Menu>

        <Buttons>
          <Button reg to="/reg">
            Регистрация
          </Button>
          <Button to="/auth">Войти</Button>
        </Buttons>
      </HeaderContainer>
    </HeaderStyled>
  );
};

export default Header;
