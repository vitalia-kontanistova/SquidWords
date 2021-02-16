import styled from "styled-components";
import { colors } from "../../global";

/* border: 1px solid plum; */

export const FooterStyled = styled.footer`
  height: 70px;
  padding: 25px 0;
  border-top: solid 1px ${colors.grey};

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Text = styled.div`
  text-align: center;
`;
