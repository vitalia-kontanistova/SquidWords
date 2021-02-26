import styled from "styled-components";
import { colors } from "../../global";
import { NavLink } from "react-router-dom";
import { Container } from "../styledComponents/StyledComponents.styled";

/* border: 1px solid plum; */

export const HeaderStyled = styled.header`
  height: 75px;
  display: flex;
  border-bottom: solid 1px ${colors.grey};

  // @media (max-width: 600px) {  }
`;

export const HeaderContainer = styled(Container)`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: max-content 1fr max-content;
`;

export const CompanyAttr = styled(NavLink)`
  display: flex;
  align-items: center;
  margin: 0 40px 0 0;
  font-size: 24px;

  img {
    width: 70px;
    margin: 0 5px 0 0;
  }

  @media (max-width: 600px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
  }
`;
export const Menu = styled.nav`
  display: flex;
  font-size: 16px;
  color: ${colors.darkBlue};

  a {
    margin-right: 30px;
  }
`;
export const Buttons = styled.div`
  color: ${colors.white};
  margin-left: 30px;
`;
export const Button = styled(NavLink)`
  border-radius: 5px;
  padding: 5px 10px;
  background: ${(props) => (props.reg ? colors.lightBlue : colors.darkBlue)};
  font-size: 20px;
  text-align: center;
  margin-right: ${(props) => (props.reg ? "18px" : "")};
`;
