import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "../../global";

/* border: 1px solid plum; */

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

export const DictionaryTileStyled = styled(NavLink)`
  display: flex;
  border-radius: 4px;
  background: ${colors.white};
  border: 1px solid ${colors.grey};
  max-width: 530px;
  height: 180px;

  @media (max-width: 900px) {
    height: 150px;
  }

  @media (max-width: 600px) {
  }
`;

export const Cover = styled.img`
  height: 100%;
  border-radius: 4px;
`;
export const Body = styled.div`
  width: 100%;
  padding: 15px;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
`;
export const Text = styled.div`
  font-size: ${(props) =>
    props.title ? "18px" : props.descr ? "14px" : "16px"};
  margin-bottom: ${(props) => (props.title ? "20px" : "0")};
  margin-top: ${(props) => (props.info ? "20px" : "0")};
  text-align: ${(props) => (props.info ? "right" : "left")};
`;
