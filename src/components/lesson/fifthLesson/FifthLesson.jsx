import { Title } from "../../styledComponents/StyledComponents.styled";
import React from "react";
import {
  StyledAdditionalBlock,
  StyledButtonBlock,
  StyledLesson,
  StyledMainBlock,
  StyledNextButton,
} from "../LessonStyled.styled";

const FifthLesson = (props) => {
  return (
    <>
      <Title>FIFTH</Title>
      <StyledLesson>
        <StyledMainBlock>
          <div>{props.words[0].wordOrigin} </div>
          <div>{props.words[0].wordTranscription}</div>
        </StyledMainBlock>
        <StyledAdditionalBlock>
          {props.words[0].wordTranslate}
        </StyledAdditionalBlock>
        <StyledButtonBlock>
          <StyledNextButton onClick={props.nextButtonClick}>
            Дальше
          </StyledNextButton>
        </StyledButtonBlock>
      </StyledLesson>
    </>
  );
};

export default FifthLesson;
