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

export const WordsListStyled = styled.div`
  width: 100%;
  border: 0.5px solid ${colors.grey};
  border-radius: 5px;
  margin-top: 15px;
`;
export const WordsStyled = styled.div`
  display: grid;
  grid-template-columns: min-content 41px 2fr 2fr 4fr 1fr 85px;
`;
export const Cell = styled.div`
  background: ${colors.white};
  border: 0.5px solid ${colors.grey};
  padding: 3px 8px;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.center ? "center" : "left")};
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

export const ScoreItem = styled.span`
  width: 6px;
  height: 12px;
  margin: 2px;
  background-color: ${(props) => (props.blue ? colors.blue : colors.grey)};
`;
export const ScoreScaleStyled = styled.div`
  display: flex;
`;
