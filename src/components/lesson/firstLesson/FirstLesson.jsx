import React from "react";
import { Button, Title } from "../../styledComponents/StyledComponents.styled";

const FirstLesson = (props) => {
  return (
    <div>
      <Title>FIRST</Title>
      <div>
        {props.words[0].wordOrigin} {props.words[0].wordTranscription}
      </div>
      <div>{props.words[0].wordTranslate}</div>
      <Button onClick={props.nextButtonClick}>Дальше</Button>
    </div>
  );
};

export default FirstLesson;
