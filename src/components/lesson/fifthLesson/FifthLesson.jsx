import { Button, Title } from "../../styledComponents/StyledComponents.styled";
import React from "react";

const FifthLesson = (props) => {
  return (
    <div>
      <Title>FIFTH</Title>
      <div>
        {props.words[0].wordOrigin} {props.words[0].wordTranscription}
      </div>
      <div>{props.words[0].wordTranslate}</div>
      <Button onClick={props.lernNextWord}>Дальше</Button>
    </div>
  );
};

export default FifthLesson;
