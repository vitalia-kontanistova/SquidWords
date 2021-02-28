import React, { useState } from "react";
import {
  StyledUserMenu,
  StyledMenu,
  StyledNav,
  StyledUser,
  Avatar,
  UserName,
} from "./UserMenu.styled";

const UserMenu = (props) => {
  let [isMenuOpen, setMenuStatus] = useState(false);

  return (
    <StyledUserMenu
      onMouseOver={() => setMenuStatus(true)}
      onMouseOut={() => setMenuStatus(false)}
    >
      <StyledUser
        isOpen={isMenuOpen}
        onMouseOver={() => setMenuStatus(true)}
        onMouseOut={() => setMenuStatus(false)}
      >
        <Avatar />
        <UserName>{props.userName}</UserName>
      </StyledUser>

      <StyledMenu isOpen={isMenuOpen}>
        <StyledNav to="/my-dictionaries">Мои словари</StyledNav>
        <StyledNav to="/">Моё расписание</StyledNav>
        <StyledNav to="/">Настройки</StyledNav>
        <StyledNav to="/">Выйти</StyledNav>
      </StyledMenu>
    </StyledUserMenu>
  );
};

export default UserMenu;
