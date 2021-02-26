import styled from "styled-components";
// import { colors } from "../../global";

export const DictionaryListStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 15px;
  column-gap: 20px;

  @media (max-width: 900px) {
    row-gap: 10px;
    column-gap: 10px;
  }
`;
