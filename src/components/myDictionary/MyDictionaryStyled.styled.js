import styled from "styled-components";
import { colors } from "../../global";

/* border: 1px solid plum; */

export const DictionaryStyled = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 900px) {
  }
`;

export const CoverStyled = styled.div`
  margin-right: 40px;

  img {
    max-width: 200px;
    border: 1px solid ${colors.grey};
    border-radius: 4px;
  }
  div {
    font-size: 20px;
    margin-top: 10px;
  }

  @media (max-width: 900px) {
    img {
      max-width: 150px;
    }
  }
`;

export const Body = styled.div`
  width: 100%;
`;

export const WordsList = styled.div`
  width: 100%;
  border: 0.5px solid ${colors.grey};
  border-radius: 5px;
  margin-top: 15px;
`;
export const WordsStyled = styled.div`
  display: grid;
  /* grid-template-columns: 41px 1fr 1fr 2fr; */
  grid-template-columns: min-content 41px 1fr 1fr 2fr;
  div {
    background: ${colors.white};
    border: 0.5px solid ${colors.grey};
    padding: 3px 8px;
  }
`;
export const Cell = styled.div`
  text-align: ${(props) => (props.center ? "center" : "left")};
`;
export const LearnDictionaryButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const LineDecor = styled.div`
  width: 60%;
  height: 2px;
  margin-top: 20px;
  border-radius: 1px;
  background-color: ${colors.grey};
`;
