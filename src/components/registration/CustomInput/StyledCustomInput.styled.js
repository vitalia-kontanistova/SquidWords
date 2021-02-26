import styled from "styled-components";
import { colors } from "../../../global";

/* border: 1px solid plum; */

export const Label = styled.label`
  font-size: 20px;
  & span {
    display: block;
    margin-bottom: 15px;
  }
`;
export const Input = styled.input`
  width: 400px;
  height: 40px;
  background: ${colors.white};
  border: 1px solid ${(props) => (props.border ? colors.darkRed : colors.grey)};
  border-radius: 0px 5px 5px 5px;
  padding: 5px 10px;
  font-size: 20px;
  color: inherit;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    width: 290px;
  }
`;
export const ErrorText = styled.span`
  font-size: ${(props) => (props.big ? "20px" : "18px")};
  margin-top: -10px;
  margin-bottom: 20px;

  color: ${colors.darkRed};
`;
