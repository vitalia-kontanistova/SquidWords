import React from "react";
import { Button, Title } from "../../styledComponents/StyledComponents.styled";
import {
  StyledAdditionalBlock,
  StyledButtonBlock,
  StyledLesson,
  StyledMainBlock,
  StyledNextButton,
} from "../LessonStyled.styled";

const FourthLesson = (props) => {
  return (
    <>
      <Title>FOURTH</Title>
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

export default FourthLesson;
