import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../global";

export const StyledBurger = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const StyledMenu = styled.nav`
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: left;
  /* z-index: 15; */
  background-color: ${colors.white};
  padding: 85px 15px 15px 35px;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(-100%)"};
  /* color: ${colors.blue}; */
`;
export const StyledNav = styled(NavLink)`
  font-size: 18px;
  line-height: 25px;
  margin: 5px 0;
  font-weight: "400";
  font-size: "18px";
  line-height: "25px";
`;
