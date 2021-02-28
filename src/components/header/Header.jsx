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
import BurgerMenuContainer from "./BugerMenu/BurgerMenuContainer";
import UserMenuContainer from "./UserMenu/UserMenuContainer";

let Header = (props) => {
  return (
    <HeaderStyled>
      <HeaderContainer>
        <BurgerMenuContainer {...props} />

        <CompanyAttr to="/" {...props}>
          <img src={logo} alt="" />
          <span>SquidWords</span>
        </CompanyAttr>

        <Menu>
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/">Словари</NavLink>
        </Menu>
        {props.isAuth ? (
          <UserMenuContainer />
        ) : (
          <Buttons>
            <Button reg to="/reg">
              Регистрация
            </Button>
            <Button to="/login">Войти</Button>
          </Buttons>
        )}
      </HeaderContainer>
    </HeaderStyled>
  );
};

export default Header;
