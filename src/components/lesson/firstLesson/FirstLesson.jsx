import React from "react";
import { Title } from "../../styledComponents/StyledComponents.styled";
import {
  StyledLesson,
  StyledMainBlock,
  StyledAdditionalBlock,
  StyledNextButton,
  StyledButtonBlock,
} from "../LessonStyled.styled";

const FirstLesson = (props) => {
  return (
    <>
      <Title>FIRST</Title>
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

export default FirstLesson;
