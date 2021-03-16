import React from "react";
import { Title } from "../../styledComponents/StyledComponents.styled";
import {
  StyledAdditionalBlock,
  StyledButtonBlock,
  StyledLesson,
  StyledMainBlock,
  StyledNextButton,
} from "../LessonStyled.styled";

const SecondLesson = (props) => {
  let options = props.options.map((w) => (
    <StyledAdditionalBlock>{w.wordTranslate}</StyledAdditionalBlock>
  ));

  return (
    <>
      <Title>SECOND</Title>
      <StyledLesson>
        <StyledMainBlock>
          <div>{props.words[0].wordOrigin} </div>
          <div>{props.words[0].wordTranscription}</div>
        </StyledMainBlock>
        {options}
        <StyledButtonBlock>
          <StyledNextButton onClick={props.nextButtonClick}>
            Дальше
          </StyledNextButton>
        </StyledButtonBlock>
      </StyledLesson>
    </>
  );
};

export default SecondLesson;
