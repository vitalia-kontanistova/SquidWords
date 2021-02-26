import React from "react";
import Burger from "./Burger/Burger";
import { StyledBurger, StyledMenu, StyledNav } from "./BurgerMenu.styled";

const BurgerMenu = (props) => {
  return (
    <StyledBurger>
      <StyledMenu {...props} onClick={props.toggleBurgerMenu}>
        {props.isAuth ? (
          <>
            <StyledNav to="/">Словари</StyledNav>
            <StyledNav to="/">Мои словари</StyledNav>
            <StyledNav to="/">Моё расписание</StyledNav>
            <StyledNav to="/">Настройки</StyledNav>
            <StyledNav to="/">О сайте</StyledNav>
            <StyledNav to="/">Выйти</StyledNav>
          </>
        ) : (
          <>
            <StyledNav to="/login">Войти</StyledNav>
            <StyledNav to="/reg">Регистрация</StyledNav>
            <StyledNav to="/">Словари</StyledNav>
            <StyledNav to="/">О сайте</StyledNav>
          </>
        )}
      </StyledMenu>
      <Burger {...props} />
    </StyledBurger>
  );
};

export default BurgerMenu;
