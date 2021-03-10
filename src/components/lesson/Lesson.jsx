import React from "react";
import { Title } from "../styledComponents/StyledComponents.styled";
import { IntroductionBlockStyled, BodyStyled } from "./LessonStyled.styled";
import FirstLessonContainer from "./firstLesson/FirstLessonContainer";
import SecondLessonContainer from "./secondLesson/SecondLessonContainer";
import ThirdLessonContainer from "./thirdLesson/ThirdLessonContainer";
import FourthLessonContainer from "./fourthLesson/FourthLessonContainer";
import FifthLessonContainer from "./fifthLesson/FifthLessonContainer";

const Lesson = (props) => {
  let currentLesson = <FirstLessonContainer {...props} />;

  if (props.startedLessons.lesson2) {
    currentLesson = <SecondLessonContainer {...props} />;
  }
  if (props.startedLessons.lesson3) {
    currentLesson = <ThirdLessonContainer {...props} />;
  }
  if (props.startedLessons.lesson4) {
    currentLesson = <FourthLessonContainer {...props} />;
  }
  if (props.startedLessons.lesson5) {
    currentLesson = <FifthLessonContainer {...props} />;
  }

  return (
    <div>
      <IntroductionBlockStyled>
        <div>
          <div>Progress bar</div>
          <div>Correct/Incorrect score</div>
        </div>
        <Title>Dictionary Title</Title>
      </IntroductionBlockStyled>
      <BodyStyled>
        <br />
        {currentLesson}
      </BodyStyled>
    </div>
  );
};

export default Lesson;
