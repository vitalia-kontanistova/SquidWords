import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../global";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 0 auto;
  margin-top: 40px;
`;

export const FormQuestion = styled(NavLink)`
  font-size: 18px;
  text-align: center;
  display: block;
  margin-top: 20px;

  span {
    color: ${colors.blue};
  }
`;
export const RegSuccessStyled = styled.div`
  margin-top: 20vh;
`;
