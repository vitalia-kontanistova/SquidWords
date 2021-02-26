import React, { useState } from "react";
import {
  StyledUser,
  StyledMenu,
  StyledNav,
  StyledUser1,
  Avatar,
  UserName,
} from "./UserMenu.styled";

const UserMenu = (props) => {
  let [isMenuOpen, setMenuStatus] = useState(false);

  return (
    <StyledUser
      onMouseOver={() => setMenuStatus(true)}
      onMouseOut={() => setMenuStatus(false)}
    >
      <StyledUser1
        isOpen={isMenuOpen}
        onMouseOver={() => setMenuStatus(true)}
        onMouseOut={() => setMenuStatus(false)}
      >
        <Avatar />
        <UserName>{props.userName}</UserName>
      </StyledUser1>

      <StyledMenu isOpen={isMenuOpen}>
        <StyledNav to="/">Мои словари</StyledNav>
        <StyledNav to="/">Моё расписание</StyledNav>
        <StyledNav to="/">Настройки</StyledNav>
        <StyledNav to="/">Выйти</StyledNav>
      </StyledMenu>
    </StyledUser>
  );
};

export default UserMenu;
