import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../global";

export const StyledUser = styled.div`
  position: relative;
  color: ${colors.white};
`;
export const StyledMenu = styled.div`
  background: ${colors.blue};
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 16px 16px;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  padding: 5px 5px 5px 30px;
  min-width: 100%;
  position: absolute;
  z-index: 5;
`;
export const StyledNav = styled(NavLink)`
  font-size: 16px;
  line-height: 19px;
  margin: 5px 0;
`;
export const StyledUser1 = styled.div`
  min-width: 121px;
  display: flex;
  align-items: center;
  background: ${colors.blue};
  border-radius: ${(props) => (props.isOpen ? "16px 16px 0 0" : "16px")};
  padding: 5px;
`;
export const Avatar = styled.div`
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background: ${colors.lightRed};
`;
export const UserName = styled.div`
  font-size: 16px;
  color: ${colors.white};
  margin: 0 5px;
`;
